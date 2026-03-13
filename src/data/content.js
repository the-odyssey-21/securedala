// ============================================================
//  SECUREDALA — SITE CONTENT
//  Edit all copy, labels, and data from this single file.
// ============================================================

export const NAV_LINKS = [
  { label: 'Community',   href: '#pillars'    },
  { label: 'Objectives',  href: '#objectives' },
  { label: 'Vision 2030', href: '#goals'      },
  { label: 'Membership',  href: '#membership' },
  { label: 'Impact',      href: '#impact'     },
]

export const HERO = {
  badge: 'NAIROBI, KENYA — CYBERSECURITY COMMUNITY',
  titleLine1: 'SECURING',
  titleLine2: "KENYA'S DIGITAL",
  titleLine3: 'FUTURE — TOGETHER',
  description:
    "SecureDala connects cybersecurity professionals, students, and enthusiasts across Kenya and beyond. We build skills, create real-world impact, and shape the nation's digital defence — from grassroots to global.",
}

export const STATS = [
  { value: '1K+',  label: 'MEMBERS BY 2030'  },
  { value: '100+', label: 'EVENTS PLANNED'   },
  { value: '50+',  label: 'TRAINING SESSIONS' },
  { value: '10+',  label: 'MAJOR PROJECTS'   },
]

export const PILLARS = [
  {
    num: '01',
    icon: 'connect',
    title: 'CONNECT',
    text: 'Engage with a vibrant network of experts, students, and enthusiasts locally and globally. Break barriers, build bridges across Kenya and beyond.',
  },
  {
    num: '02',
    icon: 'learn',
    title: 'LEARN & GROW',
    text: 'Access exclusive webinars, workshops, mentoring, and certifications. From beginner fundamentals to advanced penetration testing and AI security research.',
  },
  {
    num: '03',
    icon: 'collaborate',
    title: 'COLLABORATE',
    text: 'Work on CTFs, vulnerability assessments, open-source security tools, and community-driven research projects with like-minded peers who share your passion.',
  },
  {
    num: '04',
    icon: 'contribute',
    title: 'CONTRIBUTE',
    text: 'Share your insights, shape discussions, lead awareness campaigns, and give back to the community and the nation that fuels your growth and expertise.',
  },
]

export const OBJECTIVES = [
  {
    num: '01',
    title: 'CONNECT & NETWORK',
    text: 'Build a strong, engaged community of cybersecurity professionals, students, and enthusiasts locally and globally. Facilitate mentorship, peer support, and meaningful collaboration that opens new opportunities for all members.',
  },
  {
    num: '02',
    title: 'LEARN & DEVELOP SKILLS',
    text: 'Provide training, workshops, webinars, and certifications to keep members updated on emerging threats. Cover everything from beginner content to advanced research in penetration testing, incident response, and AI security.',
  },
  {
    num: '03',
    title: 'COLLABORATE ON REAL-WORLD PROJECTS',
    text: 'Work together on vulnerability assessments, open-source security tools, and community-driven research. Hands-on problem-solving that strengthens both individual skills and collective expertise.',
  },
  {
    num: '04',
    title: 'CONTRIBUTE & GIVE BACK',
    text: 'Share knowledge, guide newcomers, and lead initiatives that strengthen cybersecurity awareness and digital safety locally — outreach programmes, school visits, and awareness campaigns that make a real difference.',
  },
  {
    num: '05',
    title: 'ADVOCATE & INFLUENCE',
    text: "Position SecureDala as a trusted voice influencing national cybersecurity policy, standards, and best practices in Kenya and beyond. Promote responsible practices across industries, schools, and government.",
  },
  {
    num: '∞',
    title: 'CAPACITY BUILDING — REACH THE GRASSROOTS',
    text: 'Reach communities that government and mainstream tech groups cannot or will not reach. Preach the gospel of digital security at the grassroots level — schools, estates, rural areas. Build Kenya\'s cyber resilience from the ground up, one conversation at a time.',
    featured: true,
  },
]

