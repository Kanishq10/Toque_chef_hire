import type { Route } from './+types/route';
import ChefForParty from '~/components/ChefForParty';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Chef for Party — Toque' },
    { name: 'description', content: 'Hire a professional party chef for house parties and events. Starting ₹2,000/visit. Delhi NCR, Bengaluru and Mumbai.' },
    { name: 'robots', content: 'index, follow' },
  ];
}

export default function ChefForPartyRoute() {
  return <ChefForParty />;
}
