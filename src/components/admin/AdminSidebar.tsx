import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  BarChart2, 
  MessageSquare, 
  Settings,
  DollarSign
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white border-r">
      <div className="flex-1 py-6">
        <nav className="flex-1 px-2 space-y-1">
          <NavLink 
            to="/admin" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-cube-purple/10 text-cube-purple' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
            end
          >
            <Home size={18} />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink 
            to="/admin/users" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-cube-purple/10 text-cube-purple' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <Users size={18} />
            <span>User Management</span>
          </NavLink>
          
          <NavLink 
            to="/admin/content" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-cube-purple/10 text-cube-purple' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <FileText size={18} />
            <span>Content Management</span>
          </NavLink>
          
          <NavLink 
            to="/admin/events" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-cube-purple/10 text-cube-purple' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <Calendar size={18} />
            <span>Event Management</span>
          </NavLink>
          
          <NavLink 
            to="/admin/analytics" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-cube-purple/10 text-cube-purple' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <BarChart2 size={18} />
            <span>Analytics</span>
          </NavLink>
          
          <NavLink 
            to="/admin/donations" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-cube-purple/10 text-cube-purple' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <DollarSign size={18} />
            <span>Donations</span>
          </NavLink>
          
          <NavLink 
            to="/admin/support" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-cube-purple/10 text-cube-purple' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <MessageSquare size={18} />
            <span>Support</span>
          </NavLink>
          
          <NavLink 
            to="/admin/settings" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-cube-purple/10 text-cube-purple' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>
      
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>v1.0.0</span>
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar; 