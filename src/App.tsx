import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";

// Layout
import MainLayout from "@/components/layout/MainLayout";
import AdminLayout from "@/components/layout/AdminLayout";

// Pages
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AdminRegister from "@/pages/admin/Register";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Events from "@/pages/Events";
import Connect from "@/pages/Connect";
import Jobs from "@/pages/Jobs";
import Resources from "@/pages/Resources";
import HallOfFame from "@/pages/HallOfFame";
import AdminDashboard from "@/pages/admin/Dashboard";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/auth/login" element={<Navigate to="/login" replace />} />
          <Route path="/auth/signup" element={<Navigate to="/register" replace />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<div>Users Management</div>} />
            <Route path="events" element={<div>Events Management</div>} />
            <Route path="jobs" element={<div>Jobs Management</div>} />
            <Route path="resources" element={<div>Resources Management</div>} />
          </Route>

          {/* Main Layout Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Index />} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="events" element={<Events />} />
            <Route path="connect" element={<Connect />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="resources" element={<Resources />} />
            <Route path="hall-of-fame" element={<HallOfFame />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
