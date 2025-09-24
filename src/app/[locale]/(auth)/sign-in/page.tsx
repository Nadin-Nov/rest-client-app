import styles from '@/app/[locale]/(auth)/sign-up/styles.module.css';
import { AuthWrapper } from '@/components/AuthWrapper/AuthWrapper';
import { SignInForm } from '@/components/SignInForm/SignInForm';

export default function SignInPage() {
  return (
    <div className={styles.container}>
      <AuthWrapper>
        <SignInForm />
      </AuthWrapper>
    </div>
  );
}
