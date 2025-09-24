export const getPasswordStrength = (password: string) => {
  const hasMinLength = /^.{8,}$/.test(password);
  const hasLetter = /\p{L}/u.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSymbol = /[\W_]/.test(password);

  const criteriaMatched = [hasMinLength, hasLetter, hasDigit, hasSymbol].filter(Boolean);
  const passwordScore = criteriaMatched.length;

  return [, 'Weak', 'Medium', 'Strong', 'Very strong'][passwordScore] ?? '';
};
