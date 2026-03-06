import { motion } from "framer-motion";

const OrderSection = () => (
  <section id="order" className="py-20 bg-primary-gradient">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Order <span className="text-gold">Online</span>
        </h2>
        <p className="text-primary-foreground/80 font-body mb-8 max-w-lg mx-auto">
          Order your favorite dishes online and enjoy Romos Junction at home.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[hsl(24,100%,50%)] text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Order on Swiggy
          </a>
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-destructive text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Order on Zomato
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OrderSection;
