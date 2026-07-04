import React from 'react';
import { Search, Bell, Menu, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const StudentNavbar = ({ onMenuClick }) => {
  const location = useLocation();

  // Ánh xạ đường dẫn sang tiêu đề trang
  const getPageTitle = (path) => {
    if (path.includes('/dashboard')) return 'Bàn học của tôi';
    if (path.includes('/classes')) return 'Lớp học & Lịch';
    if (path.includes('/lessons')) return 'Kho học liệu';
    if (path.includes('/exams')) return 'Bài kiểm tra';
    if (path.includes('/grades')) return 'Kết quả & Nhận xét';
    return 'Trang chủ';
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="h-24 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30 w-full shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
      
      {/* Cột trái: Nút Menu Mobile & Breadcrumbs */}
      <div className="flex items-center gap-5">
        <button 
          onClick={onMenuClick} 
          className="p-2 -ml-2 text-gray-600 lg:hidden hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-1">
            <span>EduTech</span>
            <ChevronRight size={14} className="text-gray-300" />
            <span className="text-emerald-500">{pageTitle}</span>
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            {pageTitle === 'Bàn học của tôi' ? 'Chào buổi sáng, Nguyễn Văn An! 🚀' : pageTitle}
          </h1>
        </div>
      </div>
      
      {/* Cột phải: Search, Thông báo, Profile */}
      <div className="flex items-center gap-4 md:gap-8">
        
        {/* Thanh tìm kiếm */}
        <div className="relative hidden lg:block group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" size={18}/>
          <input 
            type="text" 
            placeholder="Tìm bài giảng, đề thi..." 
            className="pl-13 pr-5 py-3.5 bg-gray-50 hover:bg-gray-100 border border-transparent rounded-full focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm w-72 font-medium"
          />
        </div>
        
        {/* Chuông thông báo */}
        <button className="relative p-2.5 text-gray-500 hover:text-emerald-500 hover:bg-emerald-50 rounded-full transition-all">
          <Bell size={22}/>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
        
        {/* Phân cách */}
        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

        {/* Profile Card */}
        <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="hidden md:flex flex-col items-end justify-center">
            <span className="font-bold text-gray-900 text-sm leading-tight">Nguyễn Văn An</span>
            <span className="text-[11px] font-bold text-gray-400">Lớp 12A1</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-md ring-4 ring-emerald-50">
            A
          </div>
        </div>

      </div>
    </header>
  );
};

export default StudentNavbar;
