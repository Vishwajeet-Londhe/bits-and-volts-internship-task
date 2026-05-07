// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Mobile validation (10 digits)
export const isValidMobile = (mobile) => {
  const mobileRegex = /^[0-9]{10}$/;
  return mobileRegex.test(mobile);
};

// Full name validation
export const isValidFullName = (fullName) => {
  return fullName && fullName.trim().length >= 2 && fullName.trim().length <= 50;
};

// Location validation
export const isValidLocation = (location) => {
  return !location || location.trim().length <= 100;
};

// Validate form data
export const validateUserForm = (formData) => {
  const errors = {};

  if (!formData.fullName || formData.fullName.trim().length === 0) {
    errors.fullName = 'Full name is required';
  } else if (!isValidFullName(formData.fullName)) {
    errors.fullName = 'Full name must be between 2 and 50 characters';
  }

  if (!formData.email || formData.email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.mobile || formData.mobile.trim().length === 0) {
    errors.mobile = 'Mobile number is required';
  } else if (!isValidMobile(formData.mobile)) {
    errors.mobile = 'Mobile number must be 10 digits';
  }

  if (!formData.gender) {
    errors.gender = 'Gender is required';
  }

  if (!formData.status) {
    errors.status = 'Status is required';
  }

  if (formData.location && !isValidLocation(formData.location)) {
    errors.location = 'Location must not exceed 100 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
