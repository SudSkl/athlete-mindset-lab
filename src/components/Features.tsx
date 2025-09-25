import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import filmStudyImage from "@/assets/film-study.jpg";
import mindsetImage from "@/assets/mindset.jpg";
import communityImage from "@/assets/community.jpg";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const FeatureCard = ({ title, description, image, features }: FeatureCardProps) => (
  <Card className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-smooth">
    <div className="relative h-64 overflow-hidden rounded-t-lg">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
    </div>
    <CardHeader>
      <CardTitle className="text-2xl text-foreground">{title}</CardTitle>
      <CardDescription className="text-muted-foreground text-base">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="impact" className="w-full">
        Learn More
      </Button>
    </CardContent>
  </Card>
);

export const Features = () => {
  const features = [
    {
      title: "Training Programs",
      description: "Elite-level training programs designed to push your physical limits and build unbreakable commitment.",
      image: communityImage,
      features: [
        "Sport-specific training protocols",
        "Progressive overload systems",
        "Recovery and injury prevention",
        "Performance tracking and analytics"
      ]
    },
    {
      title: "Mindset Tools",
      description: "Mental performance training that separates champions from competitors. Master your mind, master your game.",
      image: mindsetImage,
      features: [
        "Visualization techniques",
        "Pressure performance training",
        "Goal setting frameworks",
        "Mental resilience building"
      ]
    },
    {
      title: "Film Study",
      description: "Study like the pros. Analyze your performance, learn from the best, and develop game intelligence.",
      image: filmStudyImage,
      features: [
        "Video analysis tools",
        "Professional game breakdowns",
        "Technique improvement guides",
        "Strategic pattern recognition"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            COMPLETE <span className="gradient-text">ATHLETE</span> DEVELOPMENT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just train bodies. We build complete athletes through comprehensive development 
            that addresses every aspect of elite performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};