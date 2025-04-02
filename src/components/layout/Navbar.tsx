import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Events', path: '/events' },
    { name: 'Connect', path: '/connect' },
    { name: 'Job Board', path: '/jobs' },
    { name: 'Resources', path: '/resources' },
    { name: 'Hall of Fame', path: '/hall-of-fame' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-cube/80 backdrop-blur-lg shadow-md animate-slide-down" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 animate-fade-in"
        >
          <div className="bg-blue-gradient rounded-lg p-1.5">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-blue-gradient">
            LinkCube
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0",
                "after:bg-blue-gradient after:transition-all after:duration-300",
                "hover:after:w-full",
                location.pathname === item.path
                  ? "text-primary after:w-full"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons and Theme Toggle - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-cube-100 dark:hover:bg-cube-800"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-cube-700" />
            )}
          </Button>
          <Link to="/auth/login">
            <Button variant="ghost" className="hover:bg-cube-100 dark:hover:bg-cube-800">Log in</Button>
          </Link>
          <Link to="/auth/signup">
            <Button className="bg-blue-gradient hover:opacity-90 text-white">Sign up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-cube-100 dark:hover:bg-cube-800"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-cube-700" />
            )}
          </Button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="glass-button p-2 rounded-md hover:bg-cube-100 dark:hover:bg-cube-800"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-cube/95 backdrop-blur-lg border-t border-border/40",
          "transition-all duration-300 overflow-hidden",
          isMenuOpen 
            ? "max-h-[500px] border-opacity-100 animate-slide-down" 
            : "max-h-0 border-opacity-0 animate-slide-up"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "py-2 text-sm font-medium transition-colors duration-200",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Auth Buttons - Mobile */}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/40">
            <Link to="/auth/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full hover:bg-cube-100 dark:hover:bg-cube-800">Log in</Button>
            </Link>
            <Link to="/auth/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-blue-gradient hover:opacity-90 text-white">Sign up</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
