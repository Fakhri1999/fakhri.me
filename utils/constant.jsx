import {
  FaBriefcase,
  FaGithub,
  FaGlobe,
  FaHome,
  FaUser,
  FaInstagram,
  FaDiscord,
  FaLinkedin,
  FaLine,
} from 'react-icons/fa';

export const LIST_URL = {
  GITHUB: 'https://github.com/fakhri1999/',
  INSTAGRAM: 'https://www.instagram.com/fakhrii_19/',
  DISCORD: 'https://discord.com/users/331304445977559050',
  LINKEDIN: 'https://www.linkedin.com/in/fakhri19/',
};

export const ICONS = [
  {
    url: LIST_URL.GITHUB,
    icon: FaGithub,
  },
  {
    url: LIST_URL.INSTAGRAM,
    icon: FaInstagram,
  },
  {
    url: LIST_URL.DISCORD,
    icon: FaDiscord,
  },
  {
    url: LIST_URL.LINKEDIN,
    icon: FaLinkedin,
  },
];

export const TABS_MENU = [
  {
    icon: FaHome,
    text: 'Home',
  },
  {
    icon: FaUser,
    text: 'About Me',
  },
  {
    icon: FaBriefcase,
    text: 'Projects',
  },
];

export const PARTICLE = {
  fps_limit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: { enable: true, mode: 'grab' },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
    },
  },
  background: {
    color: {
      value: '#F5F5F5',
    },
    image: '',
    position: '',
    repeat: '',
    size: '',
    opacity: 1,
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
      bounce: false,
      direction: 'none',
      enable: true,
      outMode: 'out',
      random: false,
      speed: 1.5,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 100 },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { random: true, value: 5 },
  },
  detectRetina: true,
};

export const PROJECTS = [
  {
    title: 'Simple Line Bot',
    description: `The main purpose of this bot is to be able to see messages that have been deleted in the line group. And I also add some simple commands to make the bots not boring`,
    image: '/images/simple-line-bot.png',
    techs: ['NodeJS', 'ExpressJS'],
    links: [
      {
        url: 'https://line.me/ti/p/~@810cmuce',
        icon: FaLine,
      },
      {
        url: 'https://github.com/Fakhri1999/line-bot-server',
        icon: FaGithub,
      },
    ],
  },
  {
    title: 'Chroma Minecraft Web',
    description: `This is a web for "Chroma Minecraft Game Server". I'm responsible
  for creating the web while the Backend is created by my friend. I'm also responsible to maintain the Game Server.`,
    image: '/images/chroma-minecraft-web.png',
    techs: ['ReactJS', 'NextJS', 'ChakraUI'],
    links: [
      {
        url: 'https://mc.chroma-gaming.xyz',
        icon: FaGlobe,
      },
      {
        url: 'https://github.com/ChromaMinecraft/chroma-minecraft-frontend',
        icon: FaGithub,
      },
    ],
  },
];
