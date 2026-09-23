import { motion, type Transition } from 'framer-motion';
import { HowItWorks } from '~/components/shared/HowItWorks';
import { ServiceFAQ } from '~/components/shared/ServiceFAQ';
import { AppDownloadCTA } from '~/components/shared/AppDownloadCTA';
import { Link } from 'react-router';

const SPRING: Transition = { type: 'spring', mass: 1, stiffness: 300, damping: 30 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: SPRING } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function CookForMonth() {
  return (
    <div className="w-full">
      {/* 1. HERO */}
      <section className="bg-[#fff8ef] px-4 py-12 sm:py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-start space-y-6"
          >
            <motion.span variants={fadeUp} className="text-gold font-semibold uppercase tracking-wider text-sm">
              Cook for a Month
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
              A dedicated cook for your kitchen, every single day
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-700 max-w-lg">
              Get a background-verified, hygiene-certified cook assigned to your home for daily meals. No searching, no surprises — just consistent, fresh home-cooked food.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <motion.button whileTap={{ scale: 0.96 }} className="btn-gold bg-[#C9A227] text-white px-8 py-3 rounded-[--r-pill] font-medium hover:bg-[#d5a900] transition-colors">
                  Book Now
                </motion.button>
              </Link>
              <a href="#pricing">
                <motion.button whileTap={{ scale: 0.96 }} className="px-8 py-3 rounded-[--r-pill] font-medium border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors">
                  Learn More
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={SPRING}
            viewport={{ once: true }}
            className="relative aspect-[16/10] overflow-hidden rounded-[--r-xl] bg-gradient-to-br from-[#1C1C1C] to-gray-800 md:h-[500px] md:aspect-auto"
          >
            <img loading="lazy" decoding="async"
              src="/images/hero-month.png"
              alt="Cook preparing meal"
              className="w-full h-full object-cover opacity-90"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURES */}
      <section className="bg-white px-4 py-14 sm:py-24 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Why choose monthly</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mt-4">Everything included, nothing hidden</h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: '✅', title: 'Background Verified', desc: 'Every cook passes a police background check' },
              { icon: '🏥', title: 'Health Checked', desc: 'Medical fitness certificates required' },
              { icon: '🎓', title: 'Trained', desc: 'Trained in hygiene, Indian cuisines and kitchen safety' },
              { icon: '⏰', title: 'Flexible Timings', desc: 'Morning, afternoon or evening — you decide' },
              { icon: '🍱', title: 'Multi-cuisine', desc: 'North Indian, South Indian, Chinese, Continental and more' },
              { icon: '📞', title: '24/7 Support', desc: 'Dedicated support if you ever face an issue' }
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="rounded-[--r-lg] bg-[#fff8ef] p-6 sm:p-8">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PRICING */}
      <section id="pricing" className="bg-[#f3eadf] px-4 py-14 sm:py-24 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 text-center sm:mb-16"
          >
            <motion.span variants={fadeUp} className="text-gold font-semibold uppercase tracking-wider text-sm">Simple Pricing</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#1C1C1C] mt-2">Choose your plan</motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            {/* Basic */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={SPRING}
              className="bg-white p-8 rounded-[--r-xl] shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Basic</h3>
              <div className="text-3xl font-extrabold text-gold mb-2">₹8,000<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600 mb-8 font-medium">1 meal/day (breakfast or lunch or dinner)</p>
              <ul className="space-y-4 mb-8 flex-1">
                {['1 cook per day', 'Up to 4 family members', 'North Indian speciality', 'WhatsApp support'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-gold mr-3">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <motion.button whileTap={{ scale: 0.96 }} className="w-full py-3 rounded-[--r-pill] border-2 border-[#1C1C1C] text-[#1C1C1C] font-semibold hover:bg-gray-50 transition-colors">Select Basic</motion.button>
              </Link>
            </motion.div>

            {/* Standard */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={SPRING}
              className="bg-white p-8 rounded-[--r-xl] shadow-xl border-4 border-gold relative flex flex-col transform md:-translate-y-4"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Standard</h3>
              <div className="text-3xl font-extrabold text-gold mb-2">₹12,000<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600 mb-8 font-medium">2 meals/day</p>
              <ul className="space-y-4 mb-8 flex-1">
                {['1 cook per day', 'Up to 6 family members', 'Multi-cuisine', 'Priority support', 'Cuisine customisation'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-gold mr-3">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <motion.button whileTap={{ scale: 0.96 }} className="w-full py-3 rounded-[--r-pill] bg-gold text-white font-semibold hover:bg-[#d5a900] transition-colors">Select Standard</motion.button>
              </Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={SPRING}
              className="bg-white p-8 rounded-[--r-xl] shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Premium</h3>
              <div className="text-3xl font-extrabold text-gold mb-2">₹18,000<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600 mb-8 font-medium">3 meals/day</p>
              <ul className="space-y-4 mb-8 flex-1">
                {['1 dedicated cook', 'Unlimited family members', 'All cuisines', '24/7 VIP support', 'Grocery assistance'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-gold mr-3">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <motion.button whileTap={{ scale: 0.96 }} className="w-full py-3 rounded-[--r-pill] border-2 border-[#1C1C1C] text-[#1C1C1C] font-semibold hover:bg-gray-50 transition-colors">Select Premium</motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <HowItWorks
        title="How it works"
        steps={[
          { step: 1, icon: '📱', title: 'Register on App', description: 'Download the Toque app and create your profile' },
          { step: 2, icon: '📝', title: 'Share your needs', description: 'Tell us your cuisine preferences, meal times and family size' },
          { step: 3, icon: '👨‍🍳', title: 'Get matched', description: 'We assign the best cook for your requirements within 24 hours' },
          { step: 4, icon: '🍽️', title: 'Fresh meals daily', description: 'Your cook arrives every day and prepares fresh meals at home' }
        ]}
      />

      {/* 5. TESTIMONIALS */}
      <section className="bg-white px-4 py-14 sm:py-24 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C]">What our customers say</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUp} className="bg-[#fff8ef] p-8 rounded-[--r-xl] shadow-sm">
              <div className="text-gold text-2xl mb-4">★★★★★</div>
              <p className="text-lg text-gray-700 italic mb-6">"I've had the same cook for 4 months now. She makes amazing rajma chawal and parathas. My kids love her cooking!"</p>
              <div className="font-bold text-[#1C1C1C]">— Deepika R., Noida</div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#fff8ef] p-8 rounded-[--r-xl] shadow-sm">
              <div className="text-gold text-2xl mb-4">★★★★★</div>
              <p className="text-lg text-gray-700 italic mb-6">"The background verification gave us confidence. Our cook has been incredibly reliable and hygienic."</p>
              <div className="font-bold text-[#1C1C1C]">— Vikram P., Delhi</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. FAQ */}
      <ServiceFAQ
        faqs={[
          { q: 'How quickly can I get a cook?', a: 'We typically assign a cook within 24–48 hours of booking.' },
          { q: 'Can I change my cook if needed?', a: 'Yes, you can request a cook change anytime through the app or by contacting support.' },
          { q: 'What cuisines can the cook prepare?', a: 'Our cooks are trained in North Indian, South Indian, Chinese, Continental and more. You specify your preferences during onboarding.' },
          { q: 'Is there a minimum contract period?', a: 'We recommend starting with a 1-month plan. You can renew monthly.' },
          { q: 'What if the cook is absent?', a: 'We provide a replacement cook to ensure service continuity.' }
        ]}
      />

      {/* 7. APP CTA */}
      <AppDownloadCTA />
    </div>
  );
}
