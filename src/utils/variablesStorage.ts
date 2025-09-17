export type UserVariables = Record<string, string>;

const getStorageKey = (username: string) => `variables_${username}`;

export const getUserVariables = (username: string): UserVariables => {
  if (!username) return {};
  try {
    const raw = localStorage.getItem(getStorageKey(username));
    return raw ? (JSON.parse(raw) as UserVariables) : {};
  } catch (err) {
    console.error('Failed to parse variables from localStorage', err);
    return {};
  }
};

export const setUserVariables = (username: string, variables: UserVariables): void => {
  if (!username) return;
  try {
    localStorage.setItem(getStorageKey(username), JSON.stringify(variables));
  } catch (err) {
    console.error('Failed to save variables to localStorage', err);
  }
};

export const clearUserVariables = (username: string): void => {
  if (!username) return;
  try {
    localStorage.removeItem(getStorageKey(username));
  } catch (err) {
    console.error('Failed to clear variables from localStorage', err);
  }
};
