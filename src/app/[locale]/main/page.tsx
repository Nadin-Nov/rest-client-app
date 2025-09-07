import { redirect } from 'next/navigation';

interface MainProps {
  params: Promise<{ locale: 'en' | 'ru' }>;
}

export default async function Main({ params }: MainProps) {
  const { locale } = await params;

  redirect(`/${locale}`);
}
