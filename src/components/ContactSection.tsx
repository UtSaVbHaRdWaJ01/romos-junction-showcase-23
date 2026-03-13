import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Find <span className="text-primary">Us</span>
        </h2>
        <div className="w-16 h-1 bg-gold-gradient mx-auto mb-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground text-sm font-body">
                Shop Number 91 B, opp. V-Mart - Agra-Sikandra, Kargil Petrol Pump, Sector 9,
                Avas Vikas Colony, Sikandra, Agra, Uttar Pradesh 282007
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Opening Hours</h3>
              <p className="text-muted-foreground text-sm font-body">Open daily until 11 PM</p>
            </div>
          </div>


          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="https://maps.google.com/?q=Romos+Junction+Sikandra+Agra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <Navigation size={16} />
              Get Directions
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Reserve Table
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-warm h-[300px] lg:h-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.5!2d78.0!3d27.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEyJzAwLjAiTiA3OMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 300 }}
            allowFullScreen
            loading="lazy"
            title="Romos Junction Location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
