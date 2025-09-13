'use client';

import type { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';
import type { MainMessages } from '@/types/main';

import CallToAction from './CallToAction';
import Hero from './Hero';
import ProjectInfo from './ProjectInfo';
import Team from './Team';
import Thanx from './Thanx';
import styles from './main.module.css';

interface MainProps {
  messages: MainMessages;
}

const Main: FC<MainProps> = ({ messages }) => {
  const { isAuth, username } = useAuth();

  return (
    <div className={styles.mainWrapper}>
      <Hero isAuth={isAuth} username={isAuth ? username : undefined} />

      {!isAuth && <CallToAction />}

      <Team messages={messages.team} />
      <Thanx />
      <ProjectInfo messages={messages.projectInfo} />
    </div>
  );
};

export default Main;
