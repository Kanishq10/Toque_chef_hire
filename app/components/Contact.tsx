import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { site } from "~/lib/site";

/* ─── Shared spring configs (GPU-only: transform + opacity) ──── */
const SPRING: Transition = {
  type: "spring",
  mass: 1,
  stiffness: 300,
  damping: 30,
};
const SPRING_GENTLE: Transition = {
  type: "spring",
  mass: 1,
  stiffness: 240,
  damping: 34,
};

/* ─── Reusable variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING,
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/* ─── FAQ accordion item ─────────────────────────────────────── */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="overflow-hidden cursor-pointer"
      style={{
        borderRadius: "var(--r-lg)",
        border: "1px solid #eadfce",
        backgroundColor: "#fffaf3",
      }}
      whileTap={{ scale: 0.99 }}
      onClick={() => setOpen((o) => !o)}
      layout
    >
      <div className="flex items-center justify-between gap-4 p-6">
        <span className="font-semibold select-none">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={SPRING}
          className="text-xl flex-shrink-0"
          style={{ color: "#b48a00" }}
        >
          +
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: SPRING_GENTLE,
                opacity: { duration: 0.22 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.15 },
              },
            }}
            className="overflow-hidden"
          >
            <p
              className="px-6 pb-6 leading-7 text-gray-600"
              style={{ marginTop: "-4px" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Contact card ───────────────────────────────────────────── */
function ContactCard({
  href,
  icon,
  title,
  subtitle,
  detail,
  detail2,
}: {
  href: string;
  icon: string;
  title: string;
  subtitle: string;
  detail: string;
  detail2?: string;
}) {
  return (
    <motion.a
      href={href}
      className="flex flex-col"
      style={{
        borderRadius: "var(--r-lg)",
        border: "1px solid #eee4d8",
        backgroundColor: "#fffaf3",
        padding: "1.75rem",
      }}
      variants={fadeUp}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow:
          "0 20px 50px -12px rgba(201,162,39,0.18), 0 8px 24px -8px rgba(0,0,0,0.1)",
        transition: SPRING,
      }}
      whileTap={{ scale: 0.96 }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center text-xl"
        style={{ borderRadius: "50%", backgroundColor: "#f5df8c" }}
      >
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{subtitle}</p>
      <p className="mt-5 font-semibold" style={{ color: "#b88d00" }}>
        {detail}
      </p>
      {detail2 && <p className="mt-2 text-gray-600">{detail2}</p>}
    </motion.a>
  );
}

/* ─── Feature card ───────────────────────────────────────────── */
function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      className="bg-white"
      style={{ borderRadius: "var(--r-lg)", padding: "1.75rem" }}
      variants={fadeUp}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 40px -12px rgba(0,0,0,0.12)",
        transition: SPRING,
      }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{body}</p>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
