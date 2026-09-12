import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home/route.tsx"),
  route("about", "routes/about/route.tsx"),
  route("about-us", "routes/about/route.tsx", { id: "about-us" }),
  route("contact", "routes/contact/route.tsx"),
  route("contact-us", "routes/contact/route.tsx", { id: "contact-us" }),
  route("join-chefkart", "routes/join-chefkart/route.tsx"),
  route("join-as-chef", "routes/join-chefkart/route.tsx", { id: "join-as-chef" }),
  route("cook-for-month", "routes/cook-for-month/route.tsx"),
  route("one-time-cook", "routes/one-time-cook/route.tsx"),
  route("chef-for-party", "routes/chef-for-party/route.tsx"),
  
  // Dummy routes for completeness based on reference
  route("cooks", "routes/cooks/route.tsx"),
  route("cooks-near-me", "routes/cooks/route.tsx", { id: "cooks-near-me" }),
  route("privacy-policy", "routes/privacy-policy/route.tsx"),
  route("terms-of-service", "routes/terms-of-service/route.tsx"),
  route("blogs", "routes/blogs/route.tsx"),
] satisfies RouteConfig;
