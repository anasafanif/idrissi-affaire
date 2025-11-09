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
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.svg';
export function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const services = [
    {
      title: t('services.businessFinancial.title'),
      href: '/services/business-financial',
      description: t('services.businessFinancial.description'),
      icon: Building,
    },
    {
      title: t('services.digitalGrowth.title'),
      href: '/services/digital-growth',
      description: t('services.digitalGrowth.description'),
      icon: Rocket,
    },
    {
      title: t('services.internationalMobility.title'),
      href: '/services/international-mobility',
      description: t('services.internationalMobility.description'),
      icon: Globe,
    },
  ];

  const NavLinks = ({ className }: { className?: string }) => (
    <>
      <NavLink to="/" className={({ isActive }) => cn(className, isActive && 'text-idrissi-gold font-semibold')}>{t('nav.home')}</NavLink>
      <NavLink to="/our-story" className={({ isActive }) => cn(className, isActive && 'text-idrissi-gold font-semibold')}>{t('nav.ourStory')}</NavLink>
      <NavLink to="/blog" className={({ isActive }) => cn(className, isActive && 'text-idrissi-gold font-semibold')}>{t('nav.blog')}</NavLink>
      <NavLink to="/contact" className={({ isActive }) => cn(className, isActive && 'text-idrissi-gold font-semibold')}>{t('nav.contact')}</NavLink>
    </>
  );
  return (
    <header className="sticky top-0 z-50 w-full nav-premium shadow-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 rtl:order-2">
            <img
              src={logo}
              alt="Idrissi Affairs"
              className="h-8 w-auto"
              width={128}
              height={32}
              loading="eager"
            />
            <span className="font-display text-xl font-bold text-idrissi-blue">Idrissi Affairs</span>
          </Link>
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex rtl:order-3">
            <NavigationMenuList>
              <NavLinks className={navigationMenuTriggerStyle()} />
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t('nav.services')}</NavigationMenuTrigger>
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
          <div className="hidden md:flex items-center space-x-2 rtl:order-1">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              asChild
              variant="ghost"
              className="text-idrissi-blue font-semibold hover:text-idrissi-gold transition-colors"
            >
              <Link to="/book-session">{t('nav.scheduleConsultation')}</Link>
            </Button>
            <Button
              asChild
              className="btn-premium gradient-primary hover:shadow-gold text-white font-semibold shadow-premium"
            >
              <Link to="/book-session">{t('nav.startJourney')}</Link>
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
                        <img
                          src={logo}
                          alt="Idrissi Affairs"
                          className="h-8 w-auto"
                          width={128}
                          height={32}
                          loading="eager"
                        />
                        <span className="font-display text-xl font-bold text-idrissi-blue">Idrissi Affairs</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                </div>
                <nav className="flex flex-col space-y-4 text-lg">
                  <NavLinks className="py-2 border-b" />
                  <div className="py-2 border-b">
                    <p className="font-semibold text-idrissi-blue">{t('nav.services')}</p>
                    <div className="flex flex-col space-y-2 mt-2 pl-4">
                      {services.map((service) => (
                        <Link key={service.href} to={service.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-idrissi-gold">{service.title}</Link>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="bg-idrissi-blue hover:bg-idrissi-blue/90 text-white mt-6 shadow-premium">
                    <Link to="/book-session" onClick={() => setMobileMenuOpen(false)}>{t('nav.startJourney')}</Link>
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