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

export interface ProjectInfoProps {
  messages: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  url: string;
  urlAvatar?: string;
}

export interface TeamMessages {
  title: string;
  memberMarta: TeamMember;
  memberKate: TeamMember;
  memberNadin: TeamMember;
}

export interface TeamProps {
  messages: TeamMessages;
}
