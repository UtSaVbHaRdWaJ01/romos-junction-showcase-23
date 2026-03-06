import { motion } from "framer-motion";

const categories = [
  {
    title: "Starters",
    items: ["Veg Momos", "Tandoori Momos", "Fried Momos", "Kurkure Momos"],
  },
  {
    title: "Chaap Varieties",
    items: ["Butter Masala Chaap", "Changezi Chaap", "Afghani Chaap", "Malai Chaap"],
  },
  {
    title: "Main Course",
    items: ["Paneer Butter Masala", "Shahi Paneer", "Veg Biryani", "North Indian Thali"],
  },
  {
    title: "Snacks & Platters",
    items: ["Momo Platter", "Street Style Starters", "Tandoori Platter", "Combo Meals"],
  },
];

const MenuSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Our <span className="text-primary">Menu</span>
        </h2>
        <div className="w-16 h-1 bg-gold-gradient mx-auto mb-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border shadow-warm"
          >
            <h3 className="font-heading text-xl font-semibold text-primary mb-4 border-b border-border pb-2">
              {cat.title}
            </h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground font-body text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#order"
          className="bg-gold-gradient text-gold-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-gold"
        >
          View Full Menu
        </a>
      </div>
    </div>
  </section>
);

export default MenuSection;
