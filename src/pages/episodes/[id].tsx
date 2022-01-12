import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { Header } from '../../components/Header';

import styles from '../../styles/Episode.module.scss';

type Episode = {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    medium: string;
  };
  summary: string;
  airdate: string;
};

interface EpisodeProps {
  episode: Episode;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No params provided
  if (!params) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { id } = params;
  const res = await fetch(`https://api.tvmaze.com/episodes/${id}`);
  const episode = await res.json();

  // Episode not found
  if (!episode) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      episode,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

const Episode: NextPage<EpisodeProps> = ({ episode }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>{episode.name}</h1>
        <div>
          <span>Season: {episode.season}</span>
          <span>Episode: {episode.number}</span>
        </div>
        <Image
          src={episode.image.medium}
          alt={episode.name}
          width={250}
          height={140}
        />

        <div
          className={styles.summary}
          dangerouslySetInnerHTML={{ __html: episode.summary }}
        />
        <span>Air date: {episode.airdate}</span>
      </div>
    </>
  );
};

export default Episode;
