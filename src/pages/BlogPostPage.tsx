import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { mockPosts } from '@/data/blog';
import { useTranslation } from 'react-i18next';

export function BlogPostPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  
  // Find the blog post by slug
  const post = mockPosts.find(p => p.slug === slug);
  
  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = mockPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <MainLayout>
      {/* Back Navigation */}
      <section className="bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <Button asChild variant="ghost" className="text-idrissi-gold hover:text-idrissi-gold/80">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('blogPost.backToBlog')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Tag className="h-4 w-4 text-idrissi-gold" />
                <span className="text-sm font-semibold text-idrissi-gold">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-idrissi-blue text-balance mb-6">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                {post.excerpt}
              </p>
              
              {/* Article Meta */}
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} {t('blogPost.readTime')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, '<br><br>') 
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted/30 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-idrissi-blue text-center mb-12">
                  {t('blog.relatedArticles')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full overflow-hidden group">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Tag className="h-3 w-3 text-idrissi-gold" />
                            <span className="text-xs font-semibold text-idrissi-gold">{relatedPost.category}</span>
                          </div>
                          <h3 className="font-semibold text-idrissi-blue mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          <Button asChild variant="link" className="p-0 text-idrissi-gold font-semibold">
                            <Link to={`/blog/${relatedPost.slug}`}>
                              {t('blog.readMore')}
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-idrissi-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                {t('blog.cta.title')}
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                {t('blog.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-idrissi-gold hover:bg-idrissi-gold/90 text-idrissi-blue">
                  <Link to="/contact">
                    {t('blog.cta.getStarted')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-idrissi-blue">
                  <Link to="/services">
                    {t('blog.cta.viewServices')}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
