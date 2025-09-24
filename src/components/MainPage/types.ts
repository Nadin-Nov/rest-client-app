export interface ProjectInfoMessages {
  title: string;
  description1: string;
  description2: string;
  description3: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  url: string;
  avatar?: string;
}

export interface TeamMessages {
  title: string;
  memberMarta: TeamMember;
  memberKate: TeamMember;
  memberNadin: TeamMember;
}

export interface MainMessages {
  projectInfo: ProjectInfoMessages;
  team: TeamMessages;
}

export interface ProjectInfoProps {
  messages: ProjectInfoMessages;
}

export interface TeamProps {
  messages: TeamMessages;
}
