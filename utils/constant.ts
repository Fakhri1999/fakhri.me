import {
  FaBriefcase,
  FaGithubSquare,
  FaGlobe,
  FaHome,
  FaUser,
  FaInstagramSquare,
  FaDiscord,
  FaLinkedin,
  FaLine,
  FaSteamSquare,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import type { ISourceOptions } from '@tsparticles/engine';

export const LIST_URL = {
  GITHUB: 'https://github.com/fakhri1999/',
  INSTAGRAM: 'https://www.instagram.com/fakhrii_19/',
  DISCORD: 'https://discord.com/users/331304445977559050/',
  LINKEDIN: 'https://www.linkedin.com/in/fakhri19/',
  STEAM: 'https://steamcommunity.com/id/fakhri19/',
} as const;

type IconLink = {
  url: string;
  icon: IconType;
};

export const ICONS: IconLink[] = [
  {
    url: LIST_URL.GITHUB,
    icon: FaGithubSquare,
  },
  {
    url: LIST_URL.LINKEDIN,
    icon: FaLinkedin,
  },
  {
    url: LIST_URL.INSTAGRAM,
    icon: FaInstagramSquare,
  },
  {
    url: LIST_URL.DISCORD,
    icon: FaDiscord,
  },
  {
    url: LIST_URL.STEAM,
    icon: FaSteamSquare,
  },
];

type TabMenu = {
  icon: IconType;
  text: string;
  event: string;
};

export const TABS_MENU: TabMenu[] = [
  {
    icon: FaHome,
    text: 'Home',
    event: 'tab_home',
  },
  {
    icon: FaUser,
    text: 'About Me',
    event: 'tab_about_me',
  },
  {
    icon: FaBriefcase,
    text: 'Projects',
    event: 'tab_projects',
  },
];

export const PARTICLE: ISourceOptions = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      resize: { enable: true },
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 1,
        },
      },
    },
  },
  background: {
    color: {
      value: '#F5F5F5',
    },
  },
  particles: {
    color: { value: '#ADADAD' },
    links: {
      color: '#ADADAD',
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      outModes: {
        default: 'out',
      },
      random: false,
      speed: 1.5,
      straight: false,
    },
    number: { density: { enable: true }, value: 100 },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
} as const;

export type Project = {
  title: string;
  description: string;
  image: string;
  images?: string[];
  person: string;
  time: string;
  techs: string[];
  links: ProjectLink[];
};

type ProjectLink = {
  url: string;
  icon: IconType;
  type: LinkType;
};

export type LinkType = 'DEMO' | 'GITHUB';

export const PROJECTS: Project[] = [
  {
    title: 'Fakhri.me',
    description: `This is my current personal web like you see now.`,
    image: '/images/fakhri.me.png',
    images: ['/images/fakhri.me.png'],
    person: 'Personal',
    time: '[Mid 2021 - Present]',
    techs: ['ReactJS', 'NextJS', 'ChakraUI'],
    links: [
      {
        url: 'https://fakhri.me',
        icon: FaGlobe,
        type: 'DEMO',
      },
      {
        url: 'https://github.com/fakhri1999/fakhri.me',
        icon: FaGithubSquare,
        type: 'GITHUB',
      },
    ],
  },
  {
    title: 'Chroma Minecraft Web',
    description: `This is a web for "Chroma Minecraft Game Server". I'm responsible
  for creating the web while the Backend is created by my friend. I'm also responsible to maintain the Game Server.`,
    image: '/images/chroma-minecraft-web.png',
    images: [
      '/images/chroma-minecraft-web.png',
      '/images/chroma-minecraft-web.png',
    ],
    person: 'Team (2)',
    time: '[Late 2020 - Present]',
    techs: ['ReactJS', 'NextJS', 'ChakraUI'],
    links: [
      {
        url: 'https://mc.chroma-gaming.xyz',
        icon: FaGlobe,
        type: 'DEMO',
      },
      {
        url: 'https://github.com/ChromaMinecraft/chroma-minecraft-frontend',
        icon: FaGithubSquare,
        type: 'GITHUB',
      },
    ],
  },
  {
    title: 'Simple Line Bot',
    description: `The main purpose of this bot is to be able to see messages that have been deleted in the line group. And I also add some simple commands to make the bots not boring`,
    image: '/images/simple-line-bot.png',
    person: 'Personal',
    time: '[Early 2020]',
    techs: ['NodeJS', 'ExpressJS'],
    links: [
      {
        url: 'https://line.me/ti/p/~@810cmuce',
        icon: FaLine,
        type: 'DEMO',
      },
      {
        url: 'https://github.com/Fakhri1999/line-bot-server',
        icon: FaGithubSquare,
        type: 'GITHUB',
      },
    ],
  },
  {
    title: 'OnVot',
    description: `This is my first Full Stack Web that I made with my 2 friends. This website was created to fulfill a college assignment.`,
    image: '/images/onvot.png',
    person: 'Team (3)',
    time: '[Early 2019]',
    techs: ['PHP', 'CodeIgniter', 'MySQL'],
    links: [
      {
        url: 'https://onvot.fakhri.me/',
        icon: FaGlobe,
        type: 'DEMO',
      },
      {
        url: 'https://github.com/Fakhri1999/OnlineVote',
        icon: FaGithubSquare,
        type: 'GITHUB',
      },
    ],
  },
];
