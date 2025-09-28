import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AdvantagesShowcase from "@/components/AdvantagesShowcase";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import ScheduleDemo from "@/components/ScheduleDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="advantages">
        <AdvantagesShowcase />
      </div>
      <Testimonials />
      <div id="pricing">
        <PricingSection />
      </div>
      <ScheduleDemo />
      <Footer />
    </div>
  );
};

export default Index;
