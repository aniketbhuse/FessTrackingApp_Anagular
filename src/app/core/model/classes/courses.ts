export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: string;
  color: string;
}

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript, React and Vue',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    students: '2,450+',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Python Programming',
    description: 'Python, Django, Flask and real-world projects',
    duration: '10 weeks',
    level: 'All Levels',
    students: '3,120+',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Database Management',
    description: 'SQL, PostgreSQL, MongoDB & DB design',
    duration: '8 weeks',
    level: 'Intermediate',
    students: '1,850+',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Ethical hacking & network security',
    duration: '14 weeks',
    level: 'Advanced',
    students: '1,280+',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'Cloud Computing',
    description: 'AWS, Azure & GCP certifications',
    duration: '10 weeks',
    level: 'Intermediate',
    students: '2,090+',
    color: 'from-teal-500 to-blue-500',
  },
  {
    id: 6,
    title: 'C# Programming',
    description: 'AWS, Azure & GCP certifications',
    duration: '10 weeks',
    level: 'Intermediate',
    students: '200+',
    color: 'from-teal-500 to-blue-500',
  },
  {
    id: 7,
    title: 'Dot Net ',
    description: 'Dot Net & Dot Net Core certifications',
    duration: '5 weeks',
    level: 'Advanced',
    students: '2,090+',
    color: 'from-teal-500 to-blue-500',
  },
  {
    id: 8,
    title: 'Full Stack Devepolment ',
    description: 'Dot Net & Dot Net Core With Enitity Framework, Angular',
    duration: '10 weeks',
    level: 'Intermediate',
    students: '200+',
    color: 'from-teal-500 to-blue-500',
  }
];
