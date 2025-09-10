import { PasswordInput, Stack, TextInput, Title, Anchor, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/Button/Button';

import styles from './SignUpForm.module.css';

export const SignUpForm = () => {
  const t = useTranslations('SignUp');
  return (
    <form className={styles.form} noValidate>
      <Title className={styles.title} ta='center'>
        {t('signUpTitle')}
      </Title>
      <Stack gap={0}>
        <TextInput className={styles.inputLabel} label={t('name')} required radius='md' id='name' />
        <p className={styles.formErrors}></p>
      </Stack>

      <Stack gap={0}>
        <TextInput className={styles.inputLabel} label='Email' required radius='md' id='email' />
        <p className={styles.formErrors}></p>
      </Stack>

      <fieldset className={styles.fieldset}>
        <legend>{t('password')}</legend>
        <Stack gap={0}>
          <PasswordInput className={styles.inputLabel} label={t('enterPassword')} required radius='md' id='password' />
          <p className={styles.formErrors}></p>
        </Stack>
        <Stack gap={0}>
          <PasswordInput
            className={styles.inputLabel}
            label={t('confirmPassword')}
            required
            radius='md'
            id='password2'
          />
          <p className={styles.formErrors}></p>
        </Stack>
      </fieldset>
      <Button className={styles.authBtn}>{t('signUpBtn')}</Button>
      <Text ta='center' mt='sm' className={styles.subtitle}>
        {t('signInInquiry')}{' '}
        <Anchor component='button' size='sm'>
          {t('signInLink')}
        </Anchor>
      </Text>
    </form>
  );
};
