import { Link } from "react-router";
import { motion } from "framer-motion";
import { site } from "~/lib/site";

const SPRING = { type: "spring", mass: 1, stiffness: 300, damping: 30 } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: SPRING },
};

export function Footer() {
  const services = [
    { label: "Cook for a Month", href: "/cook-for-month" },
    { label: "Chefit: One-time Cook", href: "/one-time-cook" },
    { label: "Chef for Party", href: "/chef-for-party" },
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blogs" },
    { label: "Careers", href: "/about" },
  ];

  const forCooks = [
    { label: "Join Toque", href: "/join-chefkart" },
    { label: "Cooks Near Me", href: "/cooks" },
    { label: "Become a Partner", href: "/join-chefkart" },
  ];

  const columns = [
    { title: "OUR SERVICES", links: services },
    { title: "COMPANY", links: company },
    { title: "FOR COOKS", links: forCooks },
  ];

  const socials = [
    {
      label: "Facebook",
      href: site.social.facebook,
      icon: (
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      ),
    },
    {
      label: "Instagram",
      href: site.social.instagram,
      icon: (
        <>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </>
      ),
      strokeFill: true,
    },
    {
      label: "LinkedIn",
      href: site.social.linkedin,
      icon: (
        <>
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx="4" cy="4" r="2" stroke="none" />
        </>
      ),
    },
  ];

  return (
    <footer className="bg-charcoal text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="rounded-full p-0.5 bg-white">
                <img src="/logo.svg" alt="Toque logo" className="w-8 h-8 block" />
              </div>
              <span className="text-xl wordmark">Toque</span>
            </Link>
            <p className="text-sm leading-6 text-gray-400 max-w-xs">
              India's most trusted platform for professional home-cooking
              services — Delhi NCR, Bengaluru &amp; Mumbai.
            </p>
            <a href={`mailto:${site.contact.email}`} className="mt-3 inline-block text-sm text-[#C9A227] hover:text-white transition-colors">
              {site.contact.email}
            </a>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-gray-500 transition-colors hover:text-[#C9A227]"
                  whileTap={{ scale: 0.88 }}
                  whileHover={{ color: "#C9A227" }}
                >
                  <svg
                    fill={s.strokeFill ? "none" : "currentColor"}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    {s.icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {columns.map((col, ci) => (
            <motion.div
              key={col.title}
              initial="hidden"
              whileInView="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...SPRING, delay: ci * 0.07 } } }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-200 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-[#C9A227] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Toque — All rights reserved</p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy" className="text-gray-500 transition-colors hover:text-[#C9A227]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 transition-colors hover:text-[#C9A227]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
