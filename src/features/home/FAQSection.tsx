import { motion } from "framer-motion";
import { FAQS } from "@/lib/data";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-cyber">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl px-6 border-border/50 data-[state=open]:glow-border transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
