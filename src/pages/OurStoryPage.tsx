import { MainLayout } from '@/components/layout/MainLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import mounirImage from '@/assets/mounir.png';
import anasImage from '@/assets/anas.jpg';

const teamMembers = [
  {
    key: "moulayMounir",
    image: mounirImage,
    linkedin: "#",
    twitter: "#",
  },
  {
    key: "anas",
    image: anasImage,
    linkedin: "#",
    twitter: "#",
  },
  {
    key: "hajarBouamira",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    key: "hajarErahmani",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "#",
    twitter: "#",
  },
];
export function OurStoryPage() {
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
              <span className="text-gradient">{t('ourStory.title')}</span>
            </motion.h1>
          </div>
        </div>
      </section>
      {/* The Story Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none text-muted-foreground text-pretty"
            >
              <p>
                {t('ourStory.story.paragraph1')}
              </p>
              <p>
                {t('ourStory.story.paragraph2')}
              </p>
              <p>
                {t('ourStory.story.paragraph3')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              <span className="text-gradient">{t('ourStory.team.title')}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center card-premium shadow-premium">
                    <CardHeader className="items-center">
                      <Avatar className="h-24 w-24">
                        <AvatarImage 
                          src={member.image} 
                          alt={t(`ourStory.team.${member.key}.name`)}
                          className={member.key === "anas" ? "scale-125 object-cover object-center" : ""}
                        />
                        <AvatarFallback>{t(`ourStory.team.${member.key}.name`).charAt(0)}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-idrissi-blue pt-4">{t(`ourStory.team.${member.key}.name`)}</CardTitle>
                      <p className="text-sm text-idrissi-gold font-semibold">{t(`ourStory.team.${member.key}.position`)}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{t(`ourStory.team.${member.key}.description`)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}