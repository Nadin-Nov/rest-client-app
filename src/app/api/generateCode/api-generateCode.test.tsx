import { describe, it, expect } from 'vitest';

import { POST } from './route';

interface GenerateCodeResponse {
  snippet: string;
}

describe('POST', () => {
  it('should generate for request', async () => {
    const request = new Request('http://localhost/api/generate', {
      method: 'POST',
      body: JSON.stringify({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        method: 'POST',
        language: 'javascript',
        variant: 'fetch',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    const json = (await response.json()) as GenerateCodeResponse;

    expect(json.snippet).toContain('fetch');
  });
});
