import headshot from '../src/assets/headshot.jpg'

interface IConfig {
  me: {
    name: string
    job: string
    started: string
    stack: string
    hobby: string
    projectLink: string
  }
  socials: Record<string, string>
  projects: Record<
    string,
    {
      url: string
      tags: string[]
    }
  >
  og: {
    image: string
  }
}

export const Config: IConfig = {
  me: {
    name: 'Khalifa Idris',
    job: 'Senior Fullstack Engineer & JavaScript Coach',
    started: '2018-08-01',
    stack: 'React, NestJS, GCP & Python',
    hobby: 'take pictures, weight lift & travel',
    projectLink: 'https://github.com/unclekhalifa?tab=repositories',
  },
  socials: {
    linkedin: 'https://linkedin.com/in/khalifa-idris',
    github: 'https://github.com/unclekhalifa',
  },
  projects: {
    'Rate My CV': {
      // FIXME: Add the correct URL
      url: 'https://github.com/unclekhalifa',
      tags: ['react', 'firebase', 'sanity'],
    },
    Workbug: {
      url: 'https://apps.apple.com/gb/app/workbug/id1380295904',
      tags: ['ios', 'mongodb', 'realm', 'react'],
    },
  },
  og: {
    image: headshot.src,
  },
}
