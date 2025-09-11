import { AuthWrapper } from '@/components/AuthWrapper/AuthWrapper';
import { SignUpForm } from '@/components/SignUpForm/SignUpForm';

import styles from './styles.module.css';

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <AuthWrapper>
        <SignUpForm />
      </AuthWrapper>
    </div>
  );
}
