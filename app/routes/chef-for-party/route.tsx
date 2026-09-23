import type { Route } from './+types/route';
import ChefForParty from '~/components/ChefForParty';
import { buildMeta } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return buildMeta({ title: "Chef for House Parties | Toque", description: "Hire a professional chef for a house party, celebration, or intimate gathering in Delhi NCR, Bengaluru, and Mumbai.", path: "/chef-for-party", image: "/images/hero-party.png" });
}

export default function ChefForPartyRoute() {
  return <ChefForParty />;
}
