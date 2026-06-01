import { useMemo, useState } from 'react';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';
import { applyFormFields } from '../../config/applyForms';
import { submitApplyForm } from '../../services/googleFormApi';

const buildInitialFormData = (fields) =>
  fields.reduce((values, field) => {
    if (field.type === 'checkbox') {
      values[field.name] = false;
    } else if (field.type === 'file') {
      values[field.name] = null;
    } else {
      values[field.name] = '';
    }

    if (field.allowOther) {
      values[`${field.name}__other`] = '';
    }
    return values;
  }, {});

const validateField = (field, value) => {
  const normalizedValue = String(value || '').trim();

  if (field.type === 'file' && field.required && !value) {
    return `${field.label} is required.`;
  }

  if (field.type === 'checkbox' && field.required && !value) {
    return `${field.label} is required.`;
  }

  if (field.required && !normalizedValue) {
    return `${field.label} is required.`;
  }

  if (field.type === 'email' && normalizedValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedValue)) {
    return 'Enter a valid email address.';
  }

  if (field.pattern && normalizedValue && !new RegExp(field.pattern).test(normalizedValue)) {
    return field.errorMessage || `Enter a valid ${field.label}.`;
  }

  if (field.minLength && normalizedValue && normalizedValue.length < field.minLength) {
    return `${field.label} must be at least ${field.minLength} characters.`;
  }

  return '';
};

const buildSubmissionPayload = (formData, applicationTitle, fields) => {
  const normalizedFormData = { ...formData };

  fields.forEach((field) => {
    if (field.type === 'file') {
      normalizedFormData[field.name] = normalizedFormData[field.name]?.name || '';
    }

    if (field.allowOther && normalizedFormData[field.name] === 'Other') {
      const otherText = String(normalizedFormData[`${field.name}__other`] || '').trim();
      normalizedFormData[field.name] = otherText ? `Other: ${otherText}` : 'Other:';
      delete normalizedFormData[`${field.name}__other`];
    }

    if (field.type !== 'checkbox') {
      return;
    }

    if (field.submitValue) {
      normalizedFormData[field.name] = normalizedFormData[field.name]
        ? field.submitValue
        : '';
      return;
    }

    normalizedFormData[field.name] = normalizedFormData[field.name] ? 'Yes' : '';
  });

  const emailValue =
    normalizedFormData['Email']
    || normalizedFormData['Email Id']
    || normalizedFormData['Email id']
    || normalizedFormData['Mail Id']
    || normalizedFormData['Mail id']
    || normalizedFormData['Mail Id of Team Leader']
    || normalizedFormData['E-Mail Address']
    || normalizedFormData['E Mail Address']
    || '';
  const applicantValue =
    normalizedFormData['Full Name']
    || normalizedFormData['Full Name of the Founder of Startup']
    || normalizedFormData['Name of Applicant']
    || normalizedFormData['Name of Team Leader']
    || normalizedFormData['Name']
    || normalizedFormData['Name ']
    || '';
  const contactValue =
    normalizedFormData['Contact No.']
    || normalizedFormData['Mob No']
    || normalizedFormData['Contact Number of Founder / Managing Director']
    || normalizedFormData['Contact Number of Team Leader']
    || normalizedFormData['Mobile Number']
    || '';

  return {
    ...normalizedFormData,
    'Application Type': applicationTitle,
    'Applicant Name': applicantValue,
    'Email Address': emailValue,
    Email: emailValue,
    'Mobile Number': contactValue,
    Source: 'SUSEC React Website',
    SubmittedAt: new Date().toISOString(),
  };
};

