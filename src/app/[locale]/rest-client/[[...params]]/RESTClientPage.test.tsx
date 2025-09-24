import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import type { Header } from '@/components/RestClient/HeadersEditor/HeadersEditor';

import RouteRC from './page';

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: () => null,
    forEach: () => {},
  }),
  useRouter: () => ({
    replace: vi.fn(),
  }),
}));

interface RestClientProps {
  className?: string;
  initialMethod: string;
  initialUrl?: string;
  initialHeaders?: Header[];
  initialBody?: string;
}

vi.mock('@/components/RestClient/RestClientComponent/RestClient', () => ({
  RestClient: ({ initialMethod }: RestClientProps) => <div data-testid='rest-client'>{initialMethod}</div>,
}));

describe('RouteRC', () => {
  it('should render RestClient when params resolve', async () => {
    const testParams = Promise.resolve({ locale: 'en', params: ['POST', 'test==', 'test='] });
    render(<RouteRC params={testParams} />);
    await waitFor(() => expect(screen.getByTestId('rest-client')).toBeInTheDocument());

    expect(screen.getByTestId('rest-client')).toHaveTextContent('POST');
  });
});
