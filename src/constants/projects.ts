import { ProjectType } from '../types/project';

export const projects: ProjectType[] = [
  {
    title: 'Project 1',
    description: 'A React-based note-taking app with TypeScript and local storage, allowing users to create, edit, and manage their notes effortlessly.',
    image: 'src/assests/project1.jpg',
    technologies: ['React', 'Local storage'],
    github: 'https://github.com/piyal-nagda/react_notes',
    live: 'https://react-notes-navy-kappa.vercel.app/'
  },
  {
    title: 'Project 2',
    description: 'An expense tracker app built with React and Tailwind CSS, featuring Vite for fast builds and a user-friendly interface for managing finances.',
    image: 'src/assests/project2.jpg',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/piyal-nagda/SpendSphere',
    live: 'https://spend-sphere-sage.vercel.app/'
  },
  {
    title: 'Project 3',
    description: 'A mood diary application with a 365-day mood tracker and local storage, enabling users to track their emotions and categorize entries by mood.',
    image: 'src/assests/project3.jpg',
    technologies: ['React Native', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/piyal-nagda/MyMoodDiary',
    live: 'https://my-mood-diary.vercel.app/'
  }
];