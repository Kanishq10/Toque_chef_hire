import type { Route } from "./+types/route";
import ContactUs from "~/components/Contact";
import { buildMeta } from "~/lib/site";

export function meta({}: Route.MetaArgs) {
  return buildMeta({ title: "Contact Toque | Find a Home Cook", description: "Talk to the Toque team about a regular home cook, a one-time cooking service, or a chef for your next gathering.", path: "/contact", image: "/images/toque-chefs-hero.png" });
}

export default function Contact() {
  return <>
  <ContactUs />
  </>;
}
