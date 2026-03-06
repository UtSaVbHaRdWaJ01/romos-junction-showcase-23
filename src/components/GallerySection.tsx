import { motion } from "framer-motion";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import dishTandooriMomos from "@/assets/dish-tandoori-momos.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishMomoPlatter from "@/assets/dish-momo-platter.jpg";

const images = [
  { src: galleryDining, alt: "Dining area", span: "md:col-span-2 md:row-span-2" },
  { src: dishTandooriMomos, alt: "Tandoori Momos", span: "" },
  { src: galleryOutdoor, alt: "Outdoor seating", span: "" },
  { src: dishBiryani, alt: "Veg Biryani", span: "" },
  { src: galleryKitchen, alt: "Kitchen action", span: "" },
  { src: dishMomoPlatter, alt: "Momo Platter", span: "md:col-span-2" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Our <span className="text-primary">Gallery</span>
        </h2>
        <div className="w-16 h-1 bg-gold-gradient mx-auto mb-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`overflow-hidden rounded-xl group ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover min-h-[180px] group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
