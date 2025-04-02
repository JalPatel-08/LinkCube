import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForms';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const { authType } = useParams<{ authType: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine if this is a login page
  const isLoginPage = location.pathname === '/login';
  
  // Validate auth type and redirect if invalid
  useEffect(() => {
    if (location.pathname === '/auth/signup') {
      navigate('/register', { replace: true });
      return;
    }
    if (!isLoginPage && authType && !['login', 'admin-login', 'admin-signup'].includes(authType)) {
      navigate('/login', { replace: true });
    }
  }, [authType, navigate, isLoginPage, location]);
  
  // Determine the form type and whether it's admin auth
  const isAdminAuth = authType === 'admin-login' || authType === 'admin-signup';
  const formType = 'login';
  
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left side - Brand panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-cube-blue/10 via-cube-purple/10 to-transparent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cube-blue/30 via-cube-purple/20 to-transparent opacity-70"></div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-cube-blue/30 rounded-full blur-[100px]"></div>
          <div className="absolute -top-32 -right-40 w-80 h-80 bg-cube-purple/30 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-24">
              <div className="bg-gradient-to-r from-cube-blue to-cube-purple rounded-lg p-1.5">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cube-blue to-cube-purple">
                LinkCube
              </span>
            </Link>
            
            <div className="max-w-md">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Welcome Back
              </h1>
              <p className="text-muted-foreground text-lg">
                Log in to connect with alumni and students, access resources, and explore opportunities.
              </p>
            </div>
          </div>
          
          {/* Social proof */}
          <div className="mt-auto">
            <p className="text-muted-foreground mb-4">Trusted by universities worldwide</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-12 bg-muted rounded-md flex items-center justify-center">
                <div className="w-28 h-6 bg-muted-foreground/20 rounded animate-pulse"></div>
              </div>
              <div className="h-12 bg-muted rounded-md flex items-center justify-center">
                <div className="w-28 h-6 bg-muted-foreground/20 rounded animate-pulse"></div>
              </div>
              <div className="h-12 bg-muted rounded-md flex items-center justify-center">
                <div className="w-28 h-6 bg-muted-foreground/20 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-cube-blue to-cube-purple rounded-lg p-1.5">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cube-blue to-cube-purple">
                LinkCube
              </span>
            </Link>
          </div>
          
          <AuthForm 
            type={formType} 
            adminAuth={isAdminAuth} 
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
