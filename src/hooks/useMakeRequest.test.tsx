import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import * as buildURL from '@/helpers/buildURL';
import * as helpers from '@/helpers/isValidURL';

import { useMakeRequest } from './useMakeRequest';

const successfulStatus = 200;

describe('useMakeRequest', () => {
  vi.mock('next-intl', () => ({
    useTranslations: () => (key: string) => key,
  }));

  it('should return noURL when URL is empty', async () => {
    const { result } = renderHook(() => useMakeRequest());

    void result.current.sendRequest('GET', '', [], 'json');

    await waitFor(() => {
      expect(result.current.status).toMatch(/noURL/i);
      expect(result.current.bodyResponse).toMatch(/emptyURL/i);
    });
  });

  it('should return invalid URL when URL is invalid', async () => {
    vi.spyOn(helpers, 'isValidURL').mockReturnValue(false);

    const { result } = renderHook(() => useMakeRequest());

    void result.current.sendRequest('GET', 'invalid-url', [], 'json');

    await waitFor(() => {
      expect(result.current.status).toMatch(/error/i);
      expect(result.current.bodyResponse).toMatch(/invalidURL/i);
    });
  });
});

it('should successfully send a GET request', async () => {
  vi.spyOn(helpers, 'isValidURL').mockReturnValue(true);
  vi.spyOn(global, 'fetch').mockResolvedValue({
    text: vi.fn().mockResolvedValue('OK'),
    status: 200,
  } as unknown as Response);
  vi.spyOn(buildURL, 'buildURL').mockReturnValue('/mocked-url');

  const { result } = renderHook(() => useMakeRequest());

  await result.current.sendRequest('GET', 'https://example.com', [], 'json');
  await waitFor(() => {
    expect(result.current.status).toBe(successfulStatus);
    expect(result.current.bodyResponse).toBe('OK');
  });
});

it('should show error on failed fetch', async () => {
  vi.spyOn(helpers, 'isValidURL').mockReturnValue(true);
  vi.spyOn(global, 'fetch').mockRejectedValue(new Error('failed to fetch'));
  vi.spyOn(buildURL, 'buildURL').mockReturnValue('/some error in url');

  const { result } = renderHook(() => useMakeRequest());

  await result.current.sendRequest('GET', 'https://example.com', [], 'json');
  await waitFor(() => {
    expect(result.current.status).toBe('error');
    expect(result.current.bodyResponse).toBe('failed to fetch');
  });
});
