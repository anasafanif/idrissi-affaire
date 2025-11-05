import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-pattern text-muted-foreground border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1 rtl:order-4">
            <h3 className="font-display text-lg font-bold">
              <span className="text-gradient">Idrissi Affairs</span>
            </h3>
            <p className="mt-2 text-sm">{t('footer.tagline')}</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Facebook size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Instagram size={20} /></a>
            </div>
          </div>
          {/* Services Links */}
          <div className="rtl:order-3">
            <h4 className="font-semibold text-foreground">{t('footer.services')}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services/business-financial" className="hover:text-foreground">{t('services.businessFinancial.title')}</Link></li>
              <li><Link to="/services/digital-growth" className="hover:text-foreground">{t('services.digitalGrowth.title')}</Link></li>
              <li><Link to="/services/international-mobility" className="hover:text-foreground">{t('services.internationalMobility.title')}</Link></li>
            </ul>
          </div>
          {/* Company Links */}
          <div className="rtl:order-2">
            <h4 className="font-semibold text-foreground">{t('footer.company')}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/our-story" className="hover:text-foreground">{t('nav.ourStory')}</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="rtl:order-1">
            <h4 className="font-semibold text-foreground">{t('footer.contact')}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:idrissiaffairs@gmail.com" className="hover:text-foreground">idrissiaffairs@gmail.com</a></li>
              <li><a href="tel:+212670368900" className="hover:text-foreground">{t('contact.details.phoneMobile')}</a></li>
              <li><a href="tel:+212530238338" className="hover:text-foreground">{t('contact.details.phoneLandline')}</a></li>
              <li>{t('contact.details.address')}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} Idrissi Affairs. {t('footer.rightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}