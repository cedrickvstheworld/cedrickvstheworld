export const PROJECT_CARD_CONTENTS = [
  {
    _id: 0,
    title: 'KYOO',
    description: 'General queueing solutions that aims to capture a huge variety of businesses.',
    link: ''
  },
  {
    _id: 1,
    title: 'Kyoo Automotive',
    description: 'Automotive service tracking and management system marketed to different dealers.',
    link: ''
  },
  {
    _id: 2,
    title: 'Docker Swarm Centralized Logging',
    description: 'Minimalist, light weight and easy-to-implement solution to achieve centralized logging across docker swarm nodes.',
    link: ''
  },
  {
    _id: 3,
    title: 'EMS Project',
    description: 'Employee management system (handles attendance and salary processing) which automates almost everything.',
    link: ''
  },
  {
    _id: 4,
    title: 'YTMPee3',
    description: 'Provides the easiest way to get mp3 from your favorite Youtube videos (only those without copyrights of course).',
    link: ''
  },
  {
    _id: 5,
    title: 'Memo',
    description: 'Memo provides quick, straight to the point and simple place to dump your to-dos, notices, or any lists etc with a reminder feature for the deadline provided.',
    link: ''
  },
  {
    _id: 6,
    title: 'Account Management Boilerplate',
    description: 'Account module boilerplate which provides basic functions an account management does need.',
    link: ''
  },
  {
    _id: 7,
    title: 'CCTTI Website',
    description: 'Branding and registration website for City College of Technology and Trade Inc.',
    link: ''
  },
  {
    _id: 8,
    title: 'Academia',
    description: 'Academia is a school-class platform for Gapan City College that provides attendance and grade management features including SMS notifications.',
    link: ''
  },
]


