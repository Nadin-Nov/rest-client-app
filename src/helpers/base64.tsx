export function base64Decode(str: string) {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
}

export function base64Encode(str: string) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match: string, p1: string) {
      return String.fromCharCode(parseInt(p1, 16));
    })
  );
}

export function base64EncodeUrl(str: string) {
  return base64Encode(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function base64DecodeUrl(str: string) {
  let string = str.replace(/-/g, '+').replace(/_/g, '/');
  while (string.length % 4) string += '=';
  return base64Decode(string);
}
