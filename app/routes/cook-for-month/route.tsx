import type { Route } from './+types/route';
import CookForMonth from '~/components/CookForMonth';
import { buildMeta } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return buildMeta({ title: "Monthly Home Cook Service | Toque", description: "Find a trained home cook for fresh daily meals. Toque matches households with verified cooks in Delhi NCR, Bengaluru, and Mumbai.", path: "/cook-for-month", image: "/images/hero-month.jpg" });
}

export default function CookForMonthRoute() {
  return <CookForMonth />;
}
