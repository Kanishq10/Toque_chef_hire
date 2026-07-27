import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ChefKart Home" },
    { name: "description", content: "Hire chefs" },
    { name: "keywords", content: "chef, cart, keyword3" },
    { property: "og:title", content: "Page Name | Proxima Tech" },
    { property: "og:description", content: "..." },
    { property: "og:url", content: "https://yoursite.com/pagename" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function About() {
  return <div>
    <p>
        contact : 890744432
    </p>
  </div>;
}