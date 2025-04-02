
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div ref={heroRef} className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-12 w-72 h-72 bg-cube-blue/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-12 w-72 h-72 bg-cube-purple/20 rounded-full blur-[100px]" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Hero Content */}
        <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-border/40 bg-background/50 px-4 py-1.5 text-sm">
            <span className="bg-primary rounded-full w-3 h-3 mr-2"></span>
            <span className="text-foreground/80">Connecting Alumni & Students</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
              Bridging the Past,<br />
              Shaping the Future
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            LinkCube creates a powerful ecosystem where alumni and students connect, 
            contribute, and thrive together, enhancing your institution's legacy.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/auth/signup">
              <Button size="lg" className="group">
                Join the Network
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Hero Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
          {/* Main features displayed as animated cards */}
          <FeatureCard 
            icon={<Users className="h-8 w-8" />}
            title="Connect"
            description="Network with alumni and students in your field of interest"
            color="from-cube-blue/20 to-cube-blue/10"
            delay={0.1}
          />
          <FeatureCard 
            icon={<BookOpen className="h-8 w-8" />}
            title="Learn"
            description="Access exclusive resources and mentorship opportunities"
            color="from-cube-indigo/20 to-cube-indigo/10"
            delay={0.2}
          />
          <FeatureCard 
            icon={<Briefcase className="h-8 w-8" />}
            title="Grow"
            description="Discover job opportunities through AI-powered recommendations"
            color="from-cube-purple/20 to-cube-purple/10"
            delay={0.3}
          />
          <FeatureCard 
            icon={<GraduationCap className="h-8 w-8" />}
            title="Give Back"
            description="Contribute to your institution's growth and legacy"
            color="from-cube-pink/20 to-cube-pink/10"
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, color, delay }: FeatureCardProps) => {
  return (
    <div 
      className="glass-card p-6 hover-scale group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`rounded-full p-3 w-fit bg-gradient-to-br ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default Hero;
