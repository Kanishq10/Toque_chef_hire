import type { Route } from './+types/route';
import ChefConnection from '~/components/ChefConnection';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Join Toque — Cook with Us & Earn More' },
    { name: 'description', content: 'Apply to become a Toque professional cook. Earn ₹15,000–₹40,000/month with flexible hours. Free training provided.' },
    { name: 'robots', content: 'index, follow' },
  ];
}

export default function JoinChefkartRoute() { 
  return <ChefConnection />; 
}
