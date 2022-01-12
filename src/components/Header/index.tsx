import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <Link href='/'>
      <a className={styles.container}>
        <Image
          src='/assets/logo.svg'
          alt='powerpuff girls'
          width={200}
          height={200}
        />

        <Image
          src='/assets/powerpuff-girls.svg'
          alt=''
          width={180}
          height={180}
        />
        {/* <a>🏠</a> */}
      </a>
    </Link>
  );
};
