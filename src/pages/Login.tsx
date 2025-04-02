import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      // Here you would typically make an API call to authenticate the user
      console.log("Login data:", data);
      
      // For demo purposes, let's check if it's an admin email
      if (data.email.includes('admin')) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left side - Brand panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-cube relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cube-blue to-cube-purple opacity-90" />
        <div className="relative z-10 flex flex-col justify-center px-12">
          <div className="flex items-center gap-2 mb-12">
            <div className="bg-white rounded-lg p-1.5">
              <GraduationCap className="h-6 w-6 text-cube-purple" />
            </div>
            <span className="text-2xl font-bold text-white">LinkCube</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Welcome Back!</h1>
          <p className="text-lg text-white/90">Sign in to continue your journey with our community.</p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Sign In</h2>
            <Link to="/register" className="text-sm text-muted-foreground hover:text-primary">
              Create account
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full bg-blue-gradient">
              Sign In
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 