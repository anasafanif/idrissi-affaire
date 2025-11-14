import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Rocket, 
  Building, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Target,
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
  Plane,
  Globe2,
  LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};
type HeroHighlight = { label: string; slug: string };

const serviceIcons: Record<string, LucideIcon> = {
  domiciliation: Building2,
  'company-creation': Briefcase,
  'accounting-tax': Calculator,
  payroll: Wallet,
  'strategic-consulting': Compass,
  'branding-design': Palette,
  'web-development': Code2,
  'ads-social-media': Megaphone,
  'video-production': Film,
  'ai-automation': Bot,
  'visa-mobility-programs': Plane,
  'global-expansion': Globe2,
};

const serviceGradients: Record<string, string> = {
  domiciliation: 'from-idrissi-blue/20 via-idrissi-blue/10 to-transparent',
  'company-creation': 'from-idrissi-gold/20 via-idrissi-gold/10 to-transparent',
  'accounting-tax': 'from-sky-500/20 via-sky-500/10 to-transparent',
  payroll: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
  'strategic-consulting': 'from-purple-500/20 via-purple-500/10 to-transparent',
  'branding-design': 'from-rose-500/20 via-rose-500/10 to-transparent',
  'web-development': 'from-indigo-500/20 via-indigo-500/10 to-transparent',
  'ads-social-media': 'from-orange-500/20 via-orange-500/10 to-transparent',
  'video-production': 'from-fuchsia-500/20 via-fuchsia-500/10 to-transparent',
  'ai-automation': 'from-cyan-500/20 via-cyan-500/10 to-transparent',
  'visa-mobility-programs': 'from-blue-500/20 via-blue-500/10 to-transparent',
  'global-expansion': 'from-lime-500/20 via-lime-500/10 to-transparent',
};

const serviceAccents: Record<string, string> = {
  domiciliation: 'text-idrissi-blue',
  'company-creation': 'text-idrissi-gold',
  'accounting-tax': 'text-sky-500',
  payroll: 'text-emerald-500',
  'strategic-consulting': 'text-purple-500',
  'branding-design': 'text-rose-500',
  'web-development': 'text-indigo-500',
  'ads-social-media': 'text-orange-500',
  'video-production': 'text-fuchsia-500',
  'ai-automation': 'text-cyan-500',
  'visa-mobility-programs': 'text-blue-500',
  'global-expansion': 'text-lime-500',
};

