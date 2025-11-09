import { MainLayout } from '@/components/layout/MainLayout';
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

const CAL_EMBED_URL = 'https://cal.com/embed/idrissi-affairs-eycuvs?theme=auto&primaryColor=001122&hide_landing_page_details=1';

export function BookSessionPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <section className="bg-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-3xl md:text-5xl font-display font-bold text-center text-gradient">
                {t('bookSession.title')}
              </h1>
              <p className="mt-6 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('bookSession.subtitle')}
              </p>
            </motion.div>

            <motion.div
              className="mt-12 bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-3xl shadow-premium border border-white/20 dark:border-white/10 p-4 sm:p-8"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
            >
              <p className="text-muted-foreground text-center mb-6">
                {t('bookSession.instructions')}
              </p>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-black">
                <iframe
                  src={CAL_EMBED_URL}
                  title="Idrissi Affairs Booking"
                  className="w-full min-h-[720px]"
                  style={{ border: '0px', background: 'transparent' }}
                  allow="camera; microphone; fullscreen; autoplay"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default BookSessionPage;

