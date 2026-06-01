import fs from 'fs';

function parseHtml(html) {
  const marker = 'FB_PUBLIC_LOAD_DATA_ =';
  const startIndex = html.indexOf(marker);
  if (startIndex === -1) {
    console.log('Marker not found');
    return null;
  }
  
  // Grab from marker to the next </script>
  const rest = html.substring(startIndex + marker.length);
  const endScriptIndex = rest.indexOf('</script>');
  if (endScriptIndex === -1) {
    console.log('Closing script tag not found');
    return null;
  }
  
  let jsCode = rest.substring(0, endScriptIndex).trim();
  // Usually it ends with a semicolon. Let's strip trailing semicolons.
  if (jsCode.endsWith(';')) {
    jsCode = jsCode.slice(0, -1);
  }
  
  try {
    const data = JSON.parse(jsCode);
    console.log('Successfully parsed! Data length:', jsCode.length);
    return data;
  } catch (e) {
    console.log('JSON.parse failed, trying eval/brute force matching...');
    // If it has something trailing, let's try to find the last closing square bracket ']'
    // Google form load data is a single array starting with '[' and ending with ']'
    let bracketCount = 0;
    let endJsonIndex = -1;
    for (let i = 0; i < jsCode.length; i++) {
      if (jsCode[i] === '[') {
        bracketCount++;
      } else if (jsCode[i] === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          endJsonIndex = i + 1;
          break;
        }
      }
    }
    
    if (endJsonIndex !== -1) {
      try {
        const jsonStr = jsCode.substring(0, endJsonIndex);
        const data = JSON.parse(jsonStr);
        console.log('Successfully parsed using bracket matching! Data length:', jsonStr.length);
        return data;
      } catch (err) {
        console.log('Bracket matching parse also failed:', err.message);
      }
    }
    
    console.log('Raw code snippet (last 200 chars):', jsCode.slice(-200));
    return null;
  }
}

const html = fs.readFileSync('.tmp-form.html', 'utf8');
const data = parseHtml(html);
if (data) {
  const title = data[1][8] || data[1][0];
  const items = data[1][1] || [];
  console.log('Form title:', title);
  console.log('Number of fields:', items.length);
  const fields = [];
  for (const item of items) {
    const label = item[1];
    const typeCode = item[3];
    if (!label) continue;
    
    let type = 'text';
    let options = [];
    let required = false;
    
    const inputMeta = item[4] ? item[4][0] : null;
    if (inputMeta) {
      required = !!inputMeta[2];
      if (inputMeta[1]) {
        options = inputMeta[1].map(opt => opt[0]).filter(Boolean);
      }
    }
    
    if (typeCode === 1) {
      type = 'text';
    } else if (typeCode === 2) {
      type = 'textarea';
    } else if (typeCode === 3) {
      type = 'select'; // radio
    } else if (typeCode === 4) {
      type = 'select'; // checkboxes / multiselect
    } else if (typeCode === 5) {
      type = 'select'; // dropdown
    }
    
    fields.push({
      name: label,
      label,
      type,
      required,
      options: options.length > 0 ? options : undefined
    });
  }
  console.log(JSON.stringify(fields, null, 2));
}
