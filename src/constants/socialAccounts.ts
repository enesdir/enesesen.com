import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { socialAccountsType } from '@interfaces/socialButton'

const socialAccounts: socialAccountsType[] = [
  {
    text: 'Github',
    href: 'https://github.com/codenuru',
    icon: FaGithub,
    ariaLabel: 'Github Profile Link Button',
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/enesen/',
    icon: FaLinkedin,
    ariaLabel: 'LinkedIn Profile Link Button',
  },
]

export default socialAccounts
