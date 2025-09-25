export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-black">
              STUDENT OF THE <span className="gradient-text">SPORT</span>
            </h3>
            <p className="text-muted-foreground">
              Separating athletes who show up from those who become next-level.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-smooth">Training Programs</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Mindset Tools</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Film Study</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Community</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-smooth">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">YouTube</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Student of the Sport. Commitment over comfort.</p>
        </div>
      </div>
    </footer>
  );
};