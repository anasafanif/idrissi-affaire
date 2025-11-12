import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { serviceDetailsMap, type SupportedLocale } from '@/data/service-details';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? serviceDetailsMap[slug] : undefined;
  const { i18n, t } = useTranslation();

  const languageCode = (i18n.language?.split('-')[0] ?? 'en') as SupportedLocale;
  const translation = detail?.translations[languageCode] ?? detail?.translations.en;

  if (!detail || !translation) {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <section className="bg-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/10 border border-idrissi-blue/10 px-4 py-2 text-sm font-semibold text-idrissi-blue shadow-sm mb-4">
              {translation.title}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-balance text-idrissi-blue dark:text-white">
              {translation.headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {translation.intro}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-premium gradient-primary px-8 py-6 text-lg text-white shadow-premium">
                <Link to="/contact" className="flex items-center gap-2">
                  {t('serviceDetail.cta.speakWithExpert')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-idrissi-blue/30 text-idrissi-blue hover:bg-idrissi-blue/10 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                <Link to="/book-session" className="flex items-center gap-2">
                  {t('serviceDetail.cta.bookConsultation')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
          {translation.sections.map((section) => (
            <motion.div
              key={section.title}
              className="card-premium rounded-3xl border border-white/20 dark:border-white/10 shadow-premium p-8 md:p-12 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-idrissi-blue dark:text-white">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              )}
              {section.items && (
                <ul className="space-y-4 text-muted-foreground">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 text-base leading-relaxed before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-idrissi-gold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export default ServiceDetailPage;

