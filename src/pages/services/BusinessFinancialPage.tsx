import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Building, Landmark, Briefcase, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const serviceKeys = ['companyCreation', 'domiciliation', 'accounting', 'consulting'] as const;
const serviceIcons = [Building, Landmark, Briefcase, Lightbulb] as const;
export function BusinessFinancialPage() {
  const { t } = useTranslation();
  
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
              <span className="text-gradient">{t('services.businessFinancial.hero.title')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground text-balance"
            >
              {t('services.businessFinancial.hero.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              <span className="text-gradient">{t('services.businessFinancial.servicesTitle')}</span>
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {serviceKeys.map((key, index) => {
                const Icon = serviceIcons[index];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index + 1}`} className="card-premium mb-4 rounded-lg border-0 shadow-premium">
                      <AccordionTrigger className="text-lg hover:no-underline px-6">
                        <div className="flex items-center gap-4">
                          <Icon className="h-6 w-6 text-idrissi-gold" />
                          <span className="font-semibold text-foreground">{t(`services.businessFinancial.services.${key}.title`)}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground pl-14 pr-6 pb-6">
                        {t(`services.businessFinancial.services.${key}.description`)}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display font-bold"
            >
              {t('services.businessFinancial.cta.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-blue-200"
            >
              {t('services.businessFinancial.cta.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Button asChild size="lg" className="btn-premium gradient-gold hover:shadow-gold text-idrissi-blue text-lg px-8 py-6 font-semibold">
                <Link to="/contact" className="flex items-center gap-2">
                  {t('services.businessFinancial.cta.button')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}