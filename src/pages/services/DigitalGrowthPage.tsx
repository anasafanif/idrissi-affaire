import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush, Code, Megaphone, Video, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const serviceKeys = ['branding', 'webDev', 'ads', 'video', 'ai'] as const;
const serviceIcons = [Paintbrush, Code, Megaphone, Video, Bot] as const;
export function DigitalGrowthPage() {
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
              <span className="text-gradient">{t('services.digitalGrowth.hero.title')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground text-balance"
            >
              {t('services.digitalGrowth.hero.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              <span className="text-gradient">{t('services.digitalGrowth.servicesTitle')}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceKeys.map((key, index) => {
                const Icon = serviceIcons[index];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full card-premium shadow-premium hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="bg-idrissi-gold/10 p-3 rounded-lg">
                            <Icon className="h-6 w-6 text-idrissi-gold" />
                          </div>
                          <CardTitle className="text-idrissi-blue">{t(`services.digitalGrowth.services.${key}.title`)}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{t(`services.digitalGrowth.services.${key}.description`)}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
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
              {t('services.digitalGrowth.cta.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-blue-200"
            >
              {t('services.digitalGrowth.cta.subtitle')}
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
                  {t('services.digitalGrowth.cta.button')}
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