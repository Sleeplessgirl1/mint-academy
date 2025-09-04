import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <PopularCourses />
          <BenefitsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