const ContactUs = () => {
  const [enquirySent, setEnquirySent] = useState(false);

  const handleEnquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEnquirySent(true);
    event.currentTarget.reset();
  };

  return (
    <main
      className="text-[#1c1c1c]"
      style={{ backgroundColor: "#fff8ef" }}
    >
      {/* ── HERO ── */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Text block — stagger children */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#c89f16" }}
            >
              Contact Toque
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
            >
              We're here to make
              <span style={{ color: "#c89f16" }}> cooking easier.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-8 text-gray-600"
            >
              Whether you need a cook for everyday meals, a one-time chef, or
              catering for a special occasion, our team is here to help.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact-form"
                className="font-semibold text-black shadow-sm"
                style={{
                  backgroundColor: "#d5a900",
                  borderRadius: "var(--r-pill)",
                  padding: "0.875rem 1.75rem",
                  display: "inline-block",
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 24px -4px rgba(213,169,0,0.45)",
                  transition: SPRING,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send an Enquiry
              </motion.a>

              <motion.a
                href="#location"
                className="font-semibold"
                style={{
                  border: "1.5px solid #d5a900",
                  color: "#8b6c00",
                  borderRadius: "var(--r-pill)",
                  padding: "0.875rem 1.75rem",
                  display: "inline-block",
                }}
                whileHover={{
                  backgroundColor: "#fff1c4",
                  scale: 1.04,
                  transition: SPRING,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Find Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero image — spring reveal */}
          <motion.div
            className="overflow-hidden shadow-2xl"
            style={{ borderRadius: "var(--r-xl)" }}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { ...SPRING, delay: 0.15 },
            }}
            whileHover={{ scale: 1.02, transition: SPRING }}
          >
            <img loading="lazy" decoding="async"
              src="/images/toque-chefs-hero.png"
              alt="Professional Toque chefs"
              className="aspect-[16/10] w-full object-cover md:h-[420px] md:aspect-auto"
              style={{ display: "block" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: SPRING }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#c89f16" }}
            >
              Get in touch
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Choose the easiest way to reach us
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <ContactCard
              href={`tel:${site.contact.phoneHref}`}
              icon="☎"
              title="Call us"
              subtitle="Speak directly with our support team."
              detail={`${site.contact.phoneDisplay} →`}
              detail2="Daily, 9:00 AM – 9:00 PM"
            />
            <ContactCard
              href={`mailto:${site.contact.email}`}
              icon="✉"
              title="Email us"
              subtitle="Send us your questions or requirements."
              detail={`${site.contact.email} →`}
            />
            <ContactCard
              href={site.contact.whatsappHref}
              icon="💬"
              title="WhatsApp"
              subtitle="Message us for quick assistance."
              detail="Chat with Toque →"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section id="contact-form" className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left info card */}
          <motion.div
            className="text-white"
            style={{
              borderRadius: "var(--r-xl)",
              backgroundColor: "#1c1c1c",
              padding: "2.5rem",
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: SPRING }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#d5a900" }}
            >
              Let's talk
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Tell us what you need.
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              Looking for a regular cook? Planning a party? Need a chef for one
              special evening? Share the details and our team will guide you to
              the right service.
            </p>

            <div className="mt-10 space-y-7">
              {[
                {
                  label: "Our services",
                  value: "Cook for a Month · One-time Cook · Chef for Party",
                },
                {
                  label: "Current service areas",
                  value: "Delhi NCR · Bengaluru · Mumbai",
                },
                {
                  label: "Support hours",
                  value: "Monday – Sunday · 9:00 AM – 9:00 PM",
                },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-semibold">{label}</p>
                  <p className="mt-2 text-gray-400">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            style={{
              borderRadius: "var(--r-xl)",
              border: "1px solid #eadfce",
              backgroundColor: "#fff",
              padding: "2.5rem",
              boxShadow: "0 4px 24px -8px rgba(0,0,0,0.06)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, transition: SPRING }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-3xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-gray-500">
              We'll get back to you as soon as possible.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleEnquirySubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="field"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+91"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="field"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  What do you need?
                </label>
                <select name="service" className="field" defaultValue="" required>
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Cook for a Month</option>
                  <option>One-time Cook</option>
                  <option>Chef for Party</option>
                  <option>General Enquiry</option>
                  <option>Become a Partner</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  required
                  placeholder="Tell us about your requirement..."
                  className="field resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full font-semibold text-black shadow-md"
                style={{
                  backgroundColor: "#d5a900",
                  borderRadius: "var(--r-pill)",
                  padding: "1rem 0",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px -6px rgba(213,169,0,0.4)",
                  transition: SPRING,
                }}
                whileTap={{ scale: 0.96 }}
              >
                Send Message
              </motion.button>
              {enquirySent && (
                <p className="rounded-[12px] bg-[#edf8ee] px-4 py-3 text-sm text-[#286a32]" role="status">
                  Thanks for your enquiry. This demo form is ready to connect to your email or CRM endpoint.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── WHY TOQUE ── */}
      <section style={{ backgroundColor: "#f3eadf" }} className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0, transition: SPRING }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#b78d08" }}
            >
              Why Toque
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              More than finding a cook.
            </h2>
            <p className="mt-4 text-gray-600">
              We help you find dependable cooking professionals for everyday
              meals and special occasions.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <FeatureCard
              icon="👨‍🍳"
              title="Professional cooks"
              body="Connect with cooks suited to your requirements and cuisine preferences."
            />
            <FeatureCard
              icon="🍽️"
              title="Flexible services"
              body="From recurring household cooking to one-time events."
            />
            <FeatureCard
              icon="⭐"
              title="Simple experience"
              body="Tell us what you need and let Toque help you find the right fit."
            />
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION + MAP ── */}
      <section id="location" className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: SPRING }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#c89f16" }}
            >
              Find us
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Where we serve</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Toque currently helps households find cooking professionals in
              Delhi NCR, Bengaluru, and Mumbai.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              className="overflow-hidden shadow-sm"
              style={{ borderRadius: "var(--r-xl)" }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0, transition: SPRING }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ scale: 1.01, transition: SPRING }}
            >
              <img loading="lazy" decoding="async"
                src="/images/toque-chef-food.png"
                alt="Toque chef preparing food"
                className="aspect-[16/10] w-full object-cover lg:h-[500px] lg:aspect-auto"
                style={{ display: "block" }}
              />
            </motion.div>

            <motion.div
              className="overflow-hidden"
              style={{
                borderRadius: "var(--r-xl)",
                border: "1px solid #eadfce",
                backgroundColor: "#fff",
                boxShadow: "0 4px 24px -8px rgba(0,0,0,0.06)",
              }}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0, transition: SPRING }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex min-h-[340px] flex-col justify-center p-6 sm:p-10 lg:h-[500px]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c89f16]">Service areas</p>
                <h3 className="mt-3 text-3xl font-semibold text-[#1c1c1c]">Growing city by city.</h3>
                <ul className="mt-8 space-y-4 text-lg text-gray-600">
                  <li>Delhi NCR — Delhi, Gurgaon, Noida, Faridabad and Ghaziabad</li>
                  <li>Bengaluru — select neighbourhoods</li>
                  <li>Mumbai — select neighbourhoods</li>
                </ul>
                <a className="mt-10 font-semibold text-[#8b6c00]" href={`mailto:${site.contact.email}?subject=Service%20availability%20enquiry`}>
                  Ask about availability in your area →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: SPRING }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#c89f16" }}
            >
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Frequently asked questions
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              [
                "Which cities does Toque currently serve?",
                "Toque currently serves Delhi, Gurgaon and Bangalore.",
              ],
              [
                "Can I book a cook for just one day?",
                "Yes. Our one-time cook service is designed for occasions when you need cooking help for a specific day.",
              ],
              [
                "Can I request a cook for a party?",
                "Yes. You can enquire about our chef-for-party service and share your event requirements with us.",
              ],
              [
                "How do I become a Toque cook?",
                "Use the Become a Partner option in the website navigation or contact our team directly.",
              ],
              [
                "How quickly will someone respond?",
                "Our team will review your enquiry and contact you as soon as possible during support hours.",
              ],
            ].map(([question, answer]) => (
              <motion.div key={question} variants={fadeUp}>
                <FAQItem question={question} answer={answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden"
          style={{ borderRadius: "var(--r-xl)" }}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: SPRING,
          }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(20,20,20,0.88)" }}
          />

          {/* Content */}
          <div className="relative z-10 px-4 py-14 text-center text-white sm:px-6 sm:py-20 md:py-24">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#d5a900" }}
            >
              Need help?
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Let's get your kitchen sorted.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              Tell us what you're looking for and the Toque team will help you
              take the next step.
            </p>

            <motion.a
              href="#contact-form"
              className="mt-8 inline-flex font-semibold text-black shadow-lg"
              style={{
                backgroundColor: "#d5a900",
                borderRadius: "var(--r-pill)",
                padding: "1rem 2rem",
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 16px 40px -8px rgba(213,169,0,0.5)",
                transition: SPRING,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Toque →
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactUs;
