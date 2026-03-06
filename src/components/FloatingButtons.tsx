import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/919999999999?text=Hi%20Romos%20Junction"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp Order"
    >
      <MessageCircle className="text-primary-foreground" size={26} />
    </a>
    <a
      href="tel:+919999999999"
      className="w-14 h-14 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Call Now"
    >
      <Phone className="text-gold-foreground" size={24} />
    </a>
  </div>
);

export default FloatingButtons;
