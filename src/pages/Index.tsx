import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DishesSection from "@/components/DishesSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DishesSection />
    <MenuSection />
    <GallerySection />
    <ReviewsSection />
    <ContactSection />
    <OrderSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
