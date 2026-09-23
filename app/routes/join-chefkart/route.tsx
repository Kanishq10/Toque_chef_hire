import type { Route } from './+types/route';
import ChefConnection from '~/components/ChefConnection';
import { buildMeta } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return buildMeta({ title: "Become a Toque Cook | Flexible Cooking Work", description: "Apply to join Toque’s community of professional home cooks. Build flexible work and connect with households in your city.", path: "/join-chefkart", image: "/images/hero-join.jpg" });
}

export default function JoinChefkartRoute() { 
  return <ChefConnection />; 
}
