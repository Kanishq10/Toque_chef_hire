import { motion, type Transition } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import HowItWorks from '~/components/shared/HowItWorks';
import AppDownloadCTA from '~/components/shared/AppDownloadCTA';

const SPRING: Transition = { type: 'spring', mass: 1, stiffness: 300, damping: 30 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: SPRING } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const steps = [
  { number: 1, emoji: '📱', title: 'Download the App', description: 'Register on Toque app in under 2 minutes' },
  { number: 2, emoji: '🔍', title: 'Choose Your Service', description: 'Pick from monthly cook, one-time, or party chef' },
  { number: 3, emoji: '✅', title: 'Get Matched', description: 'We assign a verified, trained cook for your needs' },
  { number: 4, emoji: '🍽️', title: 'Enjoy Fresh Meals', description: 'Fresh home-cooked food every day in your kitchen' }
];

function AnimatedNumber({ value }: { value: string }) {
  const numMatch = value.match(/([\d,.]+)/);
  const rawNum = numMatch ? parseFloat(numMatch[1].replace(/,/g, '')) : 0;
  const suffix = value.replace(/[\d,.]+/g, '');

  const [count, setCount] = useState(0);
  const [hasInView, setHasInView] = useState(false);

  useEffect(() => {
    if (hasInView && rawNum > 0) {
      const duration = 1500;
      const fps = 30;
      const frames = duration / (1000 / fps);
      const stepValue = rawNum / frames;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= rawNum) {
          setCount(rawNum);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 1000 / fps);
      return () => clearInterval(timer);
    }
  }, [hasInView, rawNum]);

  return (
    <motion.span
      onViewportEnter={() => setHasInView(true)}
      viewport={{ once: true, margin: "-80px" }}
    >
      {rawNum > 0 && !hasInView ? (
        value
      ) : rawNum > 0 ? (
        <>
          {count === rawNum
            ? value.match(/([\d,.]+)/)![1]
            : count > 10 ? Math.floor(count).toLocaleString() : count.toFixed(rawNum % 1 !== 0 ? 1 : 0)}
          {suffix}
        </>
      ) : (
        value
      )}
    </motion.span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-10 text-white sm:py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(201,162,39,0.2),transparent_38%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            className="max-w-2xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-[--r-pill] bg-[#C9A227] px-4 py-1.5 text-sm font-semibold text-black">
              <span aria-hidden="true">🍽️</span> Delhi NCR · Bengaluru · Mumbai
            </motion.div>
            <motion.h1 variants={fadeUp} className="mb-5 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-6xl">
              Professional home-chefs cook fresh meals in your kitchen
            </motion.h1>
            <motion.p variants={fadeUp} className="mb-7 max-w-xl text-base leading-7 text-white/70 sm:mb-10 sm:text-lg sm:leading-8 md:text-xl">
              Trusted, trained cooks for everyday meals, one-time help, and celebrations at home.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#app-download"
                whileTap={{ scale: 0.96 }}
                className="rounded-[--r-pill] bg-[#C9A227] px-8 py-3 text-center text-lg font-semibold text-black"
              >
                Download App
              </motion.a>
              <motion.a
                href="#services"
                whileTap={{ scale: 0.96 }}
                className="rounded-[--r-pill] border-2 border-white/70 px-8 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                View Services
              </motion.a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              <span>✓ Background-verified cooks</span>
              <span>✓ Hygienic home cooking</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative aspect-[16/10] overflow-hidden rounded-[--r-xl] border border-white/10 bg-[#302719] shadow-2xl lg:min-h-[520px] lg:aspect-auto"
            initial={{ opacity: 0, x: 24, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1, transition: { ...SPRING, delay: 0.12 } }}
          >
            <img
              src="/images/toque-chefs-hero.png"
              alt="Toque chefs preparing fresh food"
              className="chef-image-focus absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-white/80 sm:bottom-5 sm:left-5 sm:text-sm sm:tracking-[0.18em]">
              Real cooks. Real homes. Real happy tables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="bg-white px-4 py-14 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-10 text-center sm:mb-16"
          >
            <motion.span variants={fadeUp} className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Services
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#1C1C1C]">
              Discover your perfect service
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Service A */}
            <motion.div variants={fadeUp} whileHover={{ y: -6, scale: 1.015, transition: SPRING }} whileTap={{ scale: 0.96 }} className="flex flex-col justify-between rounded-[--r-md] bg-[#fff8ef] p-6 shadow-sm sm:p-8">
              <div>
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Chef for Party</h3>
                <p className="text-xl font-semibold text-[#C9A227] mb-4">₹2,000/visit</p>
                <p className="mb-6 text-gray-600 sm:mb-8">Multi-cuisine · Customisable · Bartenders available</p>
              </div>
              <Link to="/chef-for-party" className="block text-center bg-[#C9A227] text-black py-3 rounded-[--r-pill] font-semibold hover:bg-[#b58f20] transition-colors">
                Book Now
              </Link>
            </motion.div>

            {/* Service B */}
            <motion.div variants={fadeUp} whileHover={{ y: -6, scale: 1.015, transition: SPRING }} whileTap={{ scale: 0.96 }} className="flex flex-col justify-between rounded-[--r-md] bg-[#fff8ef] p-6 shadow-sm sm:p-8">
              <div>
                <div className="text-4xl mb-4">🍳</div>
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Cook for Month</h3>
                <p className="text-xl font-semibold text-[#C9A227] mb-4">₹8,000/month</p>
                <p className="mb-6 text-gray-600 sm:mb-8">Background verified · Hygiene-certified · Flexible timings</p>
              </div>
              <Link to="/cook-for-month" className="block text-center border-2 border-[#1C1C1C] text-[#1C1C1C] py-3 rounded-[--r-pill] font-semibold hover:bg-[#1C1C1C] hover:text-white transition-colors">
                Learn More
              </Link>
            </motion.div>

            {/* Service C */}
            <motion.div variants={fadeUp} whileHover={{ y: -6, scale: 1.015, transition: SPRING }} whileTap={{ scale: 0.96 }} className="flex flex-col justify-between rounded-[--r-md] bg-[#fff8ef] p-6 shadow-sm sm:p-8">
              <div>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Chefit: One-time Cook</h3>
                <p className="text-xl font-semibold text-[#C9A227] mb-4">₹499/session</p>
                <p className="mb-6 text-gray-600 sm:mb-8">Arrives in ~10 min · On-demand · Gurugram only</p>
              </div>
              <Link to="/one-time-cook" className="block text-center border-2 border-[#1C1C1C] text-[#1C1C1C] py-3 rounded-[--r-pill] font-semibold hover:bg-[#1C1C1C] hover:text-white transition-colors">
                Learn More
              </Link>
            </motion.div>

            {/* Service D */}
            <motion.div variants={fadeUp} whileHover={{ y: -6, scale: 1.015, transition: SPRING }} whileTap={{ scale: 0.96 }} className="flex flex-col justify-between rounded-[--r-md] bg-[#1C1C1C] p-6 text-white shadow-sm sm:p-8">
              <div>
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-2xl font-bold text-[#C9A227] mb-2">Join as Cook</h3>
                <p className="text-xl font-semibold mb-4">Earn ₹15k–₹40k/month</p>
                <p className="mb-6 text-gray-400 sm:mb-8">Flexible hours · Training provided</p>
              </div>
              <Link to="/join-chefkart" className="block text-center bg-white text-[#1C1C1C] py-3 rounded-[--r-pill] font-semibold hover:bg-gray-200 transition-colors">
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="bg-[#fff8ef] px-4 py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="relative aspect-[16/10] overflow-hidden rounded-[--r-xl] bg-[#2d2416] shadow-xl lg:min-h-[470px] lg:aspect-auto"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1, transition: SPRING }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <img
              src="/images/toque-chef-food.png"
              alt="A Toque cook and a freshly prepared meal"
              className="chef-food-focus absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Why choose Toque?
            </motion.span>
            <motion.h2 variants={fadeUp} className="max-w-2xl text-3xl font-bold leading-tight text-[#1C1C1C] md:text-5xl">
              Better food starts with the right cook.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              Every booking is backed by training, verification, and a support team that cares about what reaches your table.
            </motion.p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: '✦', title: 'Professional cooks', text: 'Trained chefs who bring skill and care into your kitchen.' },
                { icon: '⌁', title: 'Easy booking', text: 'Choose a service and share your preferences in minutes.' },
                { icon: '◷', title: 'Timely service', text: 'Reliable cooks who respect your schedule and routine.' },
                { icon: '♡', title: 'Prompt support', text: 'A real team is available when your plans change.' },
              ].map((feature, i) => (
                <motion.div key={feature.title} variants={fadeUp} className="border-t border-[#d8c49a] pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-[#C9A227]" aria-hidden="true">{feature.icon}</span>
                    <h3 className="font-semibold text-[#1C1C1C]">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="bg-[#f3eadf]">
        <HowItWorks steps={steps} />
      </section>

      {/* 4. STATS */}
      <section className="bg-[#1C1C1C] px-4 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8"
          >
            {[
              { label: 'Customers', value: '50,000+' },
              { label: 'Trained Cooks', value: '1,000+' },
              { label: 'Cities', value: '8' },
              { label: 'Rating', value: '4.8★' },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-3xl md:text-5xl font-bold text-[#C9A227] mb-2">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="bg-white px-4 py-14 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-10 text-center sm:mb-16"
          >
            <motion.span variants={fadeUp} className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-2 block">
              What our customers say
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#1C1C1C]">
              Real stories from real kitchens
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { author: 'Priya M., Delhi', text: 'The cook Toque assigned us has been cooking for our family for 3 months. Punctual, hygienic and makes excellent North Indian food.' },
              { author: 'Rahul S., Bangalore', text: 'Used the Chef for Party service for my wife\'s birthday. The chef was professional, food was delicious, and cleanup was spotless.' },
              { author: 'Ananya K., Gurgaon', text: 'Chefit arrived within 10 minutes. Perfect for days when I need a quick meal solution. Highly recommended!' }
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-[--r-lg] border-t-[3px] border-[#C9A227] bg-white p-6 shadow-md sm:p-8"
              >
                <div className="text-[#C9A227] mb-4 text-xl">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                <p className="font-semibold text-[#1C1C1C]">{t.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. APP DOWNLOAD */}
      <AppDownloadCTA />

      {/* 7. FOOD GALLERY */}
      <section className="overflow-hidden bg-[#f3eadf] py-14 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-2 block"
          >
            Our Food
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl md:text-5xl font-bold text-[#1C1C1C]"
          >
            Freshly cooked in your kitchen
          </motion.h2>
        </div>

        <div className="relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#f3eadf] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#f3eadf] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-16 no-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="w-[82vw] max-w-80 flex-shrink-0 aspect-[3/2] overflow-hidden rounded-[--r-lg] bg-gradient-to-br from-[#1C1C1C] to-[#2d2416] snap-center"
              >
                <img loading="lazy" decoding="async"
                  src={`/images/food-${num}.png`}
                  alt={`Fresh food example ${num}`}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to gradient if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
