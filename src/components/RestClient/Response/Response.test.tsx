import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, it, expect } from 'vitest';

import { Response } from './Response';

describe('Response checkStatus', () => {
  it('should render status correctly', () => {
    render(
      <MantineProvider>
        <NextIntlClientProvider locale='en'>
          <Response status={200} body='' />
        </NextIntlClientProvider>
      </MantineProvider>
    );

    expect(screen.getByText('200')).toBeInTheDocument();
  });
});
