'use client';

import Image from 'next/image';
import type { FC } from 'react';

import type { TeamProps } from '@/types/main';

import styles from './team.module.css';

const Team: FC<TeamProps> = ({ messages }) => {
  const teamMembers = [messages.memberMarta, messages.memberKate, messages.memberNadin];

  return (
    <section className={styles.team}>
      <h2 className={styles.title}>{messages.title}</h2>
      <div className={styles.members}>
        {teamMembers.map((member) => (
          <div key={member.name} className={styles.member}>
            <div className={styles.avatar}>
              {member.urlAvatar ? (
                <Image
                  src={member.urlAvatar}
                  alt={`${member.name} avatar`}
                  width={80}
                  height={80}
                  className={styles.avatarImage}
                />
              ) : (
                '🐾'
              )}
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.description}>{member.description}</p>
            <a href={member.url} target='_blank' rel='noopener noreferrer' className={styles.link}>
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
