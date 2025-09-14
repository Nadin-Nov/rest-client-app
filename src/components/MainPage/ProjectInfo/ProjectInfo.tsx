'use client';

import type { FC } from 'react';

import type { ProjectInfoMessages } from '@/components/MainPage/types';

import styles from './ProjectInfo.module.css';

interface ProjectInfoProps {
  messages: ProjectInfoMessages;
}

const ProjectInfo: FC<ProjectInfoProps> = ({ messages }) => {
  return (
    <section className={styles.projectInfo}>
      <h2 className={styles.title}>{messages.title}</h2>
      <p className={styles.description}>{messages.description1}</p>
      <p className={styles.description}>{messages.description2}</p>
      <p className={styles.description}>{messages.description3}</p>
    </section>
  );
};

export default ProjectInfo;
