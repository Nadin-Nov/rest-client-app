'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

import type { Header } from '@/components/RestClient/HeadersEditor/HeadersEditor';
import { RestClient } from '@/components/RestClient/RestClientComponent/RestClient';
import { base64Decode } from '@/helpers/base64';

import styles from '../../styles.module.css';

interface PageProps {
  params: Promise<{
    locale: string;
    method: string;
    url: string;
    body?: string;
  }>;
}

export default function RouteRC({ params }: PageProps) {
  const routeParams = React.use(params);
  const searchParams = useSearchParams();
  const method = routeParams.method || 'GET';
  const url = base64Decode(routeParams.url);

  const headers: Header[] = [];
  searchParams.forEach((value, key) => {
    if (key !== 'body') headers.push({ key, value });
  });

  const bodyParam = searchParams.get('body');
  const body = bodyParam ? base64Decode(bodyParam) : undefined;

  return (
    <RestClient
      className={styles.container}
      initialMethod={method}
      initialUrl={url}
      initialHeaders={headers.length ? headers : [{ key: '', value: '' }]}
      initialBody={body}
    />
  );
}
