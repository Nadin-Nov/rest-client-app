import { PasswordInput, Stack, TextInput, Title, Anchor, Text } from '@mantine/core';

import Button from '@/components/ui/Button/Button';

import styles from './SignUpForm.module.css';

export const SignUpForm = () => {
  return (
    <form className={styles.form} noValidate>
      <Title className={styles.title} ta='center'>
        Sign up
      </Title>
      <Stack gap={0}>
        <TextInput className={styles.inputLabel} label='Name' required radius='md' id='name' />
        <p className={styles.formErrors}></p>
      </Stack>

      <Stack gap={0}>
        <TextInput className={styles.inputLabel} label='Email' required radius='md' id='email' />
        <p className={styles.formErrors}></p>
      </Stack>

      <fieldset className={styles.fieldset}>
        <legend>Password</legend>
        <Stack gap={0}>
          <PasswordInput className={styles.inputLabel} label='Enter password' required radius='md' id='password' />
          <p className={styles.formErrors}></p>
        </Stack>
        <Stack gap={0}>
          <PasswordInput className={styles.inputLabel} label='Confirm password' required radius='md' id='password2' />
          <p className={styles.formErrors}></p>
        </Stack>
      </fieldset>
      <Button className={styles.authBtn}>SIGN UP</Button>
      <Text ta='center' mt='sm' className={styles.subtitle}>
        Already have an account?{' '}
        <Anchor component='button' size='sm'>
          Login here
        </Anchor>
      </Text>
    </form>
  );
};
