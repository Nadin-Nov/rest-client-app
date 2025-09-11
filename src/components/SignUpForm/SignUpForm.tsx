'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput, Stack, TextInput, Title, Anchor, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { type SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/ui/Button/Button';
import type { FormData } from '@/types/types';
import { formSchema } from '@/validation';

import styles from './SignUpForm.module.css';

export const SignUpForm = () => {
  const t = useTranslations('SignUp');
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (formData) => console.log(formData);

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
        {t('signInInquiry')}{' '}
        <Anchor component='button' size='sm'>
          {t('signInLink')}
        </Anchor>
      </Text>
    </form>
  );
};
