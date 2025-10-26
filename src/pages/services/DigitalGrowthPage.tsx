import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush, Code, Megaphone, Video, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const services = [
  {
    icon: Paintbrush,
    title: "Branding & Design",
    description: "We create your visual identity—logo, colors, and messaging—that tells your story and resonates with your audience."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "We build fast, beautiful, and user-friendly websites that serve as your 24/7 digital storefront and primary conversion tool."
  },
  {
    icon: Megaphone,
    title: "Ads & SMMA",
    description: "We craft and execute targeted advertising campaigns on social media and Google to generate leads and build your community."
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "We produce professional videos that showcase your products, services, and story, engaging your audience on a deeper level."
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "We implement intelligent solutions to automate repetitive tasks, allowing you to work smarter, not harder, and focus on growth."
  }
];
export function DigitalGrowthPage() {
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
              className="text-4xl md:text-5xl font-display font-bold text-idrissi-blue text-balance"
            >
              Bringing Your Vision to Life in the Digital World.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground text-balance"
            >
              A brilliant idea needs a powerful voice. Our digital division crafts your online identity and builds the platforms that will connect you with your customers and drive growth.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl font-display font-bold text-center text-idrissi-blue mb-12">Our Digital Growth Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-idrissi-gold/10 p-3 rounded-lg">
                          <service.icon className="h-6 w-6 text-idrissi-gold" />
                        </div>
                        <CardTitle className="text-idrissi-blue">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Build Your Digital Presence</h2>
            <p className="mt-4 text-lg text-blue-200">Connect with your audience and accelerate your growth online.</p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary" className="bg-white text-idrissi-blue hover:bg-gray-100 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}