import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Github, Instagram, Twitter } from 'lucide-react';

const Index = () => {
  // Smooth scroll to section
  useEffect(() => {
    const handleScrollTo = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const scrollToAttr = target.getAttribute('data-scroll-to');
      
      if (scrollToAttr) {
        e.preventDefault();
        const element = document.getElementById(scrollToAttr);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleScrollTo);
    return () => document.removeEventListener('click', handleScrollTo);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* CTA Section */}
        <section id="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cube-blue/20 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to connect with your academic community?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join LinkCube today and start building meaningful connections that will benefit your 
                academic journey and professional career.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/auth/signup">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/auth/login">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    I already have an account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border/40 bg-cube/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary/20 p-2 rounded-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L3 15H21L12 4Z" className="fill-primary" />
                    <path d="M12 15L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-xl font-bold">LinkCube</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                An innovative platform connecting alumni and students to create a thriving 
                educational ecosystem that enhances institutional legacy.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Platform</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
                <li><Link to="/connect" className="text-muted-foreground hover:text-primary transition-colors">Connect</Link></li>
                <li><Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Job Board</Link></li>
                <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LinkCube. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground">
                Designed with ♥ for educational institutions
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
