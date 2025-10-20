import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Building, Rocket, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
const services: { title: string; href: string; description: string, icon: React.ElementType }[] = [
  {
    title: 'Business & Financial',
    href: '/services/business-financial',
    description: 'Launch your venture with a rock-solid legal and financial foundation.',
    icon: Building,
  },
  {
    title: 'Digital Growth',
    href: '/services/digital-growth',
    description: 'Amplify your online presence with expert branding, web, and marketing.',
    icon: Rocket,
  },
  {
    title: 'International Mobility',
    href: '/services/international-mobility',
    description: 'Expand your horizons with strategic support for global opportunities.',
    icon: Globe,
  },
];
export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const NavLinks = ({ className }: { className?: string }) => (
    <>
      <NavLink to="/" className={({ isActive }) => cn(className, isActive && 'text-idrissi-gold font-semibold')}>Home</NavLink>
      <NavLink to="/our-story" className={({ isActive }) => cn(className, isActive && 'text-idrissi-gold font-semibold')}>Our Story</NavLink>
      <NavLink to="/blog" className={({ isActive }) => cn(className, isActive && 'text-idrissi-gold font-semibold')}>Blog</NavLink>
      <NavLink to="/contact" className={({ isActive }) => cn(className, isActive && 'text-idrissi-gold font-semibold')}>Contact Us</NavLink>
    </>
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-idrissi-blue">Idrissi Affaire</span>
          </Link>
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavLinks className={navigationMenuTriggerStyle()} />
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                                <service.icon className="h-5 w-5 text-idrissi-gold" />
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="ghost">
                <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild className="bg-idrissi-blue hover:bg-idrissi-blue/90 text-white">
                <Link to="/contact">Start Your Journey</Link>
            </Button>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-3/4">
                <div className="flex justify-between items-center mb-6">
                    <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <span className="font-display text-xl font-bold text-idrissi-blue">Idrissi Affaire</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col space-y-4 text-lg">
                  <NavLinks className="py-2 border-b" />
                  <div className="py-2 border-b">
                    <p className="font-semibold text-idrissi-blue">Services</p>
                    <div className="flex flex-col space-y-2 mt-2 pl-4">
                      {services.map((service) => (
                        <Link key={service.href} to={service.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-idrissi-gold">{service.title}</Link>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="bg-idrissi-blue hover:bg-idrissi-blue/90 text-white mt-6">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Start Your Journey</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}