export function HomePage() {
  const { t } = useTranslation();
  const heroHighlightsRaw = t('home.hero.highlights', { returnObjects: true }) as HeroHighlight[] | HeroHighlight | undefined;
  const heroHighlights = Array.isArray(heroHighlightsRaw)
    ? heroHighlightsRaw.filter((item): item is HeroHighlight => !!item && typeof item === 'object' && 'label' in item && 'slug' in item)
    : [];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Dynamic Animated Background - Mesh Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-idrissi-blue/10 via-purple-500/5 to-idrissi-gold/10" />
          
          {/* Animated mesh blobs */}
          <motion.div
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-idrissi-blue/20 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 150, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-idrissi-gold/20 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -120, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/15 to-cyan-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Animated grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 17, 34, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 17, 34, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
          
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-idrissi-gold/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5" style={{ pointerEvents: 'none' }}>
            <motion.path
              d="M 0 200 Q 400 100 800 200 T 1600 200"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 0 600 Q 400 500 800 600 T 1600 600"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#001122" stopOpacity="0" />
                <stop offset="50%" stopColor="#966F33" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#001122" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#001122" stopOpacity="0" />
                <stop offset="50%" stopColor="#001122" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#966F33" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40 text-center">
            {/* Floating Icons */}
            <motion.div
              className="absolute top-20 left-10 text-idrissi-gold/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>
            <motion.div
              className="absolute top-32 right-16 text-idrissi-blue/20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <TrendingUp className="h-6 w-6" />
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-20 text-idrissi-gold/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Target className="h-7 w-7" />
            </motion.div>

            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-idrissi-blue text-balance leading-tight"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t('home.hero.title')}
              </motion.span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-idrissi-blue to-idrissi-gold bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t('home.hero.subtitle')}
              </motion.span>
            </motion.h1>
            {heroHighlights.length > 0 && (
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                {heroHighlights.map(({ label, slug }, index) => {
                  const Icon = serviceIcons[slug] || Briefcase;
                  const gradient = serviceGradients[slug] || 'from-idrissi-blue/20 via-idrissi-blue/10 to-transparent';
                  const accent = serviceAccents[slug] || 'text-idrissi-blue';
                  
                  return (
                    <motion.div
                      key={slug}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.06,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileTap={{ scale: 0.95, rotate: [0, -2, 2, 0] }}
                      className="group"
                    >
                      <Link
                        to={`/services/${slug}`}
                        className="relative block h-full min-h-[160px] sm:min-h-[180px] rounded-3xl overflow-hidden cursor-pointer active:scale-95 transition-transform duration-200"
                      >
                        {/* Animated border gradient */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} p-[2px] opacity-60 group-active:opacity-100 transition-opacity duration-300`}>
                          <div className="w-full h-full rounded-3xl bg-white/95 dark:bg-black/60 backdrop-blur-2xl" />
                        </div>
                        
                        {/* Animated background gradient - always visible on mobile */}
                        <motion.div 
                          className={`absolute inset-[2px] rounded-3xl bg-gradient-to-br ${gradient} opacity-20 dark:opacity-15`}
                          animate={{
                            opacity: [0.2, 0.35, 0.2],
                          }}
                          transition={{
                            duration: 3 + index * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Animated border glow */}
                        <motion.div
                          className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 blur-xl`}
                          animate={{
                            opacity: [0, 0.4, 0],
                          }}
                          transition={{
                            duration: 2 + index * 0.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        />
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-5 h-full p-6 sm:p-7">
                          {/* Icon with unique animated container */}
                          <motion.div
                            className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-white/15 dark:to-white/5 p-4 sm:p-5 ${accent} shadow-lg`}
                            animate={{
                              y: [0, -4, 0],
                              rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                              duration: 4 + index * 0.3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2
                            }}
                            whileTap={{ scale: 1.2, rotate: 360 }}
                          >
                            {/* Icon glow */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-30 blur-md`} />
                            <Icon className="relative h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.5} />
                          </motion.div>
                          
                          {/* Label with animated underline */}
                          <div className="relative">
                            <span className="text-sm sm:text-base font-bold text-idrissi-blue dark:text-white leading-tight block">
                              {label}
                            </span>
                            <motion.div
                              className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${gradient} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: ["0%", "100%", "0%"] }}
                              transition={{
                                duration: 2 + index * 0.1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.15
                              }}
                            />
                          </div>
                          
                          {/* Decorative corner elements */}
                          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-idrissi-gold/40 dark:bg-idrissi-gold/60" />
                          <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-idrissi-blue/40 dark:bg-idrissi-blue/60" />
                        </div>
                        
                        {/* Animated shine sweep - works on touch */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
                          initial={{ x: "-100%" }}
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.2
                          }}
                        >
                          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
            <motion.p 
              className="mt-10 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground text-balance leading-relaxed"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 }}
            >
              {t('home.hero.description')}
            </motion.p>
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="btn-premium gradient-primary hover:shadow-gold text-white text-lg px-8 py-6 font-semibold shadow-premium group">
                  <Link to="/contact" className="flex items-center gap-2">
                    {t('home.hero.getStarted')}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border border-idrissi-blue/30 bg-white/80 text-idrissi-blue font-semibold shadow-sm hover:border-idrissi-blue hover:bg-idrissi-blue/10 hover:text-idrissi-blue text-lg px-8 py-6 transition-all duration-300 backdrop-blur"
                >
                  <Link to="/our-story">{t('home.hero.learnMore')}</Link>
              </Button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <motion.div 
                className="text-center card-premium p-8 rounded-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                >
                  +380
                </motion.div>
                <p className="text-muted-foreground font-medium">{t('stats.projects')}</p>
              </motion.div>
              <motion.div 
                className="text-center card-premium p-8 rounded-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  3
                </motion.div>
                <p className="text-muted-foreground font-medium">{t('stats.coreServices')}</p>
              </motion.div>
              <motion.div 
                className="text-center card-premium p-8 rounded-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                >
                  100%
                </motion.div>
                <p className="text-muted-foreground font-medium">{t('stats.clientSatisfaction')}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Overview Section */}
      <section className="relative bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,71,15,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-idrissi-blue mb-4">
                {t('home.services.pillars.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-idrissi-blue to-idrissi-gold mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Pillar 1 */}
              <motion.div 
                variants={fadeIn} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3 }} 
                custom={0}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center h-full group relative overflow-hidden border-0 card-premium shadow-premium">
                  <div className="absolute inset-0 bg-gradient-to-br from-idrissi-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <motion.div 
                      className="mx-auto bg-gradient-to-br from-idrissi-gold/20 to-idrissi-gold/10 p-6 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <Building className="h-10 w-10 text-idrissi-gold" />
                    </motion.div>
                    <CardTitle className="mt-6 text-idrissi-blue text-xl group-hover:text-idrissi-gold transition-colors duration-300">
                      {t('home.services.pillars.foundation.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t('home.services.pillars.foundation.description')}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild variant="link" className="text-idrissi-gold hover:text-idrissi-blue font-semibold group">
                        <Link to="/services/business-financial" className="flex items-center gap-2">
                          {t('home.services.pillars.foundation.ctaLabel')} 
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Pillar 2 */}
              <motion.div 
                variants={fadeIn} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3 }} 
                custom={1}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center h-full group relative overflow-hidden border-0 card-premium shadow-premium">
                  <div className="absolute inset-0 bg-gradient-to-br from-idrissi-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <motion.div 
                      className="mx-auto bg-gradient-to-br from-idrissi-blue/20 to-idrissi-blue/10 p-6 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: -5 }}
                    >
                      <Rocket className="h-10 w-10 text-idrissi-blue" />
                    </motion.div>
                    <CardTitle className="mt-6 text-idrissi-blue text-xl group-hover:text-idrissi-gold transition-colors duration-300">
                      {t('home.services.pillars.presence.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t('home.services.pillars.presence.description')}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild variant="link" className="text-idrissi-gold hover:text-idrissi-blue font-semibold group">
                        <Link to="/services/digital-growth" className="flex items-center gap-2">
                          {t('home.services.pillars.presence.ctaLabel')} 
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Pillar 3 */}
              <motion.div 
                variants={fadeIn} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3 }} 
                custom={2}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center h-full group relative overflow-hidden border-0 card-premium shadow-premium">
                  <div className="absolute inset-0 bg-gradient-to-br from-idrissi-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <motion.div 
                      className="mx-auto bg-gradient-to-br from-idrissi-gold/20 to-idrissi-gold/10 p-6 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <Globe className="h-10 w-10 text-idrissi-gold" />
                    </motion.div>
                    <CardTitle className="mt-6 text-idrissi-blue text-xl group-hover:text-idrissi-gold transition-colors duration-300">
                      {t('home.services.pillars.horizons.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t('home.services.pillars.horizons.description')}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild variant="link" className="text-idrissi-gold hover:text-idrissi-blue font-semibold group">
                        <Link to="/services/international-mobility" className="flex items-center gap-2">
                          {t('home.services.pillars.horizons.ctaLabel')} 
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Approach Section */}
      <section className="relative bg-pattern overflow-hidden">
        {/* Connecting Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-idrissi-blue/20 to-transparent hidden md:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                <span className="text-gradient">{t('home.approach.title')}</span>
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                {t('home.approach.subtitle')}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-idrissi-blue to-idrissi-gold mx-auto rounded-full mt-6"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <motion.div 
                className="flex flex-col items-center text-center group card-premium p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-idrissi-blue to-idrissi-blue/80 text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">1</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <motion.h3 
                  className="mt-6 text-xl font-semibold text-foreground group-hover:text-idrissi-blue transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {t('home.approach.step1.title')}
                </motion.h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-sm">
                  {t('home.approach.step1.description')}
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="flex flex-col items-center text-center group card-premium p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-idrissi-gold to-idrissi-gold/80 text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">2</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <motion.h3 
                  className="mt-6 text-xl font-semibold text-foreground group-hover:text-idrissi-gold transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {t('home.approach.step2.title')}
                </motion.h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-sm">
                  {t('home.approach.step2.description')}
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="flex flex-col items-center text-center group card-premium p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-idrissi-blue to-idrissi-blue/80 text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">3</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <motion.h3 
                  className="mt-6 text-xl font-semibold text-foreground group-hover:text-idrissi-blue transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {t('home.approach.step3.title')}
                </motion.h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-sm">
                  {t('home.approach.step3.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="relative gradient-hero text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 bg-idrissi-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-28 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t('home.cta.title')}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('home.cta.description')}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" className="btn-premium gradient-gold hover:shadow-gold text-idrissi-blue text-lg px-10 py-6 font-semibold group">
                    <Link to="/book-session" className="flex items-center gap-2">
                      {t('home.cta.button')}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white text-idrissi-blue font-semibold shadow-premium hover:bg-white/90 hover:text-idrissi-blue text-lg px-10 py-6 transition-all duration-300 border-none"
                  >
                    <Link to="/our-story" className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Learn More About Us
                    </Link>
              </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-idrissi-gold mb-2">+380</div>
                  <p className="text-blue-100 text-sm">{t('stats.projects')}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">3</div>
                  <p className="text-blue-100 text-sm">{t('stats.coreServices')}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-idrissi-gold mb-2">100%</div>
                  <p className="text-blue-100 text-sm">{t('stats.clientSatisfaction')}</p>
            </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}