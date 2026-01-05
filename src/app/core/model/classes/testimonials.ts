export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  message: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    message:
      'The private classes were a game-changer for my career. The instructor adapted the curriculum to my needs and I landed my dream job within 3 months!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Scientist',
    company: 'Analytics Pro',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    message:
      'Outstanding experience! The one-on-one attention helped me grasp complex concepts quickly.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Cybersecurity Analyst',
    company: 'SecureNet Systems',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    message:
      'Best investment I made in my career! The personalized approach helped me transition seamlessly.',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Cloud Architect',
    company: 'CloudFirst Technologies',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    message:
      'Real-world projects and hands-on experience prepared me perfectly for my role.',
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    role: 'Mobile App Developer',
    company: 'AppVenture Studios',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    message:
      'The instructor was patient, knowledgeable, and genuinely invested in my success.',
  },
];
