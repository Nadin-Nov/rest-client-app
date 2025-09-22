import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import { RestClient } from './RestClient';

describe('RestClientComponent', () => {
  it('should render ui components', () => {
    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en'>
          <RestClient className='' initialMethod='GET' />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    const header = screen.getByRole('heading', { name: /restClientHeader/i });
    const methodInput = screen.getByPlaceholderText(/RestClient.methodPlaceholder/i);
    const urlInput = screen.getByPlaceholderText(/RestClient.endpointUrlPlaceholder/i);
    const sendBtn = screen.getByRole('button', { name: /RestClient.sendRequestBtn/i });

    const headersHeading = screen.getByRole('heading', { name: /RestClient.headers/i });
    const addHeaderButton = screen.getByRole('button', { name: /RestClient.addHeader/i });

    const responseHeading = screen.getByRole('heading', { name: /response/i });

    expect(header).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(urlInput).toBeInTheDocument();
    expect(sendBtn).toBeInTheDocument();
    expect(headersHeading).toBeInTheDocument();
    expect(addHeaderButton).toBeInTheDocument();
    expect(responseHeading).toBeInTheDocument();
  });
});
