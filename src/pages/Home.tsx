
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Briefcase, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [delay]);
  
  return (
    <div 
      ref={ref}
      className={cn(
        "glass-card p-6 rounded-2xl transition-all duration-700 ease-out",
        isVisible 
          ? "opacity-100 transform translate-y-0" 
          : "opacity-0 transform translate-y-10"
      )}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className={cn(
              "inline-flex items-center rounded-full border px-4 py-1.5 mb-8 text-sm font-medium transition-all",
              "bg-background/50 border-border shadow-sm",
              isLoaded ? "opacity-100" : "opacity-0 translate-y-5"
            )}>
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Connecting Alumni & Students
            </div>
            
            <h1 className={cn(
              "text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight",
              isLoaded ? "opacity-100" : "opacity-0 translate-y-5"
            )}>
              <span className="text-gradient">Bridging the Past,</span><br />
              <span className="text-gradient">Shaping the Future</span>
            </h1>
            
            <p className={cn(
              "text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl",
              isLoaded ? "opacity-100 delay-100" : "opacity-0 translate-y-5"
            )}>
              LinkCube creates a powerful ecosystem where alumni and students
              connect, contribute, and thrive together, enhancing your institution's
              legacy.
            </p>
            
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 w-full justify-center",
              isLoaded ? "opacity-100 delay-200" : "opacity-0 translate-y-5"
            )}>
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto font-medium group">
                  Join the Network
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LinkCube</h2>
            <p className="text-lg text-muted-foreground">
              A platform designed to strengthen the connection between institutions, alumni, and students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard 
              icon={Users} 
              title="Connect" 
              description="Network with alumni and students in your field of interest" 
              delay={100}
            />
            <FeatureCard 
              icon={BookOpen} 
              title="Learn" 
              description="Access exclusive resources and mentorship opportunities" 
              delay={200}
            />
            <FeatureCard 
              icon={Briefcase} 
              title="Grow" 
              description="Discover job opportunities through AI-powered recommendations" 
              delay={300}
            />
            <FeatureCard 
              icon={Gift} 
              title="Give Back" 
              description="Contribute to your institution's growth and legacy" 
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of alumni and students who are already part of the LinkCube community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto font-medium">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
