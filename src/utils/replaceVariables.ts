import type { Variable } from '@/contexts/VariablesContextTypes';

export function replaceVariables(text: string | null | undefined, vars: Variable[]): string {
  if (!text) return text ?? '';
  const map = Object.fromEntries(vars.map((v) => [v.key, v.value]));
  return text.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (_, name) => {
    const key = String(name).trim();
    return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : `{{${key}}}`;
  });
}
