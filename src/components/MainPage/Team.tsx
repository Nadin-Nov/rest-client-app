'use client';

import type { FC } from 'react';

import styles from './team.module.css';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  url: string;
}

interface TeamMessages {
  title: string;
  memberAlice: TeamMember;
  memberBob: TeamMember;
  memberCharlie: TeamMember;
}

interface TeamProps {
  messages: TeamMessages;
}

const Team: FC<TeamProps> = ({ messages }) => {
  const teamMembers = [messages.memberAlice, messages.memberBob, messages.memberCharlie];

  return (
    <section className={styles.team}>
      <h2 className={styles.title}>{messages.title}</h2>
      <div className={styles.members}>
        {teamMembers.map((member) => (
          <div key={member.name} className={styles.member}>
            <div className={styles.avatar}>🐾</div>
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
