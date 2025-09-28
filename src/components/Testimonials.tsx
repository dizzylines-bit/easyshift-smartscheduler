import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    business: "Sunrise Café",
    role: "Owner",
    content: "EasyShift saved me 6 hours every week! No more late nights figuring out who can cover shifts. My staff loves how easy it is to swap shifts.",
    rating: 5,
    businessType: "Café"
  },
  {
    name: "Marcus Rodriguez", 
    business: "Elite Fitness Gym",
    role: "Manager",
    content: "The automatic scheduling is a game-changer. It considers everyone's availability and our busy/slow periods. Our trainers are happier and better rested.",
    rating: 5,
    businessType: "Gym"
  },
  {
    name: "Emma Thompson",
    business: "Bloom Salon & Spa",
    role: "Owner",
    content: "Before EasyShift, scheduling was my biggest headache. Now it handles everything automatically, and the payroll export saves our bookkeeper hours too.",
    rating: 5,
    businessType: "Salon"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Trusted by 500+ Businesses
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            See why small business owners love EasyShift
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from café owners, gym managers, salon owners, and retail shop managers who've transformed their scheduling.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-feature transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sage text-sage" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-card-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.business}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sage border-sage-lighter">
                      {testimonial.businessType}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-sage mb-2">500+</div>
            <div className="text-muted-foreground">Happy Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage mb-2">6hrs</div>
            <div className="text-muted-foreground">Avg. Time Saved/Week</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage mb-2">94%</div>
            <div className="text-muted-foreground">Staff Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage mb-2">$2.1K</div>
            <div className="text-muted-foreground">Avg. Monthly Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;