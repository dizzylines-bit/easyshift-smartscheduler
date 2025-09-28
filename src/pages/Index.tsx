import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AdvantagesShowcase from "@/components/AdvantagesShowcase";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <AdvantagesShowcase />
      <Testimonials />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
