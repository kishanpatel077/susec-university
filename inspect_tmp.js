import fs from 'fs';

const html = fs.readFileSync('.tmp-form.html', 'utf8');
console.log('File length:', html.length);
console.log('First 500 chars:', html.substring(0, 500));

// Let's check if there are any specific strings in it
const match = html.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(.*?);/);
if (match) {
  console.log('Found FB_PUBLIC_LOAD_DATA_!');
  try {
    const data = JSON.parse(match[1]);
    console.log('Form title:', data[1][8] || data[1][0]);
    const items = data[1][1] || [];
    console.log('Number of items:', items.length);
    for (let i = 0; i < Math.min(items.length, 10); i++) {
      console.log(`Item ${i}:`, items[i][1], 'Type:', items[i][3]);
    }
  } catch (e) {
    console.log('Error parsing JSON:', e.message);
  }
} else {
  console.log('No FB_PUBLIC_LOAD_DATA_ found.');
}
