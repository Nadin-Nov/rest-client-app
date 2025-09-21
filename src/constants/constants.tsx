export const languages = ['curl', 'JavaScript (Fetch api)', 'JavaScript (XHR)', 'NodeJS', 'Python', 'Java', 'C#', 'Go'];

export const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'];

export const languageMap: Record<string, { lang: string; variant: string }> = {
  curl: { lang: 'cURL', variant: 'cURL' },
  'JavaScript (Fetch api)': { lang: 'JavaScript', variant: 'Fetch' },
  'JavaScript (XHR)': { lang: 'javascript', variant: 'XHR' },
  NodeJS: { lang: 'nodejs', variant: 'Native' },
  Python: { lang: 'python', variant: 'Requests' },
  Java: { lang: 'Java', variant: 'Unirest' },
  'C#': { lang: 'csharp', variant: 'HttpClient' },
  Go: { lang: 'go', variant: 'Native' },
};
