import { motion } from "framer-motion";
import { IndianRupee, Users, Flame, Clock } from "lucide-react";

const highlights = [
  { icon: IndianRupee, title: "Affordable Meals", desc: "₹1–200 per dish" },
  { icon: Users, title: "Family Friendly", desc: "Cozy dining for all" },
  { icon: Flame, title: "Authentic Flavors", desc: "Traditional recipes" },
  { icon: Clock, title: "Quick Service", desc: "Fast & fresh always" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Welcome to <span className="text-primary">Romos Junction</span>
        </h2>
        <div className="w-16 h-1 bg-gold-gradient mx-auto mb-6 rounded-full" />
        <p className="text-muted-foreground leading-relaxed font-body">
          Romos Junction is a popular vegetarian restaurant in Sikandra, Agra known for its
          flavorful North Indian dishes, delicious momos, and signature chaap recipes. With a
          friendly atmosphere and affordable pricing, it has become a favorite place for food
          lovers in the area.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-xl p-6 text-center shadow-warm border border-border hover:shadow-gold transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm font-body">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
