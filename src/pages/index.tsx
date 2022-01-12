import type { GetStaticProps, NextPage } from 'next';
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

type Season = {
  id: number;
  episodes: Episode[];
};

interface HomeProps {
  seasons: Season[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // PowerPuff Girls show id: 1955
  const res = await fetch('https://api.tvmaze.com/shows/1955/episodes');
  const episodes: Episode[] = await res.json();

  // Transform episodes into an array of Season
  const seasons = episodes.reduce((acc: Season[], curr: Episode) => {
    acc[curr.season - 1]
      ? acc[curr.season - 1].episodes.push(curr)
      : (acc[curr.season - 1] = { id: curr.season, episodes: [curr] });

    return acc;
  }, []);

  return {
    props: {
      seasons,
    },
  };
};

const Home: NextPage<HomeProps> = ({ seasons }) => {
  const backgroundColors = [
    '#4ca9e3',
    '#db8380',
    '#89bf75',
    '#E54D0C',
    '#924B79',
    '#D2081D',
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h2>Episodes</h2>

        {seasons.map(({ id, episodes }) => (
          <div key={id} className={styles.seasonsContainer}>
            <h2
              className={styles.banner}
              style={{ background: backgroundColors[id - 1] }}
            >
              Season {id}
            </h2>
            <div className={styles.episodesContainer}>
              {episodes.map((episode) => (
                <div key={episode.id} className={styles.episodeContainer}>
                  <Link href={`/episodes/${episode.id}`}>
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
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
