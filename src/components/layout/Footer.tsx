import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="font-display text-lg font-bold text-foreground">Idrissi Affaire</h3>
            <p className="mt-2 text-sm">From Idea to Impact. We build your dream, from Kenitra to the world.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Facebook size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Instagram size={20} /></a>
            </div>
          </div>
          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services/business-financial" className="hover:text-foreground">Business & Financial</Link></li>
              <li><Link to="/services/digital-growth" className="hover:text-foreground">Digital Growth</Link></li>
              <li><Link to="/services/international-mobility" className="hover:text-foreground">International Mobility</Link></li>
            </ul>
          </div>
          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/our-story" className="hover:text-foreground">Our Story</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:contact@idrissi-affaire.ma" className="hover:text-foreground">contact@idrissi-affaire.ma</a></li>
              <li><a href="tel:+212000000000" className="hover:text-foreground">+212 [Placeholder]</a></li>
              <li>[Placeholder Address], Kenitra, Morocco</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} Idrissi Affaire. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}