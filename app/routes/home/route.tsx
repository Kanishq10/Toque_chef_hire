import type { Route } from './+types/route';
import Home from '~/components/Home';
import { buildMeta } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return buildMeta({ title: "Toque | Verified Home Cooks in India", description: "Book trained, background-verified home cooks for daily meals, one-time cooking, or private parties in Delhi NCR, Bengaluru, and Mumbai.", path: "/", image: "/images/hero-home.png" });
}

export default function HomeRoute() {
  return <Home />;
}
