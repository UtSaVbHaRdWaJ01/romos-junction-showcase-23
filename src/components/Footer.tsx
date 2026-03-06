import { MapPin, Clock, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
            Romos <span className="text-gold">Junction</span>
          </h3>
          <p className="text-primary-foreground/60 font-body text-sm">
            Authentic North Indian vegetarian cuisine in the heart of Sikandra, Agra.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-primary-foreground/60 hover:text-gold transition-colors text-sm font-body"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-3">Contact Info</h4>
          <div className="space-y-3">
            <p className="flex items-start gap-2 text-primary-foreground/60 text-sm font-body">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              Sikandra, Agra, UP 282007
            </p>
            <p className="flex items-center gap-2 text-primary-foreground/60 text-sm font-body">
              <Clock size={16} />
              Open daily until 11 PM
            </p>
            <p className="flex items-center gap-2 text-primary-foreground/60 text-sm font-body">
              <Phone size={16} />
              Call for reservations
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-primary-foreground/40 text-sm font-body">
          © {new Date().getFullYear()} Romos Junction. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
