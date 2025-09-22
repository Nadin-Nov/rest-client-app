import { describe, it, expect } from 'vitest';

import { POST } from './route';

interface GenerateCodeResponse {
  snippet: string;
}

describe('POST', () => {
  it('should generate for request', async () => {
    const request = new Request('http://localhost/api/generate-code', {
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

  it('should add Content-Type header automatically', async () => {
    const request = new Request('http://localhost/api/generate-code', {
      method: 'POST',
      body: JSON.stringify({
        url: 'https://example.com',
        method: 'POST',
        body: '{"something":"something"}',
        language: 'javascript',
        variant: 'fetch',
      }),
    });

    const response = await POST(request);
    const json = (await response.json()) as GenerateCodeResponse;

    expect(json.snippet).toContain('fetch');
  });

  it('should manage header filtering and adding headers', async () => {
    const req = new Request('http://localhost/api/generate-code', {
      method: 'POST',
      body: JSON.stringify({
        method: 'GET',
        url: 'https://example.com',
        headers: [{ key: 'key', value: 'value' }],
        language: 'javascript',
        variant: 'fetch',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(req);
    const json = (await response.json()) as GenerateCodeResponse;

    expect(json.snippet).toContain('fetch');
  });

  it('handles invalid JSON', async () => {
    const req = new Request('http://localhost/api/generate-code', {
      method: 'POST',
      body: '{ invalid json }',
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(req);
    const json = (await response.json()) as GenerateCodeResponse;

    expect(json.snippet).toBe('');
  });
});
