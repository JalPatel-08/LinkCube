import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { ChatBot } from '@/components/ui/ChatBot';

// Removing the duplicate Toaster since we already have it in App.tsx
export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <ChatBot />
    </div>
  );
}
