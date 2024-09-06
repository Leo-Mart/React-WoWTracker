export const validateForm = (data, isLogin) => {
  const errors = {};

  if (isLogin) {
    if (!data.password) {
      errors.password = 'Password is required';
    }
  } else {
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  }
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  return errors;
};
