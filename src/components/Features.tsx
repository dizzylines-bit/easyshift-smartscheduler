import { Calendar, RefreshCw, MessageSquare, DollarSign, Smartphone } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Auto-generate weekly staff schedules",
    description: "Based on availability and business needs, EasyShift creates optimal schedules in seconds."
  },
  {
    icon: RefreshCw,
    title: "Simple shift swaps & time-off requests",
    description: "Employees can easily request changes, and managers approve with one click."
  },
  {
    icon: MessageSquare,
    title: "Instant text/email updates",
    description: "Everyone stays in the loop with automatic notifications when schedules change."
  },
  {
    icon: DollarSign,
    title: "Hours tracking & payroll export",
    description: "Seamlessly integrate with QuickBooks, Gusto, ADP, and other payroll systems."
  },
  {
    icon: Smartphone,
    title: "Mobile-friendly for employees",
    description: "Staff can check shifts, swap with coworkers, and request time off from anywhere."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Everything you need to manage your team's schedule
          </h2>
          <p className="text-xl text-muted-foreground">
            Stop the scheduling headaches. EasyShift handles the complexity so you can focus on what matters most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-feature transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sage text-primary-foreground rounded-xl mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-3xl p-12 shadow-feature max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Ready to simplify your scheduling?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join hundreds of small businesses that have saved hours every week with EasyShift.
            </p>
            <div className="space-y-4">
              <button className="bg-sage text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-sage-light transition-colors shadow-soft text-lg">
                Start Your Free Trial
              </button>
              <p className="text-sm text-muted-foreground">
                Pricing starts at $50/month after free trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;