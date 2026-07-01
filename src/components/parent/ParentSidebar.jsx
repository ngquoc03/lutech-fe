import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, LineChart, Calendar, 
  Settings, LogOut, GraduationCap, X
} from 'lucide-react';

const ParentSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('lutech_role');
    navigate('/login');
  };

  const MENU_GROUPS = [
    {
      group: "Giám sát học tập",
      items: [
        { path: '/parent/dashboard', icon: <LayoutDashboard size={20}/>, label: 'Tổng quan' },
        { path: '/parent/progress', icon: <LineChart size={20}/>, label: 'Tình hình học tập' },
        { path: '/parent/schedule', icon: <Calendar size={20}/>, label: 'Lịch học' },
      ]
    }
  ];

  return (
    <aside className={`
      w-[280px] bg-white border-r border-gray-100 flex flex-col fixed h-full z-40 
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      shadow-[4px_0_24px_rgba(0,0,0,0.02)]
    `}>
      {/* Logo */}
      <div className="h-24 flex items-center justify-between px-8 border-b border-gray-100">
        <Link 
          to="/parent/dashboard" 
          onClick={() => setIsOpen?.(false)}
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          <GraduationCap size={32} /> LuTech 
          <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md ml-1">
            Parent
          </span>
        </Link>
        <button 
          onClick={() => setIsOpen?.(false)} 
          className="lg:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
        {MENU_GROUPS.map((group, index) => (
          <div key={index} className="mb-8">
            <h3 className="px-4 text-xs font-black text-gray-400 uppercase tracking-wider mb-4">
              {group.group}
            </h3>
            <div className="space-y-1">
              {group.items.map(item => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <Link 
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen?.(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm
                      ${isActive 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className={`${isActive ? 'text-indigo-500' : 'text-gray-400'}`}>
                      {item.icon}
                    </div>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Cài đặt */}
      <div className="p-4 border-t border-gray-100">
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Settings size={20} className="text-gray-400" />
            Cài đặt tài khoản
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut size={20} className="text-rose-500" />
            Đăng xuất
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ParentSidebar;
