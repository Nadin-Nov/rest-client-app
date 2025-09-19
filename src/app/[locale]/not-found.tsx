import NotFound from '@/components/NotFound/NotFound';

export default function LocaleNotFound({ params }: { params: { locale: string } }) {
  return <NotFound locale={params.locale} />;
}
