import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Banknote, Plane, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const processKeys = ['companyCreation', 'financial', 'logistics', 'filePrep'] as const;
const processIcons = [FileText, Banknote, Plane, ShieldCheck] as const;
export function InternationalMobilityPage() {
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
              <span className="text-gradient">{t('services.internationalMobility.hero.title')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground text-balance"
            >
              {t('services.internationalMobility.hero.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>
      {/* Our Process Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              <span className="text-gradient">{t('services.internationalMobility.processTitle')}</span>
            </h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {processKeys.map((key, index) => {
                const Icon = processIcons[index];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="card-premium shadow-premium p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-gradient-to-br from-idrissi-blue to-idrissi-blue/80 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl shadow-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Icon className="h-5 w-5 text-idrissi-gold" />
                            {t(`services.internationalMobility.process.${key}.title`)}
                          </h3>
                          <p className="mt-1 text-muted-foreground">{t(`services.internationalMobility.process.${key}.description`)}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Who Is This For? Section */}
      <section className="bg-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <Card className="overflow-hidden card-premium shadow-premium">
              <div className="md:flex">
                <div className="md:w-1/3 bg-idrissi-gold/10 flex items-center justify-center p-8">
                  <UserCheck className="h-24 w-24 text-idrissi-gold" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold font-display text-idrissi-blue">{t('services.internationalMobility.whoIsThisFor.title')}</h3>
                  <p className="mt-4 text-muted-foreground">
                    {t('services.internationalMobility.whoIsThisFor.description')}
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display font-bold"
            >
              {t('services.internationalMobility.cta.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-blue-200"
            >
              {t('services.internationalMobility.cta.subtitle')}
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
                  {t('services.internationalMobility.cta.button')}
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