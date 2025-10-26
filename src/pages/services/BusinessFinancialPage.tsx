import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Building, Landmark, Briefcase, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const services = [
  {
    icon: Building,
    title: "Company Creation (Création d'Entreprise)",
    content: "From legal form selection to registration, we turn your idea into a legal entity, seamlessly. We handle all paperwork and legal hurdles, ensuring your business is compliant from day one."
  },
  {
    icon: Landmark,
    title: "Domiciliation",
    content: "Establish a professional address in Kenitra, a crucial first step for credibility and compliance. Our domiciliation services provide you with a prestigious business address without the overhead of a physical office."
  },
  {
    icon: Briefcase,
    title: "Accounting Management (Gestion Comptable)",
    content: "We are your financial partners, handling everything from bookkeeping and payroll to tax declarations and financial statements with precision. Stay focused on growth while we ensure your finances are in perfect order."
  },
  {
    icon: Lightbulb,
    title: "Strategic Consulting",
    content: "Leverage our expertise to optimize your financial strategy, improve profitability, and navigate the Moroccan business landscape. We provide actionable insights to help you make informed decisions and achieve long-term success."
  }
];
export function BusinessFinancialPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-display font-bold text-balance"
            >
              <span className="text-gradient">Building a Rock-Solid Foundation for Your Success.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground text-balance"
            >
              Every great enterprise starts with a solid legal and financial structure. We are the architects of that foundation, ensuring your business is built for stability, compliance, and growth from day one.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              <span className="text-gradient">Our Financial & Business Services</span>
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-lg hover:no-underline">
                      <div className="flex items-center gap-4">
                        <service.icon className="h-6 w-6 text-idrissi-gold" />
                        <span className="font-semibold text-foreground">{service.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pl-14">
                      {service.content}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Secure Your Financial Future</h2>
            <p className="mt-4 text-lg text-blue-200">Let's build a compliant and profitable business together.</p>
            <div className="mt-8">
              <Button asChild size="lg" className="btn-premium gradient-gold hover:shadow-gold text-idrissi-blue text-lg px-8 py-6 font-semibold">
                <Link to="/contact">Get Started Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}