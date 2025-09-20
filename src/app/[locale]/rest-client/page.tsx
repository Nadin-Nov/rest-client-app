import { RestClient } from '@/components/RestClient/RestClientComponent/RestClient';

import styles from './styles.module.css';

export default function RESTClientPage() {
  return <RestClient className={styles.container} initialMethod={''} />;
}
