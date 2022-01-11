import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

type Episode = {
  id: number;
  name: string;
  image: {
    medium: string;
  };
};

const episodes: Episode[] = [
  {
    id: 160178,
    name: 'Monkey See, Doggie Do / Mommy Fearest',
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/157/393188.jpg',
    },
  },
];

// `https://api.tvmaze.com/episodes/${episode.id}`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>PowerPufflix</h1>

      <h2>Episodes</h2>
      {episodes.map((episode) => (
        <Link href={`episodes/${episode.id}`} key={episode.id}>
          <a>
            <h3>{episode.name}</h3>
            <Image
              src={episode.image.medium}
              alt={episode.name}
              width={250}
              height={140}
              // objectFit='contain'
            />
          </a>
        </Link>
      ))}
      <main></main>
    </div>
  );
};

export default Home;
