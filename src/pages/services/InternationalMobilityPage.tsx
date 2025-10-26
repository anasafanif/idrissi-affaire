import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Banknote, Plane, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const processSteps = [
  {
    icon: FileText,
    title: "Strategic Company Creation",
    description: "We establish a Moroccan company with the specific legal structure and business activity that Schengen and UK authorities look for as a sign of a legitimate enterprise."
  },
  {
    icon: Banknote,
    title: "Demonstrating Financial Legitimacy",
    description: "We guide you in setting up a business bank account and conducting genuine transactions to create a provable money flow, a key factor for visa officers."
  },
  {
    icon: Plane,
    title: "End-to-End Logistical Support",
    description: "We handle securing your visa appointment (RDV), arranging compliant travel insurance, and booking the necessary hotels and flights to support your application."
  },
  {
    icon: ShieldCheck,
    title: "File Preparation & Review",
    description: "We compile all documents into a professional, compelling file designed to tell a clear story of your business intentions and maximize your chances of approval."
  }
];
export function InternationalMobilityPage() {
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
              className="text-4xl md:text-5xl font-display font-bold text-idrissi-blue text-balance"
            >
              Your Gateway to Global Opportunity.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground text-balance"
            >
              Dreaming of expanding to Europe or the UK? A successful visa application is about presenting a compelling story of a legitimate business venture. We don't just fill out forms; we create the business foundation that makes your application undeniable.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Our Process Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl font-display font-bold text-center text-idrissi-blue mb-12">Our Unique Process</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-idrissi-blue text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <step.icon className="h-5 w-5 text-idrissi-gold" />
                        {step.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Who Is This For? Section */}
      <section className="bg-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-idrissi-gold/10 flex items-center justify-center p-8">
                  <UserCheck className="h-24 w-24 text-idrissi-gold" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold font-display text-idrissi-blue">Who Is This For?</h3>
                  <p className="mt-4 text-muted-foreground">
                    Our international mobility service is ideal for Moroccan entrepreneurs exploring European/UK markets, freelancers seeking an international presence, and anyone needing to demonstrate strong economic ties for a successful visa application.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Plan Your International Journey</h2>
            <p className="mt-4 text-lg text-blue-200">Take the first step towards global expansion with a partner you can trust.</p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary" className="bg-white text-idrissi-blue hover:bg-gray-100 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link to="/contact">Book a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}