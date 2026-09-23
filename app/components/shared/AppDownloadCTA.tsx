import { motion } from "framer-motion";

const SPRING = { type: "spring", mass: 1, stiffness: 300, damping: 30 } as const;

interface Props {
  /** Text above the headline */
  eyebrow?: string;
  headline?: string;
  subline?: string;
  /** If true, shows Google Play + App Store badges */
  showBadges?: boolean;
  /** Primary CTA button text */
  ctaText?: string;
  ctaHref?: string;
}

export function AppDownloadCTA({
  eyebrow = "Available on iOS & Android",
  headline = "Manage your cook on the go.",
  subline = "Book, track and communicate with your Toque cook directly from our app.",
  showBadges = true,
  ctaText = "Download the App",
  ctaHref = "/contact",
}: Props) {
  return (
    <section
      id="app-download"
      className="overflow-hidden px-4 py-14 sm:px-6 sm:py-20"
      style={{ backgroundColor: "#1c1c1c" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: SPRING }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C9A227" }}>
              {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              {headline}
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-400 max-w-lg">
              {subline}
            </p>

            {/* Store badges */}
            {showBadges && (
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <motion.a
                  href="https://apps.apple.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-5 py-3 text-white sm:w-auto"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderRadius: "var(--r-md)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.14)", transition: SPRING }}
                  whileTap={{ scale: 0.96 }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-5 py-3 text-white sm:w-auto"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderRadius: "var(--r-md)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.14)", transition: SPRING }}
                  whileTap={{ scale: 0.96 }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0">
                    <path d="M3.18 23.76c.3.17.65.19.98.07l.08-.05 11.07-6.37-2.35-2.36-9.78 8.71zm-1.02-1.63V1.87c0-.39.21-.74.55-.93L14.5 12 2.71 23.06c-.34-.19-.55-.54-.55-.93zM21.43 10.3l-2.43-1.4-2.65 2.65 2.65 2.65 2.45-1.41c.7-.4.7-1.49-.02-1.49zM4.16.21L15.23 6.58l-2.35 2.36L3.24.28C3.56.17 3.9.04 4.16.21z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </motion.a>
              </div>
            )}

            {!showBadges && ctaText && (
              <motion.a
                href={ctaHref}
                className="mt-8 inline-flex font-semibold text-[#1c1c1c] shadow-lg"
                style={{ backgroundColor: "#C9A227", borderRadius: "var(--r-pill)", padding: "0.875rem 2rem" }}
                whileHover={{ scale: 1.05, boxShadow: "0 16px 40px -8px rgba(201,162,39,0.45)", transition: SPRING }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
              </motion.a>
            )}
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, transition: { ...SPRING, delay: 0.1 } }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div
              className="flex aspect-[3/4] w-full max-w-64 items-center justify-center sm:h-[28rem] sm:w-64 sm:aspect-auto"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderRadius: "var(--r-xl)",
                border: "1.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                loading="lazy"
                decoding="async"
                src="/images/toque-chef-food.png"
                alt="Toque chef preparing fresh food"
                className="h-full w-full object-cover"
                style={{ borderRadius: "var(--r-xl)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AppDownloadCTA;
