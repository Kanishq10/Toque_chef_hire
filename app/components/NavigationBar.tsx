import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";
import {
  IoChevronDown,
  IoChevronForward,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

/* ─── Spring configs ─────────────────────────────────────────── */
const SPRING: Transition = { type: "spring", mass: 1, stiffness: 300, damping: 30 };
const SPRING_GENTLE: Transition = { type: "spring", mass: 1, stiffness: 240, damping: 34 };

/* ─── Nav data ───────────────────────────────────────────────── */
const services = [
  { label: "Cook for a Month", href: "/cook-for-month" },
  { label: "Chefit: One-time Cook", href: "/one-time-cook" },
  { label: "Chef for Party", href: "/chef-for-party" },
];

const navLinks = [
  { label: "Toque से जुड़ें", href: "/join-chefkart" },
  { label: "Cooks Near Me", href: "/cooks" },
];

/* ─── Animation variants ─────────────────────────────────────── */
const drawerVariants = {
  hidden: { x: "100%", opacity: 0, transition: SPRING },
  visible: { x: 0, opacity: 1, transition: SPRING },
  exit: { x: "100%", opacity: 0, transition: SPRING },
};

const backdropVariants = {
  hidden: { opacity: 0, transition: { duration: 0.18 } },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.92, y: -6, transition: { duration: 0.14 } },
  visible: { opacity: 1, scale: 1, y: 0, transition: SPRING_GENTLE },
  exit: { opacity: 0, scale: 0.92, y: -6, transition: { duration: 0.12 } },
};

/* ─── Component ─────────────────────────────────────────────── */
export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();
  const navAlpha = useTransform(scrollY, [0, 100], [0.7, 0.92]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Sticky glass navbar */}
      <motion.nav
        className="sticky top-0 z-40 text-white will-animate"
        style={{
          "--nav-alpha": navAlpha,
          backgroundColor: `rgba(28,28,28,var(--nav-alpha,0.82))`,
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        } as React.CSSProperties}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

          {/* Logo */}
          <motion.div whileTap={{ scale: 0.93 }} style={{ display: "inline-flex" }}>
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-full p-0.5 bg-white">
                <img src="/logo.svg" alt="Toque logo" className="w-8 h-8 block" />
              </div>
              <span className="text-xl wordmark">Toque</span>
            </Link>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services hover dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <motion.button
                className="flex items-center gap-1 text-white/90 transition-colors"
                whileHover={{ color: "#C9A227" }}
                whileTap={{ scale: 0.93 }}
              >
                Our Services
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={SPRING}
                  className="inline-flex"
                >
                  <IoChevronDown size={16} />
                </motion.span>
              </motion.button>

              {/* Glass dropdown */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-3 rounded-[20px] shadow-2xl w-72 overflow-hidden glass-light will-animate"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ transformOrigin: "top center" }}
                  >
                    {services.map((service, i) => (
                      <Link key={service.label} to={service.href}>
                        <motion.div
                          className={`flex items-center justify-between px-5 py-4 transition-colors ${
                            i !== services.length - 1 ? "border-b border-black/6" : ""
                          }`}
                          whileHover={{ backgroundColor: "rgba(255,246,225,0.7)" }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span className="font-medium text-[#1c1c1c]">{service.label}</span>
                          <IoChevronForward className="text-gray-400" size={14} />
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <motion.div key={link.label} whileTap={{ scale: 0.94 }}>
                <Link
                  to={link.href}
                  className="text-white/90 hover:text-[#C9A227] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.93 }}>
              <Link
                to="/contact"
                className="btn-gold font-semibold px-5 py-2.5 inline-block text-center shadow-sm"
                style={{ borderRadius: "var(--r-pill)" }}
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.88 }}>
              <FaUserCircle size={36} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </motion.div>
          </div>

          {/* Hamburger */}
          <motion.button
            className="lg:hidden p-2 rounded-[12px] text-white"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            whileTap={{ scale: 0.86 }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <IoMenu size={26} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden will-animate" aria-modal="true" role="dialog">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundColor: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="absolute top-0 right-0 flex h-full w-[88vw] max-w-sm flex-col glass-drawer will-animate"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <motion.div whileTap={{ scale: 0.93 }}>
                  <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                    <div className="rounded-full p-0.5 bg-white">
                      <img src="/logo.svg" alt="Toque logo" className="w-7 h-7 block" />
                    </div>
                    <span className="text-lg wordmark text-white">Toque</span>
                  </Link>
                </motion.div>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-[12px] text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  whileTap={{ scale: 0.84 }}
                  aria-label="Close menu"
                >
                  <IoClose size={22} />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
                {/* Services accordion */}
                <motion.button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-[16px] text-white/90 text-base font-medium"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Our Services</span>
                  <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={SPRING} className="inline-flex text-white/45">
                    <IoChevronDown size={18} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: SPRING_GENTLE }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.18 } }}
                      className="overflow-hidden"
                    >
                      <div className="ml-7 pl-4 flex flex-col mb-1" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
                        {services.map((s) => (
                          <Link key={s.label} to={s.href} onClick={() => setMobileOpen(false)}>
                            <motion.div
                              className="py-3 px-2 text-sm text-white/60 transition-colors"
                              whileHover={{ color: "#C9A227" }}
                              whileTap={{ scale: 0.96 }}
                            >
                              {s.label}
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {navLinks.map((link) => (
                  <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)}>
                    <motion.div
                      className="flex items-center px-4 py-3.5 rounded-[16px] text-white/90 text-base font-medium"
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
              </nav>

              {/* Footer CTA */}
              <div className="px-4 py-4 sm:px-6 sm:py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.94 }}>
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-gold font-semibold py-3.5 block text-center shadow-lg"
                    style={{ borderRadius: "var(--r-pill)" }}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
