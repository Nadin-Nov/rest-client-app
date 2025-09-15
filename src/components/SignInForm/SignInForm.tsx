import { PasswordInput, Stack, TextInput, Title, Anchor, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';

import styles from '@/components/SignUpForm/SignUpForm.module.css';
import Button from '@/components/ui/Button/Button';

export const SignInForm = () => {
  const t = useTranslations('SignIn');
  return (
    <form className={styles.form} noValidate>
      <Title className={styles.title} ta='center'>
        {t('signInTitle')}
      </Title>
      <Stack gap={0}>
        <TextInput className={styles.inputLabel} label='Email' radius='md' id='email' />
        <p className={styles.formErrors}></p>
      </Stack>

      <Stack gap={0}>
        <PasswordInput className={styles.inputLabel} label={t('password')} radius='md' id='password' />
        <p className={styles.formErrors}></p>
      </Stack>

      <Button className={styles.authBtn}>{t('signInBtn')}</Button>
      <Stack gap={0}>
        <Text ta='center' mt='sm' className={styles.subtitle}>
          {t('signUpInquiry')}
        </Text>
        <Anchor component='button' size='sm'>
          {t('signUpLink')}
        </Anchor>
      </Stack>
    </form>
  );
};
