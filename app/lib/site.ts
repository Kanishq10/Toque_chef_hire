export const site = {
  name: "Toque",
  url: "https://toquechef.com",
  description:
    "Find trained, background-verified home cooks for everyday meals, one-time cooking, and private parties in India.",
  contact: {
    email: "toquechef@gmail.com",
    phoneDisplay: "+91 98765 43210",
    phoneHref: "+919876543210",
    whatsappHref: "https://wa.me/919876543210",
  },
  social: {
    facebook: "https://www.facebook.com/toquechef",
    instagram: "https://www.instagram.com/toquechef",
    linkedin: "https://www.linkedin.com/company/toquechef",
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
  image = "/images/hero-home.png",
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
