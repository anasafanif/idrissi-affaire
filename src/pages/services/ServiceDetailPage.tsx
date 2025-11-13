import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { serviceDetailsMap, type SupportedLocale } from '@/data/service-details';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Briefcase,
  Calculator,
  Wallet,
  Compass,
  Palette,
  Code2,
  Megaphone,
  Film,
  Bot,
  Globe2,
  Plane,
  LucideIcon,
  CheckCircle2
} from 'lucide-react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? serviceDetailsMap[slug] : undefined;
  const { i18n, t } = useTranslation();

  const languageCode = (i18n.language?.split('-')[0] ?? 'en') as SupportedLocale;
  const translation = detail?.translations[languageCode] ?? detail?.translations.en;
  const serviceMeta: Record<string, { icon: LucideIcon; gradient: string; accent: string; glow: string }> = {
    domiciliation: {
      icon: Building2,
      gradient: 'from-idrissi-blue/30 via-idrissi-blue/10 to-transparent',
      accent: 'text-idrissi-blue',
      glow: 'shadow-[0_30px_80px_-20px_rgba(0,17,34,0.45)]'
    },
    'company-creation': {
      icon: Briefcase,
      gradient: 'from-idrissi-gold/30 via-idrissi-gold/10 to-transparent',
      accent: 'text-idrissi-gold',
      glow: 'shadow-[0_30px_80px_-20px_rgba(150,111,51,0.45)]'
    },
    'accounting-tax': {
      icon: Calculator,
      gradient: 'from-sky-500/25 via-sky-500/10 to-transparent',
      accent: 'text-sky-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(14,165,233,0.45)]'
    },
    payroll: {
      icon: Wallet,
      gradient: 'from-emerald-500/25 via-emerald-500/10 to-transparent',
      accent: 'text-emerald-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(16,185,129,0.45)]'
    },
    'strategic-consulting': {
      icon: Compass,
      gradient: 'from-purple-500/25 via-purple-500/10 to-transparent',
      accent: 'text-purple-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(168,85,247,0.45)]'
    },
    'branding-design': {
      icon: Palette,
      gradient: 'from-rose-500/25 via-rose-500/10 to-transparent',
      accent: 'text-rose-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(244,114,182,0.45)]'
    },
    'web-development': {
      icon: Code2,
      gradient: 'from-indigo-500/25 via-indigo-500/10 to-transparent',
      accent: 'text-indigo-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(99,102,241,0.45)]'
    },
    'ads-social-media': {
      icon: Megaphone,
      gradient: 'from-orange-500/25 via-orange-500/10 to-transparent',
      accent: 'text-orange-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(249,115,22,0.45)]'
    },
    'video-production': {
      icon: Film,
      gradient: 'from-fuchsia-500/25 via-fuchsia-500/10 to-transparent',
      accent: 'text-fuchsia-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(217,70,239,0.45)]'
    },
    'ai-automation': {
      icon: Bot,
      gradient: 'from-cyan-500/25 via-cyan-500/10 to-transparent',
      accent: 'text-cyan-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(6,182,212,0.45)]'
    },
    'visa-mobility-programs': {
      icon: Plane,
      gradient: 'from-blue-500/25 via-blue-500/10 to-transparent',
      accent: 'text-blue-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(59,130,246,0.45)]'
    },
    'global-expansion': {
      icon: Globe2,
      gradient: 'from-lime-500/25 via-lime-500/10 to-transparent',
      accent: 'text-lime-500',
      glow: 'shadow-[0_30px_80px_-20px_rgba(132,204,22,0.45)]'
    }
  };
  const meta = (slug && serviceMeta[slug]) || {
    icon: Briefcase,
    gradient: 'from-idrissi-blue/30 via-idrissi-blue/10 to-transparent',
    accent: 'text-idrissi-blue',
    glow: 'shadow-[0_30px_80px_-20px_rgba(0,17,34,0.35)]'
  };
  const Icon = meta.icon;

  if (!detail || !translation) {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-gradient-to-br from-idrissi-blue/5 via-transparent to-idrissi-gold/5">
        <div className="pointer-events-none absolute -top-48 -right-48 h-96 w-96 rounded-full blur-3xl opacity-60 bg-gradient-to-br from-idrissi-blue/30 to-idrissi-gold/30" />
        <div className="pointer-events-none absolute -bottom-56 -left-40 h-96 w-96 rounded-full blur-3xl opacity-50 bg-gradient-to-tr from-idrissi-gold/30 to-idrissi-blue/20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            className={`text-center rounded-3xl bg-white/70 dark:bg-black/30 border border-white/30 backdrop-blur-xl px-6 md:px-12 py-14 space-y-6 ${meta.glow}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center">
              <motion.div
                className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${meta.gradient} p-4 border border-white/30 text-2xl ${meta.accent}`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon className="h-8 w-8" />
              </motion.div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 border border-white/30 px-4 py-2 text-sm font-semibold text-idrissi-blue shadow-sm">
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
          {translation.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl p-8 md:p-12 space-y-6 shadow-[0_25px_70px_-30px_rgba(6,24,44,0.35)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
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
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    >
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-idrissi-blue/20 to-idrissi-gold/20 text-idrissi-blue dark:text-idrissi-gold">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </motion.li>
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

