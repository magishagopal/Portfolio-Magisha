export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tech: string[];
}

export interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
}