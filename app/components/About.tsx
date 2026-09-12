import { motion, type Transition } from 'framer-motion';
import { Link } from 'react-router';

const SPRING: Transition = { type: 'spring', mass: 1, stiffness: 300, damping: 30 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: SPRING } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function About() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO - Split layout */}
      <section className="flex flex-col md:flex-row min-h-[600px] h-screen bg-[#fff8ef]">
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.span variants={fadeUp} className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-4 block">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] mb-6 leading-tight">
              Bringing professional cooking back to the home
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-700 mb-10 leading-relaxed">
              Toque was born from a simple observation: urban Indians struggle to eat well every day. We built a platform that connects trained, verified cooking professionals with households that want fresh, home-cooked meals without the hassle of managing a full-time cook.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link 
                to="/join-chefkart" 
                className="inline-block bg-[#C9A227] text-black px-8 py-3 rounded-[--r-pill] font-semibold text-lg hover:bg-[#b58f20] transition-colors"
              >
                Join Toque
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[300px] md:min-h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/images/hero-about.jpg)',
              backgroundColor: '#1C1C1C'
            }}
          />
          <img loading="lazy" decoding="async" 
            src="/images/hero-about.jpg" 
            alt="About Toque" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* 2. MISSION */}
      <section className="py-24 px-4 bg-[#1C1C1C] text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.span variants={fadeUp} className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-6 block">
              Our Mission
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto italic">
              "To make professional home cooking accessible to every household in India."
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
              { icon: '🛡️', title: 'Trust', text: 'Every cook is background-verified before joining the Toque network' },
              { icon: '🏆', title: 'Quality', text: 'Regular training, hygiene audits and customer feedback loops' },
              { icon: '❤️', title: 'Care', text: 'We treat every household as our own and every cook as family' }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                whileHover={{ y: -6, scale: 1.015, transition: SPRING }} 
                className="bg-[#2d2416] p-8 rounded-[--r-md] text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#C9A227] mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CITIES */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-2 block">
              Where we operate
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-12">
              Serving 8 cities across India
            </motion.h2>

            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4">
              {['Delhi', 'Gurgaon', 'Noida', 'Greater Noida', 'Ghaziabad', 'Faridabad', 'Bengaluru', 'Mumbai'].map((city, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, backgroundColor: '#C9A227', color: '#1C1C1C' }}
                  className="px-6 py-3 border-2 border-[#C9A227] text-[#1C1C1C] rounded-[--r-pill] font-semibold text-lg cursor-default transition-colors duration-300"
                >
                  {city}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. NUMBERS */}
      <section className="py-20 px-4 bg-[#C9A227]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: 'Meals Served', value: '50,000+' },
              { label: 'Cooks', value: '1,000+' },
              { label: 'Cities', value: '8' },
              { label: 'Years', value: '3+' },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#1C1C1C] font-semibold opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="relative py-24 px-4 text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'linear-gradient(90deg, rgba(28,28,28,0.86), rgba(28,28,28,0.42)), url(/images/toque-chef-food.png)',
            backgroundColor: '#1C1C1C'
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div className="relative z-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Start cooking better today
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-[#C9A227] text-black px-10 py-4 rounded-[--r-pill] font-bold text-lg hover:bg-[#b58f20] transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
