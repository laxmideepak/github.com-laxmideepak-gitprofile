// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'laxmideepak', // GitHub username (required)
  },
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [],
    },
  },

  seo: {
    title: 'Portfolio of Laxmi Deepak Nelapatla',
    description:
      'Full‑stack Software Engineer specializing in Python, Java, TypeScript, and AWS. Passionate about low‑latency APIs, distributed systems, and intuitive user experiences.',
    imageURL: '',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/laxmideepak-nelapatla-2a1a8b190/',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '469-987-2828',
    email: 'laxmideepak2023@gmail.com',
  },

  resume: {
    // If you host your resume in the public folder, you can reference it like "/resume.pdf"
    fileUrl: '/Laxmideepak_Nelapatla_SDE.pdf',
  },

  skills: [
    // Languages & Frameworks
    'Python',
    'Java',
    'TypeScript',
    'SQL',
    'React.js',
    'React Native',
    'Node.js',
    'Spring Boot',
    'GraphQL',
    'Hack',
    // Cloud & DevOps
    'AWS',
    'Docker',
    'Kubernetes',
    'GitHub Actions',
    // Databases & Infra
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Kafka',
    // ML & Data
    'TensorFlow',
    'Keras',
    'PyTorch',
    'Pandas',
    'NumPy',
    'Scikit‑learn',
    // Testing & Tools
    'Jest',
    'PyTest',
    'Lighthouse',
    'axe‑core',
  ],

  experiences: [
    {
      company: 'UTA Honors College',
      position: 'Software Engineer – Graduate Research Assistant',
      from: 'Jan 2024',
      to: 'May 2025',
      companyLink: 'https://www.uta.edu/honors',
    },
    {
      company: 'Cognizant',
      position: 'Full‑Stack Software Engineer Intern',
      from: 'Feb 2023',
      to: 'Aug 2023',
      companyLink: 'https://www.cognizant.com',
    },
    {
      company: 'Srinidhi Technologies Inc',
      position: 'Full‑Stack Developer Intern',
      from: 'Jul 2022',
      to: 'Dec 2022',
      companyLink: '',
    },
  ],

  certifications: [],

  educations: [
    {
      institution: 'University of Texas at Arlington',
      degree: 'M.S. in Computer Science',
      from: 'Aug 2023',
      to: 'May 2025',
    },
    {
      institution: 'Jawaharlal Nehru Technological University',
      degree: 'B.Tech in Electronics and Communication Engineering',
      from: 'Aug 2019',
      to: 'May 2023',
    },
  ],

  publications: [],

  blog: {
    source: '',
    username: '',
    limit: 2,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
