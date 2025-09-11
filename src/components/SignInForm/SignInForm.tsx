import { PasswordInput, Stack, TextInput, Title, Anchor, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';

import styles from '@/components/SignUpForm/SignUpForm.module.css';
import Button from '@/components/ui/Button/Button';

export const SignInForm = () => {
  const t = useTranslations('SignUp');
  return (
    <form className={styles.form} noValidate>
      <Title className={styles.title} ta='center'>
        {t('signUpTitle')}
      </Title>
      <Stack gap={0}>
        <TextInput className={styles.inputLabel} label='Email' required radius='md' id='email' />
        <p className={styles.formErrors}></p>
      </Stack>

      <Stack gap={0}>
        <PasswordInput className={styles.inputLabel} label={t('enterPassword')} required radius='md' id='password' />
        <p className={styles.formErrors}></p>
      </Stack>

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
