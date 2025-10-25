import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { mockPosts } from '@/data/blog';
import { useTranslation } from 'react-i18next';

export function BlogPage() {
  const { t } = useTranslation();
  const categories = [t('blog.categories.all'), t('blog.categories.businessFinance'), t('blog.categories.digitalMarketing'), t('blog.categories.immigrationTips')];
  const [selectedCategory, setSelectedCategory] = useState(t('blog.categories.all'));
  const filteredPosts = useMemo(() => {
    if (selectedCategory === t('blog.categories.all')) {
      return mockPosts;
    }
    return mockPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory, t]);
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-display font-bold text-idrissi-blue text-balance"
            >
              {t('blog.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
            >
              {t('blog.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>
      {/* Blog Content Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            {/* Category Filters */}
            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-idrissi-blue hover:bg-idrissi-blue/90' : 'text-foreground'}
                >
                  {category}
                </Button>
              ))}
            </div>
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <Card className="h-full flex flex-col overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardHeader>
                      <p className="text-sm text-idrissi-gold font-semibold flex items-center gap-2"><Tag size={14} /> {post.category}</p>
                      <CardTitle className="text-idrissi-blue text-lg leading-tight">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="p-0 text-idrissi-gold font-semibold">
                        <Link to={`/blog/${post.slug}`}>
                          {t('blog.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
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