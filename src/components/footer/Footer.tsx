import clsx from 'clsx';
import Image from 'next/image';

import styles from '@/components/Footer/footer.module.css';

const Footer = () => {
  const authors = [
    { name: '27moon', url: 'https://github.com/27moon' },
    { name: 'Gnarkill', url: 'https://github.com/Gnarkill33' },
    { name: 'Nadin', url: 'https://github.com/Nadin-Nov' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.authors}>
            {authors.map((author) => (
              <div key={author.name} className={styles.authorItem}>
                <Image src='/catt.png' alt='cat' width={40} height={40} className={styles.catDivider} />
                <a href={author.url} target='_blank' rel='noopener noreferrer'>
                  {author.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={clsx(styles.center, styles.desktopOnly)}>2025</div>

        <div className={styles.right}>
          <span className={styles.mobileOnly}>2025</span>

          <a href='https://rs.school/courses/reactjs' target='_blank' rel='noopener noreferrer' className={styles.logo}>
            <Image src='/rss-logo.svg' alt='RS School' width={40} height={40} priority />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