const ApplyForm = ({ selectedApplication }) => {
  const fields = selectedApplication?.fields || applyFormFields;
  const [formData, setFormData] = useState(() => buildInitialFormData(fields));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeApplication = useMemo(
    () => selectedApplication,
    [selectedApplication],
  );

  // Validate against the same field config used to render inputs, avoiding duplicate rules.
  const validateForm = () => {
    const nextErrors = {};

    fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        nextErrors[field.name] = error;
      }

      if (
        field.allowOther
        && formData[field.name] === 'Other'
        && !String(formData[`${field.name}__other`] || '').trim()
      ) {
        nextErrors[field.name] = `${field.label} is required.`;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { checked, files, name, type, value } = event.target;

    if (type === 'file') {
      setFormData((currentData) => ({
        ...currentData,
        [name]: files?.[0] || null,
      }));
    } else {
      setFormData((currentData) => ({
        ...currentData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: '',
      }));
    }
  };

  // Prevent page refresh and submit directly to the Apps Script web app with fetch.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields before submitting.' });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitApplyForm(
        buildSubmissionPayload(formData, selectedApplication.title, fields),
        selectedApplication.scriptUrl,
      );

      setStatus({
        type: 'success',
        message: 'Application submitted successfully. SUSEC team will review your details.',
      });
      setFormData(buildInitialFormData(fields));
      setErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Submission failed. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="apply-form" onSubmit={handleSubmit} noValidate>
      <div className="apply-form-grid">
        {fields.map((field) => (
          <div
            key={field.name}
            className={`apply-field ${field.type === 'textarea' || field.type === 'checkbox' || field.type === 'radio' || field.type === 'file' ? 'apply-field-wide' : ''}`}
          >
            {field.type !== 'checkbox' && (
              <label htmlFor={field.name} className="apply-label">
                {field.label}
                {field.required && <span aria-hidden="true"> *</span>}
              </label>
            )}

            {field.helpText && field.type !== 'checkbox' && (
              <p className="apply-field-help">{field.helpText}</p>
            )}

            {field.referenceImage && (
              <img
                src={field.referenceImage}
                alt={field.referenceImageAlt || field.label}
                className="apply-field-reference-image"
              />
            )}

            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={errors[field.name] ? 'apply-input apply-input-error' : 'apply-input'}
                disabled={isSubmitting}
                required={field.required}
              >
                <option value="">Choose</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'radio' ? (
              <div className={`apply-radio-group ${errors[field.name] ? 'apply-input-error' : ''}`}>
                {field.options.map((option) => (
                  <label key={option} className="apply-radio">
                    <input
                      type="radio"
                      name={field.name}
                      value={option}
                      checked={formData[field.name] === option}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required={field.required}
                    />
                    <span>{option}</span>
                  </label>
                ))}
                {field.allowOther && (
                  <label className="apply-radio apply-radio-other">
                    <input
                      type="radio"
                      name={field.name}
                      value="Other"
                      checked={formData[field.name] === 'Other'}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required={field.required}
                    />
                    <span>Other:</span>
                    <input
                      type="text"
                      name={`${field.name}__other`}
                      value={formData[`${field.name}__other`]}
                      onChange={handleChange}
                      className="apply-input apply-other-input"
                      placeholder="Your answer"
                      disabled={isSubmitting || formData[field.name] !== 'Other'}
                    />
                  </label>
                )}
              </div>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={errors[field.name] ? 'apply-input apply-input-error' : 'apply-input'}
                placeholder={field.placeholder}
                rows={field.rows || 4}
                disabled={isSubmitting}
                required={field.required}
              />
            ) : field.type === 'checkbox' ? (
              <label className="apply-checkbox">
                <input
                  id={field.name}
                  name={field.name}
                  type="checkbox"
                  checked={Boolean(formData[field.name])}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required={field.required}
                />
                <span>{field.label}</span>
              </label>
            ) : field.type === 'file' ? (
              <div className="apply-file-field">
                <input
                  id={field.name}
                  name={field.name}
                  type="file"
                  onChange={handleChange}
                  accept={field.accept}
                  className={errors[field.name] ? 'apply-input apply-input-error' : 'apply-input'}
                  disabled={isSubmitting}
                  required={field.required}
                />
                {formData[field.name]?.name && (
                  <p className="apply-file-name">Selected file: {formData[field.name].name}</p>
                )}
              </div>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                className={errors[field.name] ? 'apply-input apply-input-error' : 'apply-input'}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                min={field.min}
                disabled={isSubmitting}
                required={field.required}
              />
            )}

            {errors[field.name] && <p className="apply-error-text">{errors[field.name]}</p>}
          </div>
        ))}
      </div>

      {activeApplication?.description && (
        <p className="apply-help-text">{activeApplication.description}</p>
      )}

      {status.message && (
        <div className={`apply-alert apply-alert-${status.type}`} role="alert">
          {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{status.message}</span>
        </div>
      )}

      <button type="submit" className="btn btn-primary apply-submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="apply-spinner" size={18} />
            Submitting...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
};

export default ApplyForm;
