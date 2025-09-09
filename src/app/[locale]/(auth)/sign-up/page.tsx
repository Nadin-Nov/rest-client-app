import { AuthWrapper } from '@/components/AuthWrapper/AuthWrapper';

import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

export default function SignUpPage({ children }: Props) {
  return (
    <div className={styles.container}>
      <AuthWrapper>{children}</AuthWrapper>
    </div>
  );
}
