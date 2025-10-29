import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Lost Car Keys Stockport</h3>
            <p className="text-primary-foreground/80 text-sm">
              Professional 24/7 emergency car key replacement and locksmith service serving Stockport and Greater Manchester.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-services">
                  Services
                </a>
              </li>
              <li>
                <a href="#areas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-areas">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://carkeysinstockport.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-footer-main"
                >
                  Main Website
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+44 161 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@lostcarkeys-stockport.co.uk</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Stockport, Greater Manchester</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>
            &copy; {currentYear} Lost Car Keys Stockport. Part of{" "}
            <a 
              href="https://carkeysinstockport.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:underline"
            >
              CarKeysInStockport.co.uk
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
