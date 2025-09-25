import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-athlete.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-hero mb-6">
            STUDENT OF THE{" "}
            <span className="gradient-text">SPORT</span>
          </h1>
          
          <p className="text-impact mb-8 text-muted-foreground max-w-2xl mx-auto">
            More than workouts. This is commitment. Blending training, mindset, film study, 
            and accountability to separate yourself from the pack.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button variant="athletic" size="lg" className="text-lg px-8 py-4">
              Watch Film Study
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground uppercase tracking-wider">
            The difference between showing up and becoming next-level
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-accent rounded-full opacity-60" />
      </div>
    </section>
  );
};