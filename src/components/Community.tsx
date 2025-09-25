import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Community = () => {
  const stats = [
    { number: "10K+", label: "Active Athletes" },
    { number: "95%", label: "Improvement Rate" },
    { number: "500+", label: "Training Hours" },
    { number: "24/7", label: "Community Support" }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            JOIN THE <span className="gradient-text">MOVEMENT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with athletes who refuse to settle. Share your journey, celebrate victories, 
            and push each other to reach new heights.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card-gradient border-border shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-black gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Community Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Accountability Partners</h3>
            <p className="text-muted-foreground text-lg">
              Get matched with athletes who share your commitment level. Track progress together, 
              challenge each other, and ensure nobody falls behind.
            </p>
            <ul className="space-y-3">
              {[
                "Weekly check-ins and progress sharing",
                "Goal-setting partnerships",
                "Mutual motivation and support",
                "Competitive challenges"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Elite Network</h3>
            <p className="text-muted-foreground text-lg">
              Connect with current and former professional athletes, coaches, and industry experts 
              who share their knowledge and experience.
            </p>
            <ul className="space-y-3">
              {[
                "Expert coaching sessions",
                "Pro athlete mentorship",
                "Industry insider knowledge",
                "Career guidance and networking"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-12 py-4">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};