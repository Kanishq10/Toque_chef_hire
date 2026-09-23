export const site = {
  name: "Toque",
  url: "https://toque.example",
  description:
    "Find trained, background-verified home cooks for everyday meals, one-time cooking, and private parties in India.",
  contact: {
    email: "hello@toque.example",
    phoneDisplay: "+91 90000 00000",
    phoneHref: "+919000000000",
    whatsappHref: "https://wa.me/919000000000",
  },
  social: {
    facebook: "https://www.facebook.com/toquehome",
    instagram: "https://www.instagram.com/toquehome",
    linkedin: "https://www.linkedin.com/company/toquehome",
  },
} as const;

type MetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  robots?: string;
};

export function buildMeta({
  title,
  description,
  path,
  image = "/images/hero-home.jpg",
  robots = "index, follow",
}: MetaInput) {
  const url = new URL(path, site.url).toString();
  const imageUrl = new URL(image, site.url).toString();

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: robots },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: site.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { tagName: "link", rel: "canonical", href: url },
  ];
}
