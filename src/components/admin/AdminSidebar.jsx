import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, CreditCard, 
  Settings, LogOut, ShieldAlert, X, Building2
} from 'lucide-react';

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('edutech_role');
    navigate('/login');
  };

  const MENU_GROUPS = [
    {
      group: "Hệ thống",
      items: [
        { path: '/admin/dashboard', icon: <LayoutDashboard size={20}/>, label: 'Bảng điều khiển' },
        { path: '/admin/users', icon: <Users size={20}/>, label: 'Quản lý Giáo viên' },
        { path: '/admin/blog', icon: <CreditCard size={20}/>, label: 'Quản lý Blog' },
      ]
    }
  ];

  return (
    <aside className={`
      w-[280px] bg-zinc-900 border-r border-zinc-800 flex flex-col fixed h-full z-40 
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      shadow-2xl
    `}>
      {/* Logo */}
      <div className="h-24 flex items-center justify-between px-8 border-b border-zinc-800">
        <Link 
          to="/admin/dashboard" 
          onClick={() => setIsOpen?.(false)}
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          <Building2 size={32} className="text-primary"/> EduTech 
          <span className="text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-500 px-2 py-1 rounded-md ml-1">
            Admin
          </span>
        </Link>
        <button 
          onClick={() => setIsOpen?.(false)} 
          className="lg:hidden p-2 text-zinc-400 hover:bg-zinc-800 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
        {MENU_GROUPS.map((group, index) => (
          <div key={index} className="mb-8">
            <h3 className="px-4 text-xs font-black text-zinc-500 uppercase tracking-wider mb-4">
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
                        ? 'bg-primary/10 text-primary' 
                        : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                    }`}
                  >
                    <div className={`${isActive ? 'text-primary' : 'text-zinc-500'}`}>
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
      <div className="p-4 border-t border-zinc-800">
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-zinc-400 hover:bg-zinc-800/50 transition-colors">
            <Settings size={20} className="text-zinc-500" />
            Cài đặt chung
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-rose-500 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut size={20} className="text-rose-500" />
            Đăng xuất
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
