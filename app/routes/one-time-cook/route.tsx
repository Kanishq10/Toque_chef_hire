import type { Route } from './+types/route';
import OneTimeCook from '~/components/OneTimeCook';
import { buildMeta } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return buildMeta({ title: "One-Time Cook at Home | Toque", description: "Book a professional cook for a one-time meal, a busy day, or a special dinner at home with Toque.", path: "/one-time-cook", image: "/images/hero-onetime.jpg" });
}

export default function OneTimeCookRoute() {
  return <OneTimeCook />;
}
