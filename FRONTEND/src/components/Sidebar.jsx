import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Users, LayoutGrid, Briefcase, FileText, Settings, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const menu = [
    { name: 'Home', icon: <Home size={18}/>, path: '/home' },
    { name: 'My Info', icon: <User size={18}/>, path: '/info' },
    { name: 'People', icon: <Users size={18}/>, path: '/people' },
    { name: 'Team Management', icon: <LayoutGrid size={18}/>, path: '/team' },
    { name: 'Project Setup', icon: <Briefcase size={18}/>, path: '/projects' },
    { name: 'Hiring', icon: <FileText size={18}/>, path: '/hiring' },
    { name: 'Report', icon: <FileText size={18}/>, path: '/reports' },
  ];

  return (
    <aside className="w-64 bg-[#3D3632] text-white flex flex-col h-screen sticky top-0">
      <div className="p-8 text-3xl font-bold tracking-tighter">CORE</div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center justify-between p-3 rounded-xl transition-all ${
                isActive ? 'bg-white text-[#3D3632]' : 'text-gray-300 hover:bg-[#4D4540]'
              }`
            }
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {item.name !== 'Home' && item.name !== 'Report' && <ChevronRight size={14} className="opacity-50" />}
          </NavLink>
        ))}
      </nav>

      <div className="p-6">
        {/* Subtle 1px border around the settings area */}
        <button className="flex items-center gap-3 w-full p-3 text-gray-300 hover:bg-[#4D4540] rounded-xl transition-all border border-white/10">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;