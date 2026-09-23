import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SPRING = { type: "spring", mass: 1, stiffness: 300, damping: 30 } as const;
const SPRING_GENTLE = { type: "spring", mass: 1, stiffness: 240, damping: 34 } as const;

export interface FAQEntry {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
}

function FAQItem(props: FAQEntry) {
  const [open, setOpen] = useState(false);
  const question = props.question ?? props.q ?? "";
  const answer = props.answer ?? props.a ?? "";

  return (
    <motion.div
      className="overflow-hidden cursor-pointer"
      style={{ borderRadius: "var(--r-lg)", border: "1px solid #eadfce", backgroundColor: "#fffaf3" }}
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
            key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { height: SPRING_GENTLE, opacity: { duration: 0.22 } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.2 }, opacity: { duration: 0.15 } } }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 leading-7 text-gray-600" style={{ marginTop: "-4px" }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface Props {
  faqs: FAQEntry[];
  title?: string;
}

export function ServiceFAQ({ faqs, title = "Frequently asked questions" }: Props) {
  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: SPRING } };

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: SPRING }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#C9A227" }}>FAQ</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faqs.map((f, idx) => (
            <motion.div key={f.question ?? f.q ?? idx} variants={fadeUp}>
              <FAQItem {...f} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceFAQ;
