import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/assets/logo.svg'
        alt='powerpuff girls'
        width={200}
        height={200}
      />

      <Link href='/' passHref>
        <Image
          src='/assets/powerpuff-girls.svg'
          alt=''
          width={180}
          height={180}
        />
        {/* <a>🏠</a> */}
      </Link>
    </div>
  );
};
