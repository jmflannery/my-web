import RoboBlogIcon from '../public/robo-blog.svg';
import ResumeIcon from '../public/resume.svg';
import GithubIcon from '../public/github.svg';
import DevIcon from '../public/dev.svg';
import LinkedInIcon from '../public/linked-in.svg';
import BlueSkyIcon from '../public/bluesky.svg';
import ThreadsIcon from '../public/threads.svg';
import SloppyFacebookIcon from '../public/sloppy-facebook.svg';
import InstagramIcon from '../public/instagram.svg';
import TwitterIcon from '../public/weird-twitter.svg';

const links = [
  {
    name: 'Blog',
    href: '/blog',
    Component: RoboBlogIcon,
  },
  {
    name: 'Resume',
    href: '/resume',
    Component: ResumeIcon,
  },
  {
    name: 'Github',
    href: 'https://github.com/jmflannery',
    Component: GithubIcon,
  },
  {
    name: 'Dev.to',
    href: 'https://dev.to/jackf',
    Component: DevIcon,
  },
  {
    name: 'Linked In',
    href: 'https://www.linkedin.com/in/jack-flannery-a6bb5b26/',
    Component: LinkedInIcon,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/jackflannery.com',
    Component: BlueSkyIcon,
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@jackflannery81',
    Component: ThreadsIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jackflannery81',
    Component: InstagramIcon,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/jack.flannery1',
    Component: SloppyFacebookIcon,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/jackflannery81',
    Component: TwitterIcon,
  },
];

export default links;
