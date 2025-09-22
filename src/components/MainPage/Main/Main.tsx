'use client';

import type { FC } from 'react';

import type { MainMessages } from '@/components/MainPage/types';
import { useAuth } from '@/hooks/useAuth';

import CallToAction from '../CallToAction/CallToAction';
import Hero from '../Hero/Hero';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import Team from '../Team/Team';
import Thanx from '../Thanx/Thanx';

import styles from './Main.module.css';

interface MainProps {
  messages: MainMessages;
}

const Main: FC<MainProps> = ({ messages }) => {
  const { authUser } = useAuth();

  return (
    <main className={styles.mainWrapper}>
      <Hero isAuth={!!authUser?.name} username={authUser?.name} />

      {!authUser && <CallToAction />}

      <Team messages={messages.team} />
      <Thanx />
      <ProjectInfo messages={messages.projectInfo} />
    </main>
  );
};

export default Main;
