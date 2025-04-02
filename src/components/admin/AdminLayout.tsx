import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu } from 'lucide-react';
import AdminSidebar from './AdminSidebar';

interface AdminLayoutProps {
  title?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <AdminSidebar />
      </div>
      
      <div className="flex flex-col flex-1 w-full">
        <header className="sticky top-0 z-40 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSidebar}
                className="mr-4 lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <Link to="/" className="flex items-center gap-2 mr-6">
                <div className="bg-gradient-to-r from-cube-blue to-cube-purple rounded-lg p-1.5">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cube-blue to-cube-purple">
                  LinkCube Admin
                </span>
              </Link>
              {title && <h1 className="text-xl font-bold">{title}</h1>}
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-full bg-cube-purple text-white flex items-center justify-center">
                A
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 p-6">
          <Outlet />
        </main>
        
        <footer className="p-4 text-center text-sm text-muted-foreground border-t">
          &copy; {new Date().getFullYear()} Student Alumni Portal Admin
        </footer>
      </div>
      
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AdminLayout; 