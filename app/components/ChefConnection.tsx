import { motion, type Transition } from 'framer-motion';
import type { FormEvent } from 'react';

const SPRING: Transition = { type: 'spring', mass: 1, stiffness: 300, damping: 30 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: SPRING } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function ChefConnection() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for applying. We will contact you soon.');
  };

  return (
    <div className="min-h-screen pt-24 font-sans text-[#1C1C1C]">
      {/* 1. HERO */}
      <section className="bg-[#fff8ef] py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col items-start gap-6"
          >
            <motion.span variants={fadeUp} className="text-sm font-semibold tracking-wider uppercase text-[#C9A227]">
              👨🍳 Join Toque
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif text-[#1C1C1C] leading-tight">
              Cook with us.<br />Earn more.<br />Work on your terms.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-700 max-w-lg">
              Toque connects trained cooks with urban households across India. Join our network and build a stable income doing what you love — cooking.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 font-medium text-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-[#C9A227]">✓</span> Earn ₹15,000–₹40,000/month
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C9A227]">✓</span> Set your own hours
              </div>
            </motion.div>
            <motion.button
              variants={fadeUp}
              whileTap={{ scale: 0.96 }}
              onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-[9999px] shadow-lg hover:bg-[#d5a900] transition-colors"
            >
              Apply Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={SPRING}
            className="h-[500px] rounded-[32px] overflow-hidden bg-gradient-to-tr from-[#C9A227] to-[#1C1C1C] relative shadow-2xl"
          >
            <img loading="lazy" decoding="async" src="/images/hero-join.jpg" alt="Join Toque" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
          </motion.div>
        </div>
      </section>

      {/* 2. BENEFITS */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-[#C9A227] font-semibold tracking-wider uppercase text-sm">
              Why join Toque
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif mt-4">
              The best platform for professional cooks
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: '💰', title: 'Earn Well', desc: 'Take home ₹15,000–₹40,000/month depending on service type and hours' },
              { icon: '🕐', title: 'Flexible Schedule', desc: 'Work morning, evening or full-day. You set the schedule that suits you.' },
              { icon: '📚', title: 'Free Training', desc: 'We provide professional culinary training and hygiene certification at no cost' },
              { icon: '🛡️', title: 'Safe & Trusted', desc: 'We verify clients and ensure you always cook in safe, respectful environments' },
              { icon: '📈', title: 'Grow Faster', desc: 'Top-rated cooks get priority assignments and higher-value clients' },
              { icon: '🤝', title: 'Community', desc: 'Join a community of 1,000+ professional cooks across India' }
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#fff8ef] p-8 rounded-[24px]">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. HOW TO JOIN */}
      <section className="bg-[#f3eadf] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-[#C9A227] font-semibold tracking-wider uppercase text-sm">
              The process
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif mt-4">
              Join in 3 simple steps
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { num: '1️⃣', title: 'Apply Online', desc: 'Fill the form below with your details and cooking experience' },
              { num: '2️⃣', title: 'Training & Verification', desc: 'Attend our training (free) and complete background verification' },
              { num: '3️⃣', title: 'Start Earning', desc: 'Get your first assignment and start cooking for happy families' }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-[24px] shadow-sm text-center">
                <div className="text-5xl mb-6">{step.num}</div>
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. STATS */}
      <section className="bg-[#1C1C1C] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: 'Cooks in network', value: '1,000+' },
              { label: 'Monthly earnings', value: '₹15K–40K' },
              { label: 'Cities', value: '8' },
              { label: 'Cook rating', value: '4.8★' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-4xl font-serif text-[#C9A227] mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. APPLICATION FORM */}
      <section id="apply-form" className="bg-white py-24 px-4 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={SPRING}
            className="bg-[#fff8ef] p-10 rounded-[32px] shadow-lg"
          >
            <div className="mb-10 text-center">
              <span className="text-[#C9A227] font-semibold tracking-wider uppercase text-sm">Ready to join?</span>
              <h2 className="text-3xl font-serif mt-4 text-[#1C1C1C]">Apply to become a Toque cook</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input type="text" required className="field w-full p-4 rounded-[16px] border border-gray-200 outline-none focus:border-[#C9A227] bg-white" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Mobile Number</label>
                <input type="tel" required className="field w-full p-4 rounded-[16px] border border-gray-200 outline-none focus:border-[#C9A227] bg-white" placeholder="+91 00000 00000" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">City</label>
                <select required className="field w-full p-4 rounded-[16px] border border-gray-200 outline-none focus:border-[#C9A227] bg-white appearance-none">
                  <option value="">Select a city</option>
                  <option>Delhi</option>
                  <option>Gurgaon</option>
                  <option>Noida</option>
                  <option>Faridabad</option>
                  <option>Ghaziabad</option>
                  <option>Bengaluru</option>
                  <option>Mumbai</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Years of cooking experience</label>
                <select required className="field w-full p-4 rounded-[16px] border border-gray-200 outline-none focus:border-[#C9A227] bg-white appearance-none">
                  <option value="">Select experience</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Cuisine speciality</label>
                <input type="text" required className="field w-full p-4 rounded-[16px] border border-gray-200 outline-none focus:border-[#C9A227] bg-white" placeholder="e.g. North Indian, South Indian, Chinese" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Current occupation</label>
                <select required className="field w-full p-4 rounded-[16px] border border-gray-200 outline-none focus:border-[#C9A227] bg-white appearance-none">
                  <option value="">Select occupation</option>
                  <option>Unemployed</option>
                  <option>Working as home cook</option>
                  <option>Working at restaurant</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Brief introduction</label>
                <textarea rows={4} className="field w-full p-4 rounded-[16px] border border-gray-200 outline-none focus:border-[#C9A227] bg-white resize-none" placeholder="Tell us about yourself and your cooking experience"></textarea>
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full mt-4 py-4 bg-[#C9A227] text-white font-semibold rounded-[9999px] shadow-md hover:bg-[#d5a900] transition-colors"
              >
                Submit Application
              </motion.button>
              
              <p className="text-center text-sm text-gray-500 mt-2">
                Our team will contact you within 48 hours of receiving your application.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="bg-[#f3eadf] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-[#C9A227] font-semibold tracking-wider uppercase text-sm">
              Our Cook Community
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif mt-4 text-[#1C1C1C]">
              What our cooks say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                name: 'Ramesh K., Delhi',
                quote: '"I\'ve been cooking with Toque for 8 months. Steady income, good clients and the training they provided really improved my skills."'
              },
              {
                name: 'Sunita D., Gurgaon',
                quote: '"As a single mother, the flexible hours Toque offers changed my life. I work morning shifts and earn enough to support my family."'
              }
            ].map((test, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-10 rounded-[28px] shadow-sm">
                <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  {test.quote}
                </p>
                <div className="font-semibold text-[#1C1C1C]">{test.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
