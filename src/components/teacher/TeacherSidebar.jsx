import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, Users, PenTool, 
  BookOpen, FileCheck, UserPlus, Settings, LogOut, GraduationCap, X
} from 'lucide-react';

const TeacherSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('edutech_role');
    navigate('/login');
  };

  // Nhóm các chức năng để giao diện gọn gàng và chuyên nghiệp hơn
  const MENU_GROUPS = [
    {
      group: "Bảng điều khiển",
      items: [
        { path: '/teacher/dashboard', icon: <LayoutDashboard size={20}/>, label: 'Tổng quan' },
      ]
    },
    {
      group: "Giảng dạy & Lớp học",
      items: [
        { path: '/teacher/schedule', icon: <Calendar size={20}/>, label: 'Lịch giảng dạy' },
        { path: '/teacher/classes', icon: <Users size={20}/>, label: 'Quản lý lớp & Học viên' },
        { path: '/teacher/grading', icon: <PenTool size={20}/>, label: 'Chấm bài & Nhập điểm' },
      ]
    },
    {
      group: "Học liệu & Thi cử",
      items: [
        { path: '/teacher/lessons', icon: <BookOpen size={20}/>, label: 'Kho bài giảng' },
        { path: '/teacher/exams', icon: <FileCheck size={20}/>, label: 'Quản lý ngân hàng đề' },
      ]
    },
    {
      group: "Cấp tài khoản",
      items: [
        { path: '/teacher/users', icon: <UserPlus size={20}/>, label: 'Quản lý HV/PH' },
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
          to="/teacher/dashboard" 
          onClick={() => setIsOpen?.(false)}
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          <GraduationCap size={32} /> EduTech 
          <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-1 rounded-md ml-1">
            Teacher
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
      <div className="flex-1 py-6 px-4 space-y-6 overflow-y-auto custom-scrollbar">
        {MENU_GROUPS.map((group, idx) => (
          <div key={idx}>
            <p className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
              {group.group}
            </p>
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
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {/* Thanh dọc bên trái khi Active */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"></div>
                    )}
                    <span className={`${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary transition-colors'}`}>
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div className="pt-6">
          <p className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Hệ thống</p>
          <Link to="/teacher/settings" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all">
            <Settings size={20} className="text-gray-400"/> Cài đặt tài khoản
          </Link>
        </div>
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={20}/> Đăng xuất
        </button>
      </div>
    </aside>
  );
};

export default TeacherSidebar;