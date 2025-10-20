import { MainLayout } from '@/components/layout/MainLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
const teamMembers = [
  {
    name: "Yassine Idrissi",
    title: "Founder & Lead Consultant",
    bio: "With a decade of experience in Moroccan business law and finance, Yassine founded Idrissi Affaire to provide a unified, seamless path to success for entrepreneurs.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Fatima Zahra",
    title: "Head of Digital Growth",
    bio: "A digital native with a passion for storytelling, Fatima leads our creative team to build compelling brands and high-performance websites that drive results.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026705e",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ahmed Bennani",
    title: "Lead Accountant",
    bio: "Ahmed is a master of numbers and compliance. He ensures our clients' financial health is robust, optimized, and perfectly aligned with Moroccan regulations.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026706f",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sofia Alaoui",
    title: "Immigration Specialist",
    bio: "Sofia navigates the complexities of international mobility, crafting compelling business cases that open doors to global opportunities for our clients.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026707g",
    linkedin: "#",
    twitter: "#",
  },
];
export function OurStoryPage() {
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
              More Than an Agency, We're Your Growth Partner.
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
                Idrissi Affaire was born in Kenitra from a simple observation: entrepreneurs waste too much time, energy, and money running between separate accountants, web developers, and consultants. The process was fragmented, inefficient, and often led to misaligned strategies.
              </p>
              <p>
                We saw a clear need for a unified, integrated approach. Our mission became to provide ambitious entrepreneurs with a single, trusted partner to guide them from the very spark of an idea to a thriving, successful, and globally-connected enterprise.
              </p>
              <p>
                We are more than just service providers; we are co-architects of your vision. We believe in building lasting relationships, offering strategic guidance that transcends simple transactions. Your success is our success, and we are committed to being by your side every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <h2 className="text-3xl font-display font-bold text-center text-idrissi-blue mb-12">Meet Our Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="items-center">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-idrissi-blue pt-4">{member.name}</CardTitle>
                      <p className="text-sm text-idrissi-gold font-semibold">{member.title}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                      <div className="flex justify-center space-x-3 mt-4">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-idrissi-blue"><Linkedin size={18} /></a>
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-idrissi-blue"><Twitter size={18} /></a>
                      </div>
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