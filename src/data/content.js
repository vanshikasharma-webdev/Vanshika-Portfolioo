import vehicleImg from '../assets/vehicle.jpeg'
import eventeaseImg from '../assets/eventease.png'

export const profile = {
  name: 'Vanshika Sharma',
  headline: 'MCA Student | Aspiring Full-Stack Developer',
  location: 'Agra, Uttar Pradesh, India',
  email: 'vanshiarma08@gmail.com',
  github: 'https://github.com/vanshikasharma-webdev',
  linkedin: 'https://linkedin.com/in/vanshikasharma03/',
  resume: '/Vanshika_Sharma_Resume.pdf',
  intro:
    'I build practical, user-focused applications. So far that means frontend work, PHP web apps and a GPS-guided autonomous vehicle. I am now learning the MERN stack and Generative AI to grow into full-stack development.',
  about: [
    'I am an MCA student who learns by building. I like turning an idea into something people can actually use, and I have worked on it from the hardware side (an ESP32 vehicle) to the web side (a PHP booking platform).',
    'My interests are frontend development, backend fundamentals, databases and full-stack applications. I also bring communication, teamwork, leadership, problem-solving and adaptability to group work.',
  ],
}

export const nav = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
]

// level: shown as text; progress: true marks technologies still being learned
export const skillGroups = [
  { title: 'Languages', items: [
    { name: 'C++', level: 'Proficient' }, { name: 'Python', level: 'Good' }, { name: 'C', level: 'Good' },
    { name: 'JavaScript', level: 'Decent' }, { name: 'Java', level: 'Decent' }, { name: 'PHP', level: 'Decent' },
  ] },
  { title: 'Frontend', items: [
    { name: 'HTML5' }, { name: 'CSS3' }, { name: 'Bootstrap' }, { name: 'React.js', progress: true },
  ] },
  { title: 'Backend', items: [
    { name: 'PHP' }, { name: 'Node.js' }, { name: 'Express.js', progress: true },
  ] },
  { title: 'Databases', items: [
    { name: 'MySQL' }, { name: 'MongoDB', progress: true },
  ] },
  { title: 'Tools', items: [
    { name: 'Git' }, { name: 'GitHub' }, { name: 'VS Code' }, { name: 'Postman' },
  ] },
  { title: 'Soft skills', items: [
    { name: 'Leadership' }, { name: 'Communication' }, { name: 'Problem-solving' }, { name: 'Teamwork' }, { name: 'Adaptability' },
  ] },
]

export const projects = [
  {
    id: 'vehicle',
    title: 'GPS-Guided Autonomous Vehicle',
    category: 'IoT / Embedded Systems',
    image: vehicleImg,
    imageAlt: 'My GPS-guided autonomous vehicle: a four-wheeled chassis with an ESP32, GPS module and ultrasonic sensors mounted on a green 3D-printed holder',
    imagePosition: 'center 40%',
    summary: 'A vehicle that navigates between predefined coordinates using live GPS and steers around obstacles it detects.',
    tags: ['IoT', 'ESP32', 'GPS Module', 'Ultrasonic Sensors', 'C/C++'],
    details: [
      'Self-navigation between predefined coordinates using real-time GPS tracking and bearing-based path correction.',
      'Three ultrasonic sensors for obstacle detection and avoidance, so the vehicle can move safely in changing surroundings.',
      'Sensor-driven navigation logic on an ESP32 microcontroller with motor drivers and real-time decision-making.',
    ],
    stack: 'IoT, ESP32, GPS Module, Ultrasonic Sensors, Embedded Systems, Motor Driver, C/C++, Sensor Integration',
  },
  {
    id: 'eventease',
    title: 'EventEase',
    category: 'Web Application / Event Management',
    image: eventeaseImg,
    imageAlt: 'EventEase homepage showing the headline "Plan Events Without Stress" on a dark blue interface',
    imagePosition: 'center top',
    summary: 'An event management and booking platform with daily and weekly booking options.',
    tags: ['PHP', 'HTML', 'CSS', 'MySQL', 'phpMyAdmin'],
    details: [
      'Booking logic written in PHP and connected to a database managed through phpMyAdmin.',
      'Daily and weekly booking options for events.',
      'Responsive frontend interface for a smooth booking experience.',
    ],
    stack: 'PHP, HTML, CSS, MySQL, phpMyAdmin',
  },
  {
    id: 'frontend',
    title: 'Frontend Practice Projects',
    category: 'Frontend Development',
    image: null,
    summary: 'Six small interactive projects where I practised DOM manipulation and responsive layouts.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    list: ['Profile Card', 'Product Card', 'Responsive Landing Page', 'Dynamic Color Changer', 'Music Player', 'Counter App'],
    details: [
      'Applied DOM manipulation to build interactive components such as the color changer, music player and counter.',
      'Used Flexbox and Bootstrap layouts to make the cards and landing page responsive.',
    ],
    stack: 'HTML, CSS, JavaScript, Bootstrap, DOM, Flexbox',
  },
]

export const experience = [
  {
    org: 'Liberian Technologies Pvt. Ltd.', role: 'Intern', type: 'Remote', dates: 'August 2024 – September 2024',
    points: [
      'Collaborated with cross-functional teams on technical tasks and internal development projects.',
      'Applied analytical and problem-solving skills to support ongoing project deliverables.',
    ],
  },
  {
    org: 'TNF Today Media Network Pvt. Ltd.', role: 'Digital Marketing Intern', type: 'On-site', dates: 'July 2024 – August 2024',
    points: [
      'Supported content creation and digital marketing campaigns to increase online engagement.',
      'Coordinated with team members to plan and execute marketing initiatives on schedule.',
    ],
  },
]

export const education = [
  { school: 'Amity University Haryana', degree: 'Master of Computer Applications (MCA)', dates: 'August 2025 – May 2027 (expected)', place: 'Manesar, Haryana', note: 'Currently pursuing' },
  { school: 'Agra Public Group of Institutions, DBRA University', degree: 'Bachelor of Computer Applications (BCA)', dates: 'August 2022 – May 2025', place: 'Agra, Uttar Pradesh' },
  { school: 'St. Andrews School', degree: 'Intermediate (Class XII), 2022 · Matriculation (Class X), 2020', dates: '', place: 'Agra, Uttar Pradesh' },
]

export const achievement = {
  title: 'Student of the Year Award',
  text: 'Recognized for academic excellence and leadership during BCA at Agra Public Group of Institutions.',
}

export const certifications = [
  { title: 'Cisco Packet Tracer Certification', meta: 'Cisco Networking Academy · November 2025' },
  { title: 'Core Java Certification', meta: '' },
  { title: 'Full Stack Web Development with MERN Stack & Generative AI', meta: 'Currently pursuing', progress: true,
    topics: 'HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express.js, MongoDB, Git, REST APIs, Authentication, Prompt Engineering, Generative AI' },
]
