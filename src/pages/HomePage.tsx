import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Building, Globe, ArrowRight, CheckCircle, Sparkles, TrendingUp, Users, Target } from 'lucide-react';
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
export function HomePage() {
  const { t } = useTranslation();
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-pattern overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-idrissi-blue/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-idrissi-gold/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-idrissi-blue/10 to-idrissi-gold/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
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
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-idrissi-blue text-balance leading-tight"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
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
            <motion.p 
              className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground text-balance leading-relaxed"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
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