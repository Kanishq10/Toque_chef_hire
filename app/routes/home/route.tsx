import type { Route } from './+types/route';
import Home from '~/components/Home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Toque — Professional Home Chefs in India' },
    { name: 'description', content: 'Book verified, trained home cooks for daily meals, one-time cooking, or party chefs. Serving Delhi NCR, Bengaluru and Mumbai.' },
    { property: 'og:title', content: 'Toque — Professional Home Chefs in India' },
    { name: 'robots', content: 'index, follow' },
  ];
}

export default function HomeRoute() {
  return <Home />;
}