import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  Briefcase, 
  User, 
  LogOut, 
  Search,
  FileText,
  Building2
} from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Briefcase, label: 'Internships', path: '/dashboard/internships' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
  ];

  if (user?.role === 'company') {
    navItems.push({ icon: Building2, label: 'My Listings', path: '/dashboard/listings' });
  } else {
    navItems.push({ icon: FileText, label: 'My Applications', path: '/dashboard/applications' });
  }

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Briefcase className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">InternAI</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                isActive 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-100">
        <div className="flex items-center gap-3 mb-6 px-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
            {user?.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">{user?.name}</p>
            <p className="text-xs text-slate-500 truncate capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
