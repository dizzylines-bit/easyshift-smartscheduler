import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Phone } from "lucide-react";

const ScheduleDemo = () => {
  return (
    <section id="demo" className="py-16 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See EasyShift in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a personalized 15-minute demo and discover how EasyShift can transform your scheduling workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Personalized Walkthrough
                </h3>
                <p className="text-muted-foreground">
                  See how EasyShift works specifically for your business type and scheduling needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-soft-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-soft-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Quick & Easy
                </h3>
                <p className="text-muted-foreground">
                  Just 15 minutes to see everything - no lengthy presentations or pushy sales tactics.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cream/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Custom Setup Help
                </h3>
                <p className="text-muted-foreground">
                  We'll help you get started with your team and show you best practices from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Demo Form */}
          <Card className="bg-background shadow-feature">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-sage" />
                <span>Schedule Your Demo</span>
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll be in touch within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input id="email" type="email" placeholder="john@yourbusiness.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="cafe">Café</SelectItem>
                    <SelectItem value="salon">Salon/Spa</SelectItem>
                    <SelectItem value="retail">Retail Store</SelectItem>
                    <SelectItem value="gym">Gym/Fitness</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamSize">Team Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="How many employees?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-5">2-5 employees</SelectItem>
                    <SelectItem value="6-10">6-10 employees</SelectItem>
                    <SelectItem value="11-15">11-15 employees</SelectItem>
                    <SelectItem value="16-20">16-20 employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your biggest scheduling challenge (optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="e.g., Last-minute schedule changes, tracking time-off requests..."
                  rows={3}
                />
              </div>

              <Button className="w-full" size="lg" variant="hero">
                Schedule My Demo
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                No obligation. Cancel anytime during your free trial.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemo;