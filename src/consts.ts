import type { Site, Page, Links, Socials, TechStack } from '@types'

// Global
export const SITE: Site = {
  TITLE: 'Umesh S M',
  DESCRIPTION: 'Welcome to my portfolio.',
  AUTHOR: 'Umesh S M'
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.'
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.'
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.'
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.'
}

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/'
  },
  {
    TEXT: 'Work',
    HREF: '/work'
  },
  {
    TEXT: 'Blog',
    HREF: '/blog'
  }
  // {
  //   TEXT: 'Projects',
  //   HREF: '/projects'
  // }
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'iamumeshsm@gmail.com',
    HREF: 'mailto:iamumeshsm@gmail.com'
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'umeshsm',
    HREF: 'https://github.com/umeshsm'
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: 'umeshsm',
    HREF: 'https://www.linkedin.com/in/umeshsm'
  }
  // {
  //   NAME: 'Twitter',
  //   ICON: 'twitter-x',
  //   TEXT: 'umeshsm',
  //   HREF: 'https://twitter.com/umeshsm'
  // }
]

export const TECH_STACK: TechStack = {
  frameworks: [
    {
      TEXT: 'React.js',
      ICON: 'reactjs',
      HREF: 'https://react.dev'
    },
    {
      TEXT: 'React Native',
      ICON: 'reactjs',
      HREF: 'https://reactnative.dev/'
    },
    {
      TEXT: 'Next.js',
      ICON: 'nextjs',
      HREF: 'https://nextjs.org'
    },
    {
      TEXT: 'Astro',
      ICON: 'astro',
      HREF: 'https://astro.build'
    },
    {
      TEXT: 'Gatsby',
      ICON: 'gatsby',
      HREF: 'https://www.gatsbyjs.com'
    }
  ],
  languages: [
    {
      TEXT: 'JavaScript',
      ICON: 'javascript',
      HREF: 'https://www.javascript.com'
    },
    {
      TEXT: 'TypeScript',
      ICON: 'typescript',
      HREF: 'https://www.typescriptlang.org'
    },
    {
      TEXT: 'HTML',
      ICON: 'html',
      HREF: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      TEXT: 'CSS',
      ICON: 'css',
      HREF: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    }
  ],
  styles: [
    {
      TEXT: 'Tailwind CSS',
      ICON: 'tailwind',
      HREF: 'https://tailwindcss.com'
    },
    {
      TEXT: 'Bootstrap',
      ICON: 'bootstrap',
      HREF: 'https://getbootstrap.com'
    },
    {
      TEXT: 'Styled-Components',
      ICON: 'styled-components',
      HREF: 'https://styled-components.com'
    },
    {
      TEXT: 'SASS',
      ICON: 'sass',
      HREF: 'https://sass-lang.com'
    }
  ],
  componentStyles: [
    {
      TEXT: 'Material UI',
      ICON: 'material-ui',
      HREF: 'https://mui.com/material-ui'
    },
    {
      TEXT: 'Chakra UI',
      ICON: 'chakra-ui',
      HREF: 'https://www.chakra-ui.com'
    },
    {
      TEXT: 'Ant Design',
      ICON: 'ant-design',
      HREF: 'https://ant.design'
    },
    {
      TEXT: 'Shadcn UI',
      ICON: 'shadcn-ui',
      HREF: 'https://ui.shadcn.com'
    }
  ],
  dataFetching: [
    {
      TEXT: 'Tanstack Query',
      ICON: 'tanstack-query',
      HREF: 'https://tanstack.com/query/latest'
    },
    {
      TEXT: 'SWR',
      ICON: 'swr',
      HREF: 'https://swr.vercel.app'
    },
    {
      TEXT: 'Apollo GraphQL',
      ICON: 'apollo-graphql',
      HREF: 'https://www.apollographql.com'
    }
  ],
  stateManagement: [
    {
      TEXT: 'Redux Toolkit',
      ICON: 'redux-toolkit',
      HREF: 'https://redux-toolkit.js.org'
    },
    {
      TEXT: 'Zustand',
      ICON: 'zustand',
      HREF: 'https://zustand-demo.pmnd.rs'
    },
    {
      TEXT: 'Jotai',
      ICON: 'jotai',
      HREF: 'https://jotai.org'
    }
  ],
  forms: [
    {
      TEXT: 'React Hook Form',
      ICON: 'react-hook-form',
      HREF: 'https://react-hook-form.com'
    },
    {
      TEXT: 'Formik',
      ICON: 'formik',
      HREF: 'https://formik.org'
    }
  ],
  noCode: [
    {
      TEXT: 'Wordpress',
      ICON: 'wordpress',
      HREF: 'https://wordpress.com'
    },
    {
      TEXT: 'Webflow',
      ICON: 'webflow',
      HREF: 'https://webflow.com'
    },
    {
      TEXT: 'Bubble',
      ICON: 'bubble',
      HREF: 'https://bubble.io'
    },
    {
      TEXT: 'Ghost',
      ICON: 'ghost',
      HREF: 'https://ghost.org'
    }
  ],
  buildTools: [
    {
      TEXT: 'Vite',
      ICON: 'vite',
      HREF: 'https://vite.dev'
    },
    {
      TEXT: 'Webpack',
      ICON: 'webpack',
      HREF: 'https://webpack.js.org'
    }
  ],
  versionControl: [
    {
      TEXT: 'Git',
      ICON: 'git',
      HREF: 'https://git-scm.com'
    },
    {
      TEXT: 'Github',
      ICON: 'github',
      HREF: 'https://github.com'
    },
    {
      TEXT: 'Bitbucket',
      ICON: 'bitbucket',
      HREF: 'https://bitbucket.org'
    }
  ],
  codeEditor: [
    {
      TEXT: 'VS Code',
      ICON: 'vscode',
      HREF: 'https://code.visualstudio.com'
    },
    {
      TEXT: 'Sublime Text',
      ICON: 'sublime-text',
      HREF: 'https://www.sublimetext.com'
    }
  ],
  workTrackers: [
    {
      TEXT: 'Linear',
      ICON: 'linear',
      HREF: 'https://linear.app'
    },
    {
      TEXT: 'Jira',
      ICON: 'jira',
      HREF: 'https://www.atlassian.com/software/jira'
    }
  ],
  apiPlatforms: [
    {
      TEXT: 'Postman',
      ICON: 'postman',
      HREF: 'https://www.postman.com'
    },
    {
      TEXT: 'Insomnia',
      ICON: 'insomnia',
      HREF: 'https://insomnia.rest'
    }
  ]
}
