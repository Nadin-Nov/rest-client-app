import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { ReactNode } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header/Header';
import { routing } from '@/i18n/routing';
import { AuthProvider } from '@/providers/AuthProvider';
import MantineProviderWrapper from '@/providers/MantineProviderWrapper';
import { VariablesProvider } from '@/providers/VariablesProvider';

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params: p }: LocaleLayoutProps) {
  const params = await p;
  const locale = params.locale as (typeof routing.locales)[number];

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AuthProvider>
        <VariablesProvider>
          <MantineProviderWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </MantineProviderWrapper>
        </VariablesProvider>
      </AuthProvider>
    </NextIntlClientProvider>
  );
}
