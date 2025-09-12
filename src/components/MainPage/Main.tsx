'use client';

import type { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

import CallToAction from './CallToAction';
import Hero from './Hero';
import ProjectInfo from './ProjectInfo';
import Team from './Team';
import styles from './main.module.css';

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  url: string;
}

export interface TeamMessages {
  title: string;
  memberAlice: TeamMember;
  memberBob: TeamMember;
  memberCharlie: TeamMember;
}

export interface ProjectInfoMessages {
  title: string;
  description1: string;
  description2: string;
  description3: string;
}

export interface MainMessages {
  team: TeamMessages;
  projectInfo: ProjectInfoMessages;
}

interface MainProps {
  messages: MainMessages;
}

const Main: FC<MainProps> = ({ messages }) => {
  const { isAuth, username } = useAuth();

  return (
    <div className={styles.mainWrapper}>
      <Hero isAuth={isAuth} username={username} />
      <CallToAction />
      <Team messages={messages.team} />
      <ProjectInfo messages={messages.projectInfo} />
    </div>
  );
};

export default Main;
