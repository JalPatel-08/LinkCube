import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, KeyRound, Mail, Lock, ArrowRight, Eye, EyeOff, Facebook, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

interface AuthFormProps {
  type: 'login' | 'signup';
  adminAuth?: boolean;
}

const AuthForm = ({ type, adminAuth = false }: AuthFormProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulating authentication process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (type === 'login') {
        toast.success('Login successful!');
        navigate('/dashboard', { replace: true });
      } else {
        toast.success('Account created successfully!');
        navigate('/login', { replace: true });
      }
    } catch (error) {
      toast.error('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const title = adminAuth 
    ? type === 'login' ? 'Admin Login' : 'Admin Signup' 
    : type === 'login' ? 'Log in to LinkCube' : 'Create your account';
  
  const subtitle = adminAuth
    ? 'Access the admin dashboard'
    : type === 'login' 
    ? 'Welcome back! Enter your details to continue.'
    : 'Join the LinkCube community and connect with alumni and students.';
  
  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <div className="flex items-center mb-8">
        <Link 
          to="/"
          className="text-muted-foreground hover:text-foreground mr-auto"
          replace
        >
          ← Back to home
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">{title}</h1>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {type === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            {type === 'login' && (
              <Link 
                to="/auth/reset-password" 
                className="text-xs text-primary hover:underline"
              >
                Forgot password?
              </Link>
            )}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              {passwordVisible ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        
        {type === 'login' && (
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              checked={rememberMe} 
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">Remember me</Label>
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              {type === 'login' ? 'Log in' : 'Sign up'} 
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-cube px-2 text-muted-foreground">or continue with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" type="button" className="w-full">
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>
        
        <div className="text-center text-sm mt-6">
          {type === 'login' ? (
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link 
                to="/register"
                className="text-primary hover:underline"
                replace
              >
                Sign up
              </Link>
            </p>
          ) : (
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link 
                to="/login"
                className="text-primary hover:underline"
                replace
              >
                Log in
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
