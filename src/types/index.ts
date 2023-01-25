export type NavInfo = {
  path: string;
  text: string;
};

export type ProfileInfo = {
  type: string;
  value: string;
};

export type Profile = {
  [key: string]: ProfileInfo[];
};

export type Skils = {
  [key: string]: string[];
};

export type Project = {
  title: string;
  description: string;
  date: string;
  skils: Skils;
  image: string;
  repo: string;
};

type List = {
  des: string;
  subDes?: string[];
  link?: string;
};
type Work = {
  title: string;
  list: List[];
};

export type Career = {
  company: string;
  date: string;
  work: Work;
};
