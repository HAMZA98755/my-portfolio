export const translations = {
  en: {
    title: 'Hamza Alhosni | Software Engineer',
    description: 'My personal website - showcasing my projects and experience',
    home: 'Home',
    aboutPage: {
      about: "About",
      whoAmI: "Who Am I?",
      aboutP1: 'Junior Full-Stack Developer passionate about building modern and responsive web applications that solve real-world problems. Specialized in React and Next.js development, with working knowledge of relational databases suchas PostgreSQL and solid understanding of backend servers using Node.js. ',
      skills: "Skills",
    },
    contactPage: {
      contact: 'Contact',
      letMeHear: 'I\'d love to hear from you! Drop me a message and I\'ll get back to you soon.',
      getInTouch: 'Get In Touch',
      email: 'Email',
      phone: 'Phone',
      socialMedia: 'Social Media',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      facebook: 'Facebook',
      form: {
        nameError: 'Please enter your name',
        emailError:  {
          empty: 'Please enter your message',
          anvalid: "Anvalid email"
        },
        messageError: 'Please enter your message',
        nameLabel: 'Name',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Email',
        emailPlaceholder: 'Enter your email',
        messageLabel: 'Message',
        messagePlaceholder: 'Enter your message',
        send: 'Send',
      },
    },
    projects: 'Projects',
    homePage: {
      softWareEngineer: 'Software Engineer &',
      webDeveloper: 'Full-Stack Developer',
      welcome: 'How Can I Help You?',
      feature1Title: 'Web Development',
      feature1Desc: 'Building modern and efficient web applications',
      feature2Title: 'Poblems Solving',
      feature2Desc: '+150 problem solved in codeforces',
      feature3Title: 'High Performance',
      feature3Desc: 'Fasting, secureity, and reliablety',
      tagLine: 'Building modern, responsive, and high-performance web applications'
    },
    ui: {
      heroTitle: 'Software Engineer',
      siteName: 'Hamza Alhosni',
      nav: {
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
      },
      footer: {
        siteDesc: 'Software Engineer',
        quickLinks: 'Quick Links',
        getInTouch: 'Get In Touch',
        copyright: '© Hamza Alhosni 2025. All rights reserved.',
      },
    },
    projectsPage: {
      viewProject: 'View Project',
      viewCode: 'Code',
      projectsList: {
        todoProject: {
          title: 'Todo List Website',
          description: 'A website that allows you to add tasks, delete tasks, and categorize them as completed or not completed',
          tech: ['Next.js', 'TypeScript', 'TailwindCss'],
          imagesAlt: [ 'An image from project in light mode',  'An image from project in dark mode']
        },
        template3Project: {
          title: "Training website",
          description: "Training website that simulating a company profile offering software services includes sections such as about, pricing, services, etc.",
          tech: ["HTML", "CSS"],
          imagesAlt: ["Project image 1", "Project image 2", "Project image 3", "Project image 4"]
        }
      },
    },
  },
} as const;

export type Translations = typeof translations;
export type Locale = keyof Translations;
export type Translation = Translations[Locale];

