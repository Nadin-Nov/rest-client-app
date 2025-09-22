import { MantineProvider } from '@mantine/core';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it, vi } from 'vitest';

import { BodyRequest } from './BodyRequest';

describe('BodyRequest', () => {
  it('should render ui components', () => {
    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en'>
          <BodyRequest value='' onChange={() => {}} bodyType='json' onBodyTypeChange={() => {}} />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    const header = screen.getByRole('heading', { name: /body/i });
    const toggleRow = screen.getByRole('group');
    const prettifyBtn = screen.getByRole('button');

    expect(header).toBeInTheDocument();
    expect(within(toggleRow).getByText(/JSON/i)).toBeInTheDocument();
    expect(within(toggleRow).getByText(/Text/i)).toBeInTheDocument();
    expect(prettifyBtn).toBeInTheDocument();
  });

  it('should prettify JSON', () => {
    const jsonValue = '{"user":"name"}';
    const onBodyTypeChangeMock = vi.fn();

    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en' messages={{}}>
          <BodyRequest
            value={jsonValue}
            onChange={onBodyTypeChangeMock}
            bodyType='json'
            onBodyTypeChange={onBodyTypeChangeMock}
          />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    const prettifyButton = screen.getByRole('button', { name: /prettify/i });
    fireEvent.click(prettifyButton);

    expect(onBodyTypeChangeMock).toHaveBeenCalledWith(`{
  "user": "name"
}`);
  });

  it('should switch between json/text', () => {
    const onBodyTypeChangeMock = vi.fn();

    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en'>
          <BodyRequest value='' onChange={() => {}} bodyType='json' onBodyTypeChange={onBodyTypeChangeMock} />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    const toggle = screen.getByTestId('body-toggle');
    fireEvent.click(toggle);

    expect(onBodyTypeChangeMock).toHaveBeenCalledWith('text');
  });

  it('should switch between text/json', () => {
    const onBodyTypeChangeMock = vi.fn();

    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en'>
          <BodyRequest value='' onChange={() => {}} bodyType='text' onBodyTypeChange={onBodyTypeChangeMock} />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    const toggle = screen.getByTestId('body-toggle');
    fireEvent.click(toggle);

    expect(onBodyTypeChangeMock).toHaveBeenCalledWith('json');
  });
});
