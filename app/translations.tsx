// This Function Return All Transitoins in Arabic and English 

export const translations = {

  // Arabic Translation
  ar: {
    title: 'حمزة الحصني | مهندس برمجيات',
    description: 'موقعي الشخصي - عرض مشاريعي وخبراتي',
    home: 'الرئيسية',
    aboutPage: {
      about: "عني",
      whoAmI: " من أنا؟",
      aboutP1: 'مهندس برمجيات ومطور نطبيقات ',
      aboutP2: 'لدي خبرة أكثر من 3 سنوات في مجال تطوير الويب والبرمجيات. أعتقد أن التكنولوجيا يجب أن تحسن حياة الناس وليس أن تعقدها.',
      skills: "المهارات",
    },
    // Home Page Translitions
    homePage: {
      softWereEngineer: 'مهندس برمجيات &',
      webDeveloper: 'مطور واجهات أمامية',
      welcome: 'كيف استطيع مساعدتك؟',
      feature1Title: 'تطوير ويب',
      feature1Desc: 'بناء تطبيقات ويب حديثة وفعالة',
      feature2Title: 'حل المشكلات',
      feature2Desc: 'حل المشكلات المعقدة',
      feature3Title: 'أداء عالي',
      feature3Desc: ' سرعة وآمانة وموثوقية',
      feature4Title: 'تطوير تطبيقات الموبايل',
      feature4Desc: 'بناء تطبيقات موبايل ذات كفائة عالية',
    },

    // UI Translitions
    ui: {
      heroTitle: 'مهندس برمجيات ',
      siteName: 'حمزة الحصني',
      nav: {
        about: 'عني',
        projects: 'المشاريع',
        contact: 'تواصل',
      },
      // Footer Translitions
      footer: {
        siteDesc: 'مهندس برمجيات',
        quickLinks: 'الروابط السريعة',
        getInTouch: 'تواصل معي',
        copyright: 'جميع الحقوق محفوظة © حمزة الحصني 2025',
      },
    },
    // Projects Page Translitions 
    projectsPage: {
      viewProject: 'عرض المشروع',
      viewCode: 'الكود',
      projectsList: {
        todoProject: {
          title: 'موقع ادارة مهام',
          description: 'موقع يتيح لك اضافة مهام وحذف مهام بالأضافة الى تصنيف المهام الى مكتملة وغير مكتملة',
          tech: ['Next.js', 'TypeScript', 'TailwindCss'],
          imagesAlt: ['صورة من المشروع في الوضع النهاري', 'صورة من المشروع في الوضع الليلي' ]
        },
        template3Project: {
          title: 'موقع تدريبي ',
          description: 'موقع تدريبي يحاكي موقع تعريفي لشركة تقدم خدمات برمجية يحتوي على اقسام مثل about, priceing, services, ..elc ',
          tech: ['HTML', 'Css'],
          imagesAlt: ['صورة من المشروع 1', 'صورة من المشروع 2', 'صورة من المشروع 3', 'صورة من المشروع 4']
        }
      },
    },
    // Contact Page Translitions 
    contactPage: {
      contact: 'تواصل معي',
      letMeHear: 'دعني أسمع منك! راسلني وسأرد عليك في أسرع وقت.' ,
      getInTouch: 'معلومات التواصل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      socialMedia: 'وسائل التواصل الاجتماعي',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      facebook: 'Facebook',
      form: {
        nameError: 'الرجاء ادخل اسمك',
        emailError: {
          empty: 'الرجاء ادخل بريدك الألكتروني',
          anvalid: 'البريد الألكتروني غير صالح',
        },
        messageError: 'الرجاء أدخل رسالتك',
        nameLabel: 'الاسم',
        namePlaceholder: 'أدخل اسمك',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        messageLabel: 'الرسالة',
        messagePlaceholder: 'أدخل رسالتك',
        send: 'إرسال',
      },
    },
    projects: 'المشاريع',
  },

  // English Translation
  en: {
    title: 'Hamza Alhosni | Software Engineer',
    description: 'My personal website - showcasing my projects and experience',
    home: 'Home',
    aboutPage: {
      about: "About",
      whoAmI: "Who Am I?",
      aboutP1: 'I am a software engineer specialized in web application development ',
      aboutP2: 'I have more than 3 years of experience in web and software development. I believe technology should make people\'s lives better, not complicate them.',
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
      softWereEngineer: 'SoftWere Engineer &',
      webDeveloper: 'Fronend Developer',
      welcome: 'How Can I Help You?',
      feature1Title: 'Web Development',
      feature1Desc: 'Building modern and efficient web applications',
      feature2Title: 'Poblems Solving',
      feature2Desc: 'Solving The Complix Problems',
      feature3Title: 'High Performance',
      feature3Desc: 'Fasting, secureity, and reliablety',
      feature4Title: 'Mobail Development',
      feature4Desc: 'Building High Performance And Efective Mobile Applications',
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

