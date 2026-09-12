import type { Route } from './+types/route';
import About from '~/components/About';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Toque — Our Story & Mission' },
    { name: 'description', content: 'Learn about Toque — India\'s trusted platform for professional home cooking services. Our story, mission, and the cities we serve.' },
    { name: 'robots', content: 'index, follow' },
  ];
}

export default function AboutRoute() {
  return <About />;
}