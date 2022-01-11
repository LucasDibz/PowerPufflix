import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Header } from '../components/Header';

import styles from '../styles/Home.module.scss';

type Episode = {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    medium: string;
  };
};

type Seasons = {
  id: number;
  episodes: Episode[];
};

const episodes1: Episode[] = [
  {
    id: 160178,
    name: 'Monkey See, Doggie Do / Mommy Fearest',
    season: 1,
    number: 1,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/157/393188.jpg',
    },
  },
  {
    id: 160178,
    name: 'Monkey See, Doggie Do / Mommy Fearest',
    season: 1,
    number: 1,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/157/393188.jpg',
    },
  },
  {
    id: 160178,
    name: 'Monkey See, Doggie Do / Mommy Fearest',
    season: 1,
    number: 1,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/157/393188.jpg',
    },
  },
];

const seasons: Seasons[] = [
  {
    id: 1,
    episodes: episodes1,
  },
  {
    id: 2,
    episodes: episodes1,
  },
  {
    id: 3,
    episodes: episodes1,
  },
  {
    id: 4,
    episodes: episodes1,
  },
  {
    id: 5,
    episodes: episodes1,
  },
  {
    id: 6,
    episodes: episodes1,
  },
];

const backgroundColors = [
  '#4ca9e3',
  '#db8380',
  '#89bf75',
  '#E54D0C',
  '#924B79',
  '#D2081D',
];
// `https://api.tvmaze.com/episodes/${episode.id}`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h2>Episodes</h2>

        {seasons.map(({ id, episodes }) => (
          <>
            <h2
              className={styles.banner}
              style={{ background: backgroundColors[id - 1] }}
            >
              Season {id}
            </h2>
            <div className={styles.episodesContainer}>
              {episodes.map((episode) => (
                <div key={episode.id} className={styles.episodeContainer}>
                  <Link href={`episodes/${episode.id}`}>
                    <a className={styles.episode}>
                      <div>
                        <p>
                          {episode.number < 10
                            ? '0' + episode.number
                            : episode.number}
                          .{episode.name}
                        </p>
                      </div>
                      <Image
                        src={episode.image.medium}
                        alt={episode.name}
                        width={250}
                        height={140}
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ))}
      </main>
    </div>
  );
};

export default Home;
