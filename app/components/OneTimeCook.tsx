import { motion, type Transition } from 'framer-motion';
import { HowItWorks } from '~/components/shared/HowItWorks';
import { ServiceFAQ } from '~/components/shared/ServiceFAQ';
import { AppDownloadCTA } from '~/components/shared/AppDownloadCTA';
import { Link } from 'react-router';

const SPRING: Transition = { type: 'spring', mass: 1, stiffness: 300, damping: 30 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: SPRING } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function OneTimeCook() {
  return (
    <div className="w-full">
      {/* 1. HERO */}
      <section className="relative flex flex-col items-center overflow-hidden bg-[#1C1C1C] px-4 py-14 text-center sm:py-24 md:px-8">
        {/* Subtle gold gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A227]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-6 sm:space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center px-4 py-2 bg-gold/20 text-gold rounded-full border border-gold/30">
              <span className="font-medium">⚡ Available in Gurugram</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Chefit: On-Demand Cook in 10 Min
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Get a trained, verified cook to your kitchen in Gurugram in minutes. Fresh home-cooked meals on demand — no more ordering in.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col items-center mt-4">
              <div className="text-3xl font-bold text-white mb-6">Starting price: <span className="text-gold">₹499</span></div>
              <Link to="/contact">
                <motion.button whileTap={{ scale: 0.96 }} className="btn-gold bg-gold text-[#1C1C1C] px-10 py-4 rounded-[--r-pill] text-lg font-bold hover:bg-[#d5a900] transition-colors shadow-lg shadow-gold/20">
                  Book Chefit Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...SPRING, delay: 0.3 }}
            className="relative mt-10 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-[--r-xl] sm:mt-16 md:h-[400px] md:aspect-auto"
          >
            <img loading="lazy" decoding="async" src="/images/toque-chefs-hero.png" alt="Chef preparing a meal for a one-time booking" className="w-full h-full object-cover mix-blend-overlay opacity-90" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE CHEFIT */}
      <section className="bg-white px-4 py-14 sm:py-24 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C]">Why Choose Chefit?</h2>
            <p className="text-lg text-gray-500 mt-4">Get a certified cook to prepare delicious food in your kitchen.</p>
          </div>
          
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: '🥗', title: 'Healthy & Hygienic Food', desc: 'Healthy food cooked in your kitchen with utmost hygiene.' },
              { icon: '🧂', title: 'Tailored to Your Taste', desc: 'Food prepared according to your taste and preferences.' },
              { icon: '👨‍🍳', title: 'Trained & Verified Cooks', desc: 'Professionally trained & background verified cooks for quality service.' },
              { icon: '⚡', title: 'Quick Service', desc: 'Assured cook arrival within minutes of booking.' }
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="flex flex-col items-center rounded-[--r-xl] border border-orange-100/50 bg-[#fff8ef] p-6 text-center shadow-sm sm:p-10">
                <div className="text-5xl mb-6 bg-white p-4 rounded-full shadow-sm">{f.icon}</div>
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-3">{f.title}</h3>
                <p className="text-gray-600 text-lg">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PRICING & SCOPE */}
      <section className="bg-[#f3eadf] px-4 py-14 sm:py-24 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C]">Clear & Simple Pricing</h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={SPRING}
            className="flex flex-col gap-8 rounded-[--r-xl] bg-white p-6 shadow-lg sm:p-10 md:flex-row md:gap-12 md:p-14"
          >
            <div className="flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-12">
              <h3 className="text-3xl font-bold text-[#1C1C1C] mb-2">Base Session</h3>
              <div className="text-5xl font-extrabold text-gold mb-4">₹499</div>
              <p className="text-gray-600 text-lg">Includes cooking for up to 4 people. Additional guests are ₹100 per person.</p>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start text-gray-700"><span className="text-gold mr-3">✓</span> Up to 4 dishes prepared (e.g., Dal, Sabzi, Roti, Rice)</li>
                <li className="flex items-start text-gray-700"><span className="text-gold mr-3">✓</span> 1.5 hours of cook time</li>
                <li className="flex items-start text-gray-700"><span className="text-gold mr-3">✓</span> Kitchen tidied post-cooking</li>
              </ul>
              <Link to="/contact" className="mt-4">
                <motion.button whileTap={{ scale: 0.96 }} className="w-full py-4 rounded-[--r-pill] bg-[#1C1C1C] text-white font-semibold text-lg hover:bg-black transition-colors">Book Now</motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FAQ */}
      <ServiceFAQ 
        faqs={[
          { q: 'What is Chefit?', a: 'Chefit is a one-time cooking service where our trusted and verified cooks prepare healthy meals in the comfort of your kitchen.' },
          { q: 'What is the price for Chefit?', a: 'The Chefit service starts at a base price of ₹499 (for up to 4 people), with an additional ₹100 charged per extra person. Multi-visit packs are also available.' },
          { q: 'Will Chefit provide groceries along with the service?', a: 'No, groceries are not provided. You need to manage the groceries yourself.' },
          { q: 'What can I expect my cook to do post cooking?', a: 'We do not provide full utensil cleaning. The cook will tidy the cooking area, transfer food to serving bowls, and place used utensils in the sink with water. The kitchen and countertops will be left clean.' },
          { q: 'How many dishes can the cook prepare?', a: 'The cook can prepare up to 4 dishes as part of the service, which includes a variety of daily home-cooked meals like Dal, Chawal, Roti, and Sabzi.' },
          { q: 'How long will a cook stay at my booking?', a: 'The cook will spend 1.5 hours for up to 4 people. For each additional 1-2 people, an extra 30 minutes is added.' },
          { q: 'Is Chefit suitable for parties or get-togethers?', a: 'Chefit specializes in daily home-cooked meals (up to 4 dishes). For house parties, we highly recommend our Chef for Party service which offers professional, multi-cuisine expertise.' }
        ]}
      />

      {/* 5. APP CTA */}
      <AppDownloadCTA />
    </div>
  );
}
