export const getPasswordStrength = (password: string) => {
  const hasMinLength = /^.{8,}$/.test(password);
  const hasLetter = /\p{L}/u.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSymbol = /[\W_]/.test(password);

  const criteriaMatched = [hasMinLength, hasLetter, hasDigit, hasSymbol].filter((criteria) => criteria === true);
  const passwordScore = criteriaMatched.length;

  let passwordStrength;

  if (passwordScore === 4) {
    passwordStrength = 'Strong';
  } else if (passwordScore >= 2) {
    passwordStrength = 'Medium';
  } else if (passwordScore >= 1) {
    passwordStrength = 'Weak';
  } else {
    passwordStrength = '';
  }

  return passwordStrength;
};
