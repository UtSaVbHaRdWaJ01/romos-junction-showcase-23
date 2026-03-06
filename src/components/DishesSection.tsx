import { motion } from "framer-motion";
import dishTandooriMomos from "@/assets/dish-tandoori-momos.jpg";
import dishButterChaap from "@/assets/dish-butter-chaap.jpg";
import dishSoyaChaap from "@/assets/dish-soya-chaap.jpg";
import dishMomoPlatter from "@/assets/dish-momo-platter.jpg";
import dishChangeziChaap from "@/assets/dish-changezi-chaap.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";

const dishes = [
  { img: dishTandooriMomos, name: "Tandoori Veg Momos", desc: "Crispy spiced momos grilled to perfection" },
  { img: dishButterChaap, name: "Butter Masala Chaap", desc: "Creamy butter masala with tender chaap" },
  { img: dishSoyaChaap, name: "Butter Masala Soya Chaap", desc: "Rich soya chaap in buttery gravy" },
  { img: dishMomoPlatter, name: "Momo Platter", desc: "Assorted momos with signature dipping sauces" },
  { img: dishChangeziChaap, name: "Changezi Chaap", desc: "Spicy aromatic chaap in dark rich gravy" },
  { img: dishBiryani, name: "Romos Special Veg Biryani", desc: "Fragrant basmati rice with garden vegetables" },
];

const DishesSection = () => (
  <section id="dishes" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Popular <span className="text-primary">Dishes</span>
        </h2>
        <div className="w-16 h-1 bg-gold-gradient mx-auto mb-4 rounded-full" />
        <p className="text-muted-foreground font-body">Our most loved dishes by food enthusiasts</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish, i) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group bg-card rounded-2xl overflow-hidden shadow-warm border border-border hover:shadow-gold transition-all duration-300"
          >
            <div className="overflow-hidden h-52">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{dish.name}</h3>
              <p className="text-muted-foreground text-sm font-body mb-3">{dish.desc}</p>
              <a
                href="#order"
                className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DishesSection;
