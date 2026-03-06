import { motion } from "framer-motion";
import { Star, MapPin, Utensils, Users, Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="North Indian food spread" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
          Romos Junction
          <span className="block text-gold text-2xl md:text-3xl lg:text-4xl mt-2 font-medium">
            Authentic North Indian Flavors
          </span>
        </h1>

        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-6 font-body">
          Serving delicious vegetarian food in Sikandra, Agra.
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={18} className="fill-gold text-gold" />
            ))}
            <Star size={18} className="text-gold/40" />
          </div>
          <span className="text-primary-foreground/90 font-body text-sm">
            4.0 Rating | 497 Reviews
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a
            href="#dishes"
            className="bg-gold-gradient text-gold-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-gold"
          >
            View Menu
          </a>
          <a
            href="#order"
            className="border-2 border-gold text-gold px-8 py-3 rounded-full font-bold text-lg hover:bg-gold hover:text-gold-foreground transition-all"
          >
            Order Online
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { icon: MapPin, label: "Outdoor Seating" },
            { icon: Utensils, label: "All You Can Eat" },
            { icon: Leaf, label: "Pure Vegetarian" },
            { icon: Users, label: "Family Friendly" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 px-4 py-1.5 rounded-full text-xs font-body"
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
