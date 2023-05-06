import { FaGithub, FaLinkedin } from 'react-icons/fa';

import type { socialAccountsType } from '../types/socialButton';

const socialAccounts: socialAccountsType[] = [
  {
    text: 'Github',
    href: 'https://github.com/enesdir',
    icon: FaGithub,
    ariaLabel: 'Github Profile Link Button',
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/enesen/',
    icon: FaLinkedin,
    ariaLabel: 'LinkedIn Profile Link Button',
  },
];

export default socialAccounts;
