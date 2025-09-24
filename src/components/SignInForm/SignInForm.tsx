'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput, Stack, TextInput, Title, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import styles from '@/components/SignUpForm/SignUpForm.module.css';
import Button from '@/components/ui/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import { type SignInFormData } from '@/types/types';
import { signInFormSchema } from '@/validation';

import { PawSpinner } from '../ui/PawSpinner/PawSpinner';

export const SignInForm = () => {
  const { signInUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const t = useTranslations('SignIn');

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInFormData> = async (formData) => {
    setLoading(true);
    try {
      await signInUser(formData.email, formData.password);
      router.replace('/main');
      notifications.show({
        title: t('SuccessTitle'),
        message: `${t('SuccessDescription')} 😺`,
        className: styles.success,
      });
    } catch {
      notifications.show({
        title: t('FailTitle'),
        message: `${t('FailDescription')} 😿`,
        className: styles.fail,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} noValidate onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <Title className={styles.title} ta='center'>
        {t('signInTitle')}
      </Title>
      <Stack gap={0}>
        <TextInput {...register('email')} className={styles.inputLabel} label='Email' radius='md' id='email' />
        <p className={styles.formErrors}>{errors.email?.message}</p>
      </Stack>

      <Stack gap={0}>
        <PasswordInput
          {...register('password')}
          className={styles.inputLabel}
          label={t('password')}
          radius='md'
          id='password'
        />
        <p className={styles.formErrors}>{errors.password?.message}</p>
      </Stack>

      {loading ? (
        <div className={styles.spinnerWrapper}>
          <PawSpinner size={40} pawColor='var(--color-primary)' />
        </div>
      ) : (
        <Button className={styles.authBtn} disabled={!isDirty || !isValid}>
          {t('signInBtn')}
        </Button>
      )}

      <Stack gap={0}>
        <Text ta='center' mt='sm' className={styles.subtitle}>
          {t('signUpInquiry')}
        </Text>
        <Link className={styles.link} href='/sign-up'>
          {' '}
          {t('signUpLink')}
        </Link>
      </Stack>
    </form>
  );
};
