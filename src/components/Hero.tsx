import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-sage-lighter/20 bg-[radial-gradient(ellipse_at_top,transparent_20%,hsl(var(--sage-lighter)))]" />
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Smarter Scheduling.{" "}
                <span className="text-cream">Happier Staff.</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                EasyShift automatically builds and updates your team's schedule so you can spend less time juggling shifts and more time running your business.
              </p>
            </div>
            
            {/* CTA Section */}
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-12 py-6 h-auto"
              >
                Get Started Free
              </Button>
              <p className="text-primary-foreground/80 text-sm">
                No credit card required • 14-day free trial
              </p>
            </div>
            
            {/* Trust Signal */}
            <div className="pt-8">
              <p className="text-primary-foreground/70 text-sm mb-4">Trusted by small businesses everywhere</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="text-cream text-xl">★</div>
                ))}
                <span className="ml-2 text-primary-foreground/80 text-sm">4.9/5 from 500+ reviews</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Small business team collaborating on scheduling in a modern café"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-cream text-sage px-6 py-3 rounded-2xl shadow-soft font-medium">
              📅 Auto-scheduled
            </div>
            <div className="absolute -bottom-4 -left-4 bg-soft-blue text-background px-6 py-3 rounded-2xl shadow-soft font-medium">
              😊 Happy team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;