import type { Route } from './+types/route';
import CookForMonth from '~/components/CookForMonth';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Cook for a Month — Toque' },
    { name: 'description', content: 'Get a background-verified, trained home cook for daily fresh meals. Starting from ₹8,000/month. Delhi, Gurgaon, Noida, Bengaluru, Mumbai.' },
    { name: 'robots', content: 'index, follow' },
  ];
}

export default function CookForMonthRoute() {
  return <CookForMonth />;
}
