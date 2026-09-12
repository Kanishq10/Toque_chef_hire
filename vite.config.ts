import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router", "framer-motion", "react-icons/io5", "react-icons/fa", "react-icons/tb"],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