export const GOALS = [
  {
    value: '1K+',
    label: 'ACTIVE MEMBERS',
    desc:  'Professionals, students & enthusiasts across Kenya and globally by 2030.',
  },
  {
    value: '100+',
    label: 'TECH EVENTS',
    desc:  'Local meetups, community events, and tech gatherings conducted or participated in.',
  },
  {
    value: '50+',
    label: 'TRAINING SESSIONS',
    desc:  'CTFs, hackathons, workshops, and certification programmes organised for members.',
  },
  {
    value: '10+',
    label: 'MAJOR PROJECTS',
    desc:  'Open-source tools, threat research, and community-driven awareness campaigns completed.',
  },
  {
    value: '∞',
    label: 'RESOURCES HUB',
    desc:  'A live repository of research papers, practical labs, and exclusive materials for all members.',
  },
]

export const TIERS = [
  {
    id:      'student',
    badge:   'STUDENT MEMBER',
    name:    'THE LEARNER',
    featured: false,
    perks: [
      'Access to beginner & intermediate training resources',
      'CTF competitions and guided challenges',
      'Mentorship pairing with experienced professionals',
      'Community Slack, forums, and study groups',
      'Networking at local meetups and events',
      'Pathway to internships and entry-level roles',
    ],
    cta: 'APPLY AS STUDENT',
  },
  {
    id:      'professional',
    badge:   'PRO MEMBER',
    name:    'THE EXPERT',
    featured: true,
    perks: [
      'Advanced workshops, research labs & certifications',
      'Lead and mentor fellow community members',
      'Access global remote work & consulting contracts',
      'Speaking slots at events & international conferences',
      'Startup incubation and entrepreneurship support',
      'Shape national cybersecurity policy & advocacy',
    ],
    cta: 'JOIN AS PROFESSIONAL',
  },
  {
    id:      'enthusiast',
    badge:   'ENTHUSIAST',
    name:    'THE CURIOUS',
    featured: false,
    perks: [
      'Open community access and resources library',
      'Attend events, meetups, and awareness campaigns',
      'Contribute to open-source community projects',
      'Learn foundational cybersecurity concepts',
      'Be part of local digital safety initiatives',
      'Grow into professional or student membership',
    ],
    cta: 'JOIN AS ENTHUSIAST',
  },
]

export const PROJECTS = [
  { name: 'Open-Source Security Tooling',     tag: 'DEVELOPMENT', color: 'green' },
  { name: 'Local Cyber Awareness Campaigns',  tag: 'OUTREACH',    color: 'blue'  },
  { name: 'Threat Intelligence Research',     tag: 'RESEARCH',    color: 'green' },
  { name: 'University & School Partnerships', tag: 'EDUCATION',   color: 'blue'  },
  { name: 'Startup Incubation Programme',     tag: 'INNOVATION',  color: 'green' },
]

export const PARTNERSHIPS = [
  { name: 'Government Agencies & Regulators',     tag: 'POLICY',      color: 'blue'  },
  { name: 'Universities & Technical Colleges',    tag: 'ACADEMIA',    color: 'green' },
  { name: 'International Cyber Conferences',      tag: 'GLOBAL',      color: 'blue'  },
  { name: 'Private Sector & NGOs',                tag: 'INDUSTRY',    color: 'green' },
  { name: 'Grassroots Community Organisations',   tag: 'GRASSROOTS',  color: 'blue'  },
]

export const FOOTER_LINKS = {
  Community: [
    { label: 'About Us',    href: '#pillars'    },
    { label: 'Objectives',  href: '#objectives' },
    { label: 'Membership',  href: '#membership' },
    { label: 'Projects',    href: '#impact'     },
  ],
  Resources: [
    { label: 'Research Papers', href: '#' },
    { label: 'Practical Labs',  href: '#' },
    { label: 'Events Calendar', href: '#' },
    { label: 'CTF Challenges',  href: '#' },
  ],
  Contact: [
    { label: 'Nairobi, Kenya', href: '#' },
    { label: 'securedala.ke',  href: '#' },
    { label: 'Twitter / X',    href: '#' },
    { label: 'LinkedIn',       href: '#' },
  ],
}
