import type { Route } from './+types/route';
import OneTimeCook from '~/components/OneTimeCook';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Chefit: One-Time Cook — Toque' },
    { name: 'description', content: 'Book an on-demand cook who arrives in ~10 minutes. Starting ₹499. Currently available in Gurugram.' },
    { name: 'robots', content: 'index, follow' },
  ];
}

export default function OneTimeCookRoute() {
  return <OneTimeCook />;
}
