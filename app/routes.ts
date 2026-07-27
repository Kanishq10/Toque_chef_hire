// app/routes.ts
import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  // route("projects", "routes/projects.tsx"),
  // route("blog", "routes/blog.tsx"),
  // route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;