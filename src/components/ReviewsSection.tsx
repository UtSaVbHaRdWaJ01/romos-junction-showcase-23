import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Pankaj Mathuria", text: "Good staff, good management, good services and super quality food.", stars: 5 },
  { name: "Sheel Kuls", text: "Food quality is good.", stars: 4 },
  { name: "Vikash Rawat", text: "Nice food though the seating could improve.", stars: 4 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Customer <span className="text-primary">Reviews</span>
        </h2>
        <div className="w-16 h-1 bg-gold-gradient mx-auto mb-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-6 border border-border shadow-warm"
          >
            <Quote className="text-gold mb-3" size={28} />
            <p className="text-foreground font-body mb-4 italic">"{r.text}"</p>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: r.stars }).map((_, j) => (
                <Star key={j} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="font-heading font-semibold text-foreground text-sm">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
