import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
