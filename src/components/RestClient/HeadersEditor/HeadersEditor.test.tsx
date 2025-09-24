import { MantineProvider } from '@mantine/core';
import { fireEvent, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, it, expect, vi } from 'vitest';

import { HeadersEditor } from './HeadersEditor';

describe('HeadersEditor', () => {
  it('should renders ui for headers editor', () => {
    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en'>
          <HeadersEditor headers={[]} onChange={vi.fn()} />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    const header = screen.getByText(/headers/i);
    const btn = screen.getByText(/addHeader/i);

    expect(header).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('should add a key-value pair', () => {
    const onChange = vi.fn();
    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en'>
          <HeadersEditor headers={[]} onChange={onChange} />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onChange).toHaveBeenCalledWith([{ key: '', value: '' }]);
  });

  it('should remove a key-value pair', () => {
    const onChange = vi.fn();
    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en'>
          <HeadersEditor headers={[{ key: '', value: '' }]} onChange={onChange} />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    const removeBtn = screen.getByText(/remove/i);
    fireEvent.click(removeBtn);

    expect(onChange).toHaveBeenCalledWith([]);
  });
});
