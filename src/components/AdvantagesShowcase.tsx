import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, TrendingUp, Shield, Zap, Heart } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Save 6+ Hours Every Week",
    description: "Stop spending entire evenings creating schedules. EasyShift builds optimal schedules in seconds.",
    benefit: "More time for family and growing your business",
    stat: "Average 6.3 hours saved weekly"
  },
  {
    icon: Users,
    title: "Happier, More Engaged Staff",
    description: "Employees love the flexibility to swap shifts and request time off through our simple mobile app.",
    benefit: "94% staff satisfaction rate",
    stat: "67% reduction in no-shows"
  },
  {
    icon: TrendingUp,
    title: "Reduce Labor Costs by 15%",
    description: "Smart scheduling prevents overstaffing during slow periods while ensuring coverage during busy times.",
    benefit: "Optimize staffing for maximum profitability",
    stat: "Average 15% reduction in labor costs"
  },
  {
    icon: Shield,
    title: "Never Miss Labor Law Compliance",
    description: "Automatic break scheduling, overtime alerts, and compliance tracking keep you legally protected.",
    benefit: "Peace of mind and avoid costly violations",
    stat: "100% compliance tracking"
  },
  {
    icon: Zap,
    title: "Instant Schedule Updates",
    description: "When someone calls in sick, get instant suggestions for replacements with automatic notifications.",
    benefit: "Handle emergencies in minutes, not hours",
    stat: "Average 3-minute emergency coverage"
  },
  {
    icon: Heart,
    title: "Reduce Manager Burnout",
    description: "Stop being the 24/7 schedule coordinator. EasyShift handles requests, swaps, and updates automatically.",
    benefit: "Focus on what you love about your business",
    stat: "89% reduction in scheduling stress"
  }
];

const AdvantagesShowcase = () => {
  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="default" className="mb-4 px-4 py-2 bg-sage">
            Why Small Businesses Choose EasyShift
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Turn your biggest scheduling headache into your competitive advantage
          </h2>
          <p className="text-xl text-muted-foreground">
            See how EasyShift transforms every aspect of workforce management for cafés, salons, gyms, and retail shops.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-feature transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-sage-lighter/20"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-sage text-primary-foreground rounded-xl">
                    <advantage.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">
                    {advantage.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-card-foreground font-medium">
                      {advantage.benefit}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs font-normal">
                    📊 {advantage.stat}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-3xl mx-auto shadow-feature bg-gradient-card border-sage-lighter/30">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Ready to experience these benefits?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Join 500+ small businesses that have transformed their scheduling with EasyShift. 
                See results in your first week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-sage text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-sage-light transition-colors shadow-soft text-lg">
                  Start Your Free Trial
                </button>
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium">✓ No credit card required</div>
                  <div>✓ Full setup support included</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesShowcase;