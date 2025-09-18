'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput, Stack, TextInput, Title, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter/PasswordStrengthMeter';
import Button from '@/components/ui/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import { Link } from '@/i18n/navigation';
import type { SignUpFormData } from '@/types/types';
import { getPasswordStrength } from '@/utils/getPasswordStrength';
import { signUpFormSchema } from '@/validation';

import styles from './SignUpForm.module.css';

export const SignUpForm = () => {
  const { signUpUser } = useAuth();
  const t = useTranslations('SignUp');
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
    trigger,
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpFormSchema),
  });

  const passwordWatched = watch('password');
  const passwordStrength = getPasswordStrength(passwordWatched);

  useEffect(() => {
    void trigger('confirmPassword');
  }, [passwordWatched, trigger]);

  const onSubmit: SubmitHandler<SignUpFormData> = (formData) =>
    signUpUser(formData.email, formData.password).then((authUser) => {
      console.log('New user is registered', authUser);
    });

  return (
    <form className={styles.form} noValidate onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <Title className={styles.title} ta='center'>
        {t('signUpTitle')}
      </Title>
      <Stack gap={0}>
        <TextInput
          {...register('name')}
          className={styles.inputLabel}
          label={t('name')}
          required
          radius='md'
          id='name'
        />
        <p className={styles.formErrors}>{errors.name?.message}</p>
      </Stack>

      <Stack gap={0}>
        <TextInput {...register('email')} className={styles.inputLabel} label='Email' required radius='md' id='email' />
        <p className={styles.formErrors}>{errors.email?.message}</p>
      </Stack>

      <fieldset className={styles.fieldset}>
        <legend>{t('password')}</legend>
        <Stack gap={0}>
          <PasswordInput
            {...register('password')}
            className={styles.inputLabel}
            label={t('enterPassword')}
            required
            radius='md'
            id='password'
          />
          {passwordStrength && <PasswordStrengthMeter strength={passwordStrength} />}
          <p className={styles.formErrors}>{errors.password?.message}</p>
        </Stack>
        <Stack gap={0}>
          <PasswordInput
            {...register('confirmPassword')}
            className={styles.inputLabel}
            label={t('confirmPassword')}
            required
            radius='md'
            id='password2'
          />
          <p className={styles.formErrors}>{errors.confirmPassword?.message}</p>
        </Stack>
      </fieldset>
      <Button className={styles.authBtn} disabled={!isDirty || !isValid}>
        {t('signUpBtn')}
      </Button>
      <Text ta='center' mt='sm' className={styles.subtitle}>
        {t('signInInquiry')}
        <Link className={styles.link} href='/sign-in'>
          {' '}
          {t('signInLink')}
        </Link>
      </Text>
    </form>
  );
};
