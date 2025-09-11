import { RestClient } from '@/components/rest-client/RestClientComponent/RestClient';

import styles from './styles.module.css';

export default function RESTClient() {
  return (
    <div className={styles.container}>
      <RestClient />
    </div>
  );
}