export const PROJECT_INFO = [
  {
    _id: 0,
    title: 'Kyoo',
    healthText: 'corporate project - role: backend developer - © Kyoo 2018 All rights reserved',
    type: 'Corporate Project',
    previews: [
      '/portfolio/kyoo/09.png',
      '/portfolio/kyoo/01.png',
      '/portfolio/kyoo/02.png',
      '/portfolio/kyoo/03.png',
      '/portfolio/kyoo/04.png',
      '/portfolio/kyoo/05.png',
      '/portfolio/kyoo/06.png',
      '/portfolio/kyoo/07.png',
      '/portfolio/kyoo/08.png',
    ],
    description: `Waiting and falling in line has always been a dilemma. Kyoo offers you a business solution to integrate your daily operations and to improve customer satisfaction.\n` +
    `The solution supports business enterprises in managing its daily operations and helps to find ways for the employees to work faster and better while ensuring that the customers are being served in the most efficient way as possible.\n` +
    `It allows businesses to smartly manage long lines by letting customers to queue virtually via remote queueing or with the aid of a handheld device. Customers may get real-time queue status by scanning the QR codes from generated queueing slips and SMS notifications.` +
    ` (source: https://info.kyoo.com/)`,
    tools: [
      'NodeJS',
      'Typescript',
      'Javascript',
      'Micro-Services Software Architecture',
      'Amazon Web Services',
      'Nginx',
      'Docker',
      'Docker Swarm',
      'Python3',
      'MongoDB',
      'Mongoose',
      'Redis',
      'Firebase',
      'Express JS',
      'Socket IO',
      'Linux',
      'Git',
      'Bash Scripting',
      'Mocha',
      'Chai',
      'JSON Web Tokens - Access Token and Refresh Token Implementation (Authentication and Authorization)',
      'Google OAuth',
      'Facebook OAuth',
    ],
    repository: '',
    websiteLink: 'https://info.kyoo.com/'
  },
  {
    _id: 1,
    title: 'Kyoo Automotive',
    healthText: 'corporate project - role: backend developer - © Kyoo 2018 All rights reserved',
    type: 'Corporate Project',
    previews: [
      '/portfolio/kyoo-automotive/01.png',
      '/portfolio/kyoo-automotive/02.png',
      '/portfolio/kyoo-automotive/04.png',
      '/portfolio/kyoo-automotive/05.png',
      '/portfolio/kyoo-automotive/06.png',
      '/portfolio/kyoo-automotive/07.png',
      '/portfolio/kyoo-automotive/08.png',
    ],
    description: 'Kyoo Automotive is a system which aims to be marketed in automotive dealers and business that will helps them monitor their service processes and stages.\n' +
    'It provides comprehensive visualization of information which the business needs, including graphs and reports.\n' +
    'It includes in-app and SMS notifications to keep clients and staffs updated in an specific transaction.\n' +
    'It also integrates Paymongo API to give clients options to settle their bills through online payment options.',
    tools: [
      'NodeJS',
      'Typescript',
      'Javascript',
      'Micro-Services Software Architecture',
      'Amazon Web Services',
      'Nginx',
      'Paymongo',
      'MongoDB',
      'Mongoose',
      'Express JS',
      'Socket IO',
      'Linux',
      'Git',
      'PM2',
    ],
    repository: '',
    websiteLink: ''
  },
  {
    _id: 2,
    title: 'Docker Swarm Centralized Logging',
    healthText: 'DevOps Tool',
    type: 'Individual Project',
    previews: [
      '/portfolio/docker-swarm-logger/01.png',
      '/portfolio/docker-swarm-logger/02.png',
    ],
    description: 'Minimalist, light weight and easy-to-implement solution to achieve centralized logging across docker swarm nodes.\n' +
    'This is an alternative to ELK (Elasticsearch, Logstash, Kibana) stack or other paid logging solutions for docker swarm deployment strategies.',
    tools: [
      'Python3',
      'Docker',
      'Docker Swarm',
      'Docker Machine',
      'Flask'
    ],
    repository: 'https://github.com/cedie712/docker-swarm-centralized-logging',
    websiteLink: ''
  },
  {
    _id: 3,
    title: 'EMS Project',
    healthText: 'Individual Project',
    type: 'Individual Project',
    previews: [
      '/portfolio/ems-project/01.png',
      '/portfolio/ems-project/02.png',
      '/portfolio/ems-project/03.png',
      '/portfolio/ems-project/04.png',
      '/portfolio/ems-project/05.png',
      '/portfolio/ems-project/06.png',
      '/portfolio/ems-project/07.png',
      '/portfolio/ems-project/08.png',
      '/portfolio/ems-project/09.png',
      '/portfolio/ems-project/10.png',
      '/portfolio/ems-project/14.png',
      '/portfolio/ems-project/15.png',
    ],
    description: 'EMS Project is a full-pledged enterprise-level set of applications which provides fully automated, time-driven and intelligent salary processing, attendance management(with face recognition and identification), and employee management features.\n' +
    'The architecture is composed mainly of API(Application Programming Interface), web app, and an operational desktop app.',
    tools: [
      'Python3',
      'PostgreSQL',
      'Django',
      'Django REST framework',
      'Open CV (computer vision library)',
      'PyQT4 (gui toolkit, massively used by linux distributions\' desktop environments)',
      'Git',
      'Heroku',
      'HTML5',
      'Jinja',
      'Bootstrap',
      'CSS',
      'Javascript'
    ],
    repository: 'https://github.com/cedie712/EMS_Project',
    websiteLink: 'https://emsproject.herokuapp.com/emswebext'
  },
  {
    _id: 4,
    title: 'YTMPee3',
    healthText: 'Individual Project',
    type: 'Individual Project',
    previews: [
      '/portfolio/ytmpee3/01.jpg',
      '/portfolio/ytmpee3/01.png',
      '/portfolio/ytmpee3/02.png',
    ],
    description: 'Provides the easiest way to get mp3 from your favorite Youtube videos (only those without copyrights of course).',
    tools: [
      'NodeJS',
      'Typescript',
      'Express JS',
      'HTML5',
      'CSS',
      'Heroku'
    ],
    repository: 'https://github.com/cedie712/youtube-video-to-mp3',
    websiteLink: 'https://ytmpee3.herokuapp.com/'
  },
  {
    _id: 5,
    title: 'Memo',
    healthText: 'Individual Project',
    type: 'Individual Project',
    previews: [
      '/portfolio/memo/01.png',
      '/portfolio/memo/02.png',
      '/portfolio/memo/03.png',
      '/portfolio/memo/04.png',
    ],
    description: 'Memo provides quick, straight to the point and simple place to dump your to-dos, notices, or any lists etc with a reminder feature for the deadline provided.\n' +
    'It includes the integration of Google OAUTH 2.0 providing options for the users to easily sign-up using their google accounts.',
    tools: [
      'NodeJs',
      'Express JS',
      'React JS',
      'Redux',
      'Javascript',
      'PostgreSQL',
      'Sequelize',
      'Materialize CSS',
      'CSS',
      'HTML5',
      'Git',
      'Heroku',
      'Google OAuth',
      'Passport'
    ],
    repository: 'https://github.com/cedie712/NODEJS-EXPRESS-REACT-REDUX-memo',
    websiteLink: 'https://memo101.herokuapp.com/'
  },
  {
    _id: 6,
    title: 'Account Management Boilerplate',
    healthText: 'Individual Project - Development Tool',
    type: 'Individual Project',
    previews: [
      '/portfolio/account-management-boiler-plate/01.jpg',
    ],
    description: 'Boilerplate for an account management module which will significantly reduce project development time where this is needed.\n' +
    'It is composed of registration-verification, sign-in and sign-out, authorization-authentication, and reset password - forgot password workflows.\n' +
    'It also provides other sign-in methods through facebook and google accounts.\n' +
    'It uses device-fingerprinting for security and redis as in-memory database. It can be used as a separate service (micro-services architecture) or it could be directly plugged in a monolithic application',
    tools: [
      'NodeJs',
      'Typescript',
      'Javascript',
      'Redis',
      'Express JS',
      'JSON Web Tokens - Access Token and Refresh Token Implementation (Authentication and Authorization)',
      'Google OAuth',
      'Facebook OAuth',
      'MongoDB',
      'Mongoose'
    ],
    repository: 'https://github.com/cedie712/account-management-node-js',
    websiteLink: ''
  },
  {
    _id: 7,
    title: 'CCTTI Website',
    healthText: 'Individual Project',
    type: 'Individual Project',
    previews: [
      '/portfolio/cctti/01.png',
      '/portfolio/cctti/02.png',
      '/portfolio/cctti/03.png',
      '/portfolio/cctti/04.png',
      '/portfolio/cctti/05.png',
      '/portfolio/cctti/06.png',
    ],
    description: 'This web application provides a branding site, registration tunnel, and applicant management features for the administration of City College of Technology and Trade Inc which is a training center',
    tools: [
      'Python3',
      'Django',
      'Jinja',
      'HTML5',
      'CSS',
      'Bootstrap',
      'Javascript',
      'Heroku'
    ],
    repository: 'https://github.com/cedie712/CCTTI_Web_App',
    websiteLink: 'https://cctti.herokuapp.com/'
  },
  {
    _id: 8,
    title: 'Academia',
    healthText: 'Individual Project',
    type: 'Individual Project',
    previews: [
      '/portfolio/academia/01.png',
      '/portfolio/academia/02.png',
      '/portfolio/academia/03.png',
      '/portfolio/academia/04.png',
      '/portfolio/academia/05.png',
    ],
    description: 'Academia is a school-class platform for Gapan City College that provides attendance and grade management features including SMS notifications.',
    tools: [
      'Python3',
      'Django',
      'Jinja',
      'HTML5',
      'CSS',
      'Bootstrap',
      'Javascript',
      'Heroku',
      'Twilo'
    ],
    repository: 'https://github.com/cedie712/Academia',
    websiteLink: 'https://academiaproject.herokuapp.com/'
  }
];


export const PAGE_TWO_PRELOADS = [
  '/portfolio/kyoo/09.png',
  '/portfolio/kyoo-automotive/01.png',
  '/portfolio/docker-swarm-logger/01.png',
  '/portfolio/ems-project/02.png',
  '/portfolio/ytmpee3/01.png',
  '/portfolio/memo/03.png',
  '/portfolio/account-management-boiler-plate/01.jpg',
  '/portfolio/cctti/02.png',
  '/portfolio/academia/02.png'
];