import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Unlimited automated scheduling",
    "Mobile app for all employees", 
    "Shift swapping & time-off requests",
    "Text & email notifications",
    "Hours tracking & payroll export",
    "QuickBooks, Gusto, ADP integration",
    "24/7 customer support",
    "Labor law compliance tracking"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            One plan that scales with your business
          </h2>
          <p className="text-xl text-muted-foreground">
            No hidden fees, no per-employee charges. Just straightforward pricing that works for small businesses.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <Card className="shadow-hero border-sage-lighter/30 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-sage text-primary-foreground px-6 py-1 rounded-b-lg">
                <Star className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            </div>

            <CardHeader className="text-center pt-12">
              <CardTitle className="text-2xl text-card-foreground mb-2">
                EasyShift Pro
              </CardTitle>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-sage">$50</div>
                <div className="text-muted-foreground">per month</div>
                <Badge variant="outline" className="text-sage border-sage-lighter">
                  Up to 20 employees included
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <div className="space-y-4 mb-8">
                <div className="text-center text-sm text-muted-foreground">
                  <strong className="text-card-foreground">14-day free trial</strong> • No credit card required
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-card-foreground mb-4">Everything included:</h4>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-sage rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="hero" className="w-full text-lg py-6" size="lg">
                Start Your Free Trial
              </Button>
              
              <div className="text-center mt-4 space-y-2 text-sm text-muted-foreground">
                <div>Cancel anytime • No setup fees • No contracts</div>
                <div className="font-medium text-card-foreground">
                  Average ROI: $2,100/month in time and labor savings
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-sage">$1.67</div>
              <div className="text-muted-foreground">Cost per day</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-sage">42x</div>
              <div className="text-muted-foreground">Return on investment</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-sage">6 hrs</div>
              <div className="text-muted-foreground">Saved weekly</div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-cream/50 rounded-2xl">
            <p className="text-muted-foreground">
              <strong className="text-card-foreground">"EasyShift pays for itself in the first week."</strong> 
              <br />The time and stress savings alone are worth 10x the cost.
            </p>
            <div className="text-sm text-muted-foreground mt-2">
              - Sarah C., Café Owner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;