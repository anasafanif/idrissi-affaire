import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Building, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
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
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold text-idrissi-blue text-balance"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              From Idea to Impact.
              <br />
              We Build Your Dream Project.
            </motion.h1>
            <motion.p 
              className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground text-balance"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Your end-to-end partner in Kenitra for business creation, digital growth, and international mobility.
            </motion.p>
            <motion.div 
              className="mt-8 flex justify-center"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Button asChild size="lg" className="bg-idrissi-blue hover:bg-idrissi-blue/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link to="/contact">Start Your Journey</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Overview Section */}
      <section className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-idrissi-blue mb-12">The Three Pillars of Your Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={0}>
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-idrissi-gold/10 p-4 rounded-full w-fit">
                      <Building className="h-8 w-8 text-idrissi-gold" />
                    </div>
                    <CardTitle className="mt-4 text-idrissi-blue">Launch Your Foundation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">We handle all the legal and financial complexities of starting your business, from company creation to meticulous accounting, so you can focus on your vision.</p>
                    <Button asChild variant="link" className="mt-4 text-idrissi-gold">
                      <Link to="/services/business-financial">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              {/* Pillar 2 */}
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={1}>
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-idrissi-gold/10 p-4 rounded-full w-fit">
                      <Rocket className="h-8 w-8 text-idrissi-gold" />
                    </div>
                    <CardTitle className="mt-4 text-idrissi-blue">Amplify Your Presence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Your vision deserves to be seen. Our digital experts build your brand, develop your website, and run targeted ad campaigns to connect you with your audience.</p>
                    <Button asChild variant="link" className="mt-4 text-idrissi-gold">
                      <Link to="/services/digital-growth">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              {/* Pillar 3 */}
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={2}>
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-idrissi-gold/10 p-4 rounded-full w-fit">
                      <Globe className="h-8 w-8 text-idrissi-gold" />
                    </div>
                    <CardTitle className="mt-4 text-idrissi-blue">Expand Your Horizons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Dream of taking your business global? We specialize in creating the perfect business case and handling all the logistics for successful visa applications.</p>
                    <Button asChild variant="link" className="mt-4 text-idrissi-gold">
                      <Link to="/services/international-mobility">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Approach Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-idrissi-blue">Your Vision, Our Mission</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A streamlined, integrated approach to building your success story.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-idrissi-blue text-white font-bold text-2xl">1</div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Strategy & Blueprint</h3>
                <p className="mt-2 text-muted-foreground">We map out the entire path to success, aligning every step with your ultimate goals.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-idrissi-blue text-white font-bold text-2xl">2</div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Creation & Execution</h3>
                <p className="mt-2 text-muted-foreground">Our integrated teams build your company, brand, and digital platforms with precision.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-idrissi-blue text-white font-bold text-2xl">3</div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Growth & Scaling</h3>
                <p className="mt-2 text-muted-foreground">We stay by your side, managing finances and optimizing marketing to help you reach new heights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="bg-idrissi-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Ready to turn your ambition into reality?</h2>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary" className="bg-white text-idrissi-blue hover:bg-gray-100 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link to="/contact">Schedule a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}