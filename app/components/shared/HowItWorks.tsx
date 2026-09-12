import { motion } from "framer-motion";

const SPRING = { type: "spring", mass: 1, stiffness: 300, damping: 30 } as const;

export interface HowItWorksStep {
  number?: number;
  step?: number;
  emoji?: string;
  icon?: string;
  title: string;
  description: string;
}

interface Props {
  steps: HowItWorksStep[];
  title?: string;
  dark?: boolean;
}

export function HowItWorks({ steps, title = "How it works", dark = false }: Props) {
  return (
    <section
      className="px-6 py-20"
      style={{ backgroundColor: dark ? "#1c1c1c" : "#fff" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: SPRING }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#C9A227" }}>
            Process
          </p>
          <h2
            className="text-3xl font-semibold md:text-4xl"
            style={{ color: dark ? "#fff" : "#1c1c1c" }}
          >
            {title}
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step, i) => {
            const stepNum = step.number ?? step.step ?? (i + 1);
            const stepIcon = step.emoji ?? step.icon ?? "✨";

            return (
              <motion.div
                key={stepNum}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { ...SPRING, delay: i * 0.1 } }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -4, transition: SPRING }}
              >
                {/* Connector line — desktop */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px"
                    style={{ backgroundColor: dark ? "rgba(201,162,39,0.25)" : "rgba(201,162,39,0.3)" }}
                  />
                )}

                {/* Emoji + badge */}
                <div className="relative mb-5">
                  <div
                    className="w-20 h-20 flex items-center justify-center text-4xl"
                    style={{
                      borderRadius: "var(--r-lg)",
                      backgroundColor: dark ? "rgba(201,162,39,0.12)" : "rgba(201,162,39,0.1)",
                      border: "1.5px solid rgba(201,162,39,0.3)",
                    }}
                  >
                    {stepIcon}
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#1c1c1c]"
                    style={{ backgroundColor: "#C9A227" }}
                  >
                    {stepNum}
                  </div>
                </div>

                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: dark ? "#fff" : "#1c1c1c" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-6" style={{ color: dark ? "#9ca3af" : "#6b7280" }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
