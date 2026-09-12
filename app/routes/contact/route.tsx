import type { Route } from "./+types/route";
import ContactUs from "~/components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ChefKart Contact" },
    { name: "description", content: "Hire chefs" },
    { name: "keywords", content: "chef, cart, keyword3" },
    { property: "og:title", content: "ChefKart Contact | Proxima Tech" },
    { property: "og:description", content: "Hire chefs through ChefKart" },
    { property: "og:url", content: "https://yoursite.com/contact" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Contact() {
  return <>
  <ContactUs />
  </>;
}