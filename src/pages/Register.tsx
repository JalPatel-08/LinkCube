import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { GraduationCap } from "lucide-react";

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  degree: z.string().min(1, 'Please select a degree'),
  batchYear: z.string().min(1, 'Please select a batch year'),
  collegeName: z.string().min(1, 'Please select a college'),
  phoneNumber: z.string()
    .regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  linkedinProfile: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const Register = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 5 + i);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationForm) => {
    try {
      // Determine role based on batch year
      const role = parseInt(data.batchYear) <= currentYear ? 'Alumni' : 'Student';

      // Here you would typically make an API call to your backend
      console.log({ ...data, role });

      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
              <CardDescription>Join our alumni network and connect with your peers</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/admin/register">Sign up as Admin</Link>
            </Button>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  {...register('fullName')}
                  placeholder="Enter your full name"
                  className="w-full"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="Enter your email"
                  className="w-full"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                  placeholder="Create a password"
                  className="w-full"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="degree">Degree (Course)</Label>
                <Select onValueChange={(value) => setValue('degree', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="btech">B.Tech</SelectItem>
                    <SelectItem value="mtech">M.Tech</SelectItem>
                    <SelectItem value="bca">BCA</SelectItem>
                    <SelectItem value="mca">MCA</SelectItem>
                    <SelectItem value="bba">BBA</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                  </SelectContent>
                </Select>
                {errors.degree && (
                  <p className="text-sm text-red-500">{errors.degree.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="batchYear">Batch Year</Label>
                <Select onValueChange={(value) => setValue('batchYear', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your batch year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.batchYear && (
                  <p className="text-sm text-red-500">{errors.batchYear.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="collegeName">College Name</Label>
                <Select onValueChange={(value) => setValue('collegeName', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your college" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iit">IIT</SelectItem>
                    <SelectItem value="nit">NIT</SelectItem>
                    <SelectItem value="bits">BITS</SelectItem>
                    <SelectItem value="vit">VIT</SelectItem>
                    <SelectItem value="manipal">Manipal</SelectItem>
                  </SelectContent>
                </Select>
                {errors.collegeName && (
                  <p className="text-sm text-red-500">{errors.collegeName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  {...register('phoneNumber')}
                  placeholder="Enter your phone number"
                  className="w-full"
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedinProfile">LinkedIn Profile (Optional)</Label>
                <Input
                  id="linkedinProfile"
                  type="url"
                  {...register('linkedinProfile')}
                  placeholder="Enter your LinkedIn profile URL"
                  className="w-full"
                />
                {errors.linkedinProfile && (
                  <p className="text-sm text-red-500">{errors.linkedinProfile.message}</p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">
              Register
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Register; 