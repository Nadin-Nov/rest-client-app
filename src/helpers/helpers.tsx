export function isValidURL(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

// export function prettify(value: string) {
//   if (value === 'json') {
//     const parsed: unknown = JSON.parse(value);
//     return JSON.stringify(parsed, null, 2);
//   }
//   return;
// }
