'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import type { Header } from '@/components/RestClient/HeadersEditor/HeadersEditor';
import { RestClient } from '@/components/RestClient/RestClientComponent/RestClient';
import { PawSpinner } from '@/components/ui/PawSpinner/PawSpinner';
import { base64Decode, base64DecodeUrl } from '@/helpers/base64';
import { useAuthContext } from '@/hooks/useAuthContext';

import styles from '../styles.module.css';

interface PageProps {
  params: Promise<{
    locale: string;
    params?: string[];
  }>;
}

export default function RouteRC({ params }: PageProps) {
  const [routeParams, setRouteParams] = React.useState<{ locale: string; params?: string[] } | null>(null);
  const searchParams = useSearchParams();

  const { authUser, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.replace('/main');
    }
  }, [loading, authUser, router]);

  useEffect(() => {
    void params.then(setRouteParams);
  }, [params]);

  if (loading || !authUser || !routeParams) {
    return (
      <div className={styles.container}>
        <PawSpinner />
      </div>
    );
  }

  const method = routeParams.params?.[0] ?? 'GET';
  const encodedBody = routeParams.params?.[2];
  const encodedUrl = routeParams.params?.[1] ?? '';

  let url = '';
  if (encodedUrl) {
    try {
      url = base64DecodeUrl(encodedUrl);
    } catch {
      console.warn('Invalid url param', encodedUrl);
      url = encodedUrl;
    }
  }

  const headers: Header[] = [];
  searchParams.forEach((value, key) => {
    if (key !== 'body') headers.push({ key, value });
  });

  let body: string | undefined;
  const bodyParam = encodedBody ?? searchParams.get('body') ?? undefined;
  if (bodyParam) {
    try {
      body = base64Decode(bodyParam);
    } catch {
      console.warn('Invalid body param', bodyParam);
    }
  }

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
