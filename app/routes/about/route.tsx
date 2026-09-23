import type { Route } from './+types/route';
import About from '~/components/About';
import { buildMeta } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return buildMeta({ title: "About Toque | Professional Home Cooking Services", description: "Learn how Toque helps Indian households find trusted professional cooks for everyday meals and special occasions.", path: "/about", image: "/images/hero-about.png" });
}

export default function AboutRoute() {
  return <About />;
}
