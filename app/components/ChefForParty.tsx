import { motion, type Transition } from 'framer-motion';
import { HowItWorks } from '~/components/shared/HowItWorks';
import { ServiceFAQ } from '~/components/shared/ServiceFAQ';
import { AppDownloadCTA } from '~/components/shared/AppDownloadCTA';
import { Link } from 'react-router';

const SPRING: Transition = { type: 'spring', mass: 1, stiffness: 300, damping: 30 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: SPRING } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function ChefForParty() {
  return (
    <div className="w-full">
      {/* 1. HERO */}
      <section className="overflow-hidden bg-[#fff8ef] px-4 py-12 sm:py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-start space-y-6"
          >
            <motion.span variants={fadeUp} className="text-gold font-semibold uppercase tracking-wider text-sm flex items-center">
              <span className="text-xl mr-2">🎉</span> Chef for Party
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
              Make your next party unforgettable with a professional chef
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-700 max-w-lg">
              From intimate dinners to large celebrations — our multi-cuisine party chefs handle the cooking so you can enjoy the party.
            </motion.p>
            <motion.div variants={fadeUp} className="inline-block bg-white px-6 py-2 rounded-full border border-gray-200 shadow-sm font-semibold text-[#1C1C1C] mt-2">
              Starting <span className="text-gold">₹2,000/visit</span>
            </motion.div>
            <motion.div variants={fadeUp} className="pt-4">
              <Link to="/contact">
                <motion.button whileTap={{ scale: 0.96 }} className="btn-gold bg-gold text-white px-8 py-4 rounded-[--r-pill] text-lg font-bold hover:bg-[#d5a900] transition-colors shadow-lg">
                  Book a Party Chef
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={SPRING}
            viewport={{ once: true }}
            className="relative aspect-[16/10] overflow-hidden rounded-[--r-xl] bg-gradient-to-br from-[#1C1C1C] to-gray-800 shadow-2xl lg:h-[600px] lg:aspect-auto"
          >
            <img loading="lazy" decoding="async"
              src="/images/hero-party.png"
              alt="Party Chef cooking"
              className="chef-image-focus absolute inset-0 h-full w-full object-cover opacity-90"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURES */}
      <section className="bg-[#1C1C1C] py-12 px-4 md:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-6"
          >
            {[
              { icon: '👨‍🍳', text: 'Multi-cuisine professionals' },
              { icon: '📋', text: 'Customisable menu' },
              { icon: '⚡', text: 'Prompt service' },
              { icon: '🍹', text: 'Bartenders & waiters available' },
              { icon: '🌆', text: 'Available in Delhi NCR, Bengaluru & Mumbai' }
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center text-gray-300 font-medium bg-gray-800/50 px-6 py-3 rounded-full">
                <span className="text-xl mr-3">{f.icon}</span> {f.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PRICING FACTORS */}
      <section className="bg-white px-4 py-14 sm:py-24 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10 sm:mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Our affordable prices are based on</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C] mt-4 mb-4">4 Pricing Factors</h2>
            <p className="text-gray-500 font-medium">Minimum prices guaranteed*</p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
          >
            {[
              { icon: '👥', title: 'No. of People' },
              { icon: '🍝', title: 'No. of Dishes' },
              { icon: '🌶️', title: 'Cuisine Preference' },
              { icon: '📍', title: 'Location' }
            ].map((factor, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5, scale: 1.05 }} transition={SPRING} className="flex flex-col items-center justify-center rounded-[--r-xl] bg-[#fff8ef] p-5 text-center shadow-sm sm:p-8">
                <div className="text-4xl mb-4">{factor.icon}</div>
                <h3 className="font-bold text-[#1C1C1C] text-lg">{factor.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8">
            <Link to="/contact">
              <motion.button whileTap={{ scale: 0.96 }} className="px-10 py-4 rounded-[--r-pill] border-2 border-[#1C1C1C] text-[#1C1C1C] font-bold text-lg hover:bg-[#1C1C1C] hover:text-white transition-colors">
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <HowItWorks
        title="How it works"
        dark={true}
        steps={[
          { step: 1, icon: '📱', title: 'Register & select service', description: 'Register on Toque and choose Chef for Party' },
          { step: 2, icon: '💰', title: 'Specify needs & pay token', description: 'Share preferences and pay a small token amount to confirm' },
          { step: 3, icon: '🍽️', title: 'Select dishes & pay final', description: 'Choose from variety of cuisines and settle the final amount' },
          { step: 4, icon: '🎉', title: 'Chef arrives for your party', description: 'A perfect chef assigned and ready within 24 hours of booking' }
        ]}
      />

      {/* 5. GALLERY */}
      <section className="overflow-hidden bg-[#f3eadf] px-4 py-14 sm:py-24 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mt-4">Dishes from our party chefs</h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { src: '/images/party-spread.png', alt: 'Indian party feast set around a dining table' },
              { src: '/images/food-1.png', alt: 'Festive Indian dishes served for a party' },
              { src: '/images/food-2.png', alt: 'Paneer curry with rice and naan' },
              { src: '/images/food-3.png', alt: 'Colourful vegetable dishes served family-style' }
            ].map((image) => (
              <motion.div
                key={image.src}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                transition={SPRING}
                className="relative aspect-[3/2] overflow-hidden rounded-[--r-xl] bg-gradient-to-br from-[#1C1C1C] to-[#2d2416] shadow-md"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                  onError={(event) => { event.currentTarget.style.display = 'none'; }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="bg-white px-4 py-14 sm:py-24 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUp} className="bg-[#fff8ef] p-10 rounded-[--r-xl] shadow-sm">
              <div className="text-gold text-2xl mb-6">★★★★★</div>
              <p className="text-lg text-gray-700 italic mb-8">"Hired a Toque chef for my daughter's birthday party of 30 guests. The paneer tikka and dal makhani were absolutely superb. Will hire again!"</p>
              <div className="font-bold text-[#1C1C1C] text-lg">— Sarthak A., Delhi</div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#fff8ef] p-10 rounded-[--r-xl] shadow-sm">
              <div className="text-gold text-2xl mb-6">★★★★★</div>
              <p className="text-lg text-gray-700 italic mb-8">"The chef arrived on time, cooked a 5-course meal and even helped with plating. Our guests were thoroughly impressed."</p>
              <div className="font-bold text-[#1C1C1C] text-lg">— Meera V., Bangalore</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
      <ServiceFAQ
        faqs={[
          { q: 'How far in advance should I book?', a: 'We recommend booking at least 48 hours in advance, though we can accommodate last-minute requests based on availability.' },
          { q: 'Can the chef bring their own equipment?', a: 'Yes, chefs come with basic cooking equipment. Please inform us if you need anything specific.' },
          { q: 'Is alcohol included in the bartender service?', a: 'No, alcohol is to be arranged by the host. Our bartenders help with mixing, serving and bar setup.' },
          { q: 'What is the cancellation policy?', a: 'Cancellations more than 24 hours before the event are fully refunded. Token amounts are non-refundable within 24 hours.' },
          { q: 'Do you serve vegetarian-only parties?', a: 'Absolutely. Our chefs are experienced in both vegetarian and non-vegetarian menus.' }
        ]}
      />

      {/* 8. APP CTA */}
      <AppDownloadCTA />
    </div>
  );
}
