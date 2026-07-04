import React, { useState } from 'react';
import { Search, Bell, Menu, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherNavbar = ({ onMenuClick }) => {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  // Ánh xạ đường dẫn sang tiêu đề trang
  const getPageTitle = (path) => {
    if (path.includes('/dashboard')) return 'Tổng quan';
    if (path.includes('/schedule')) return 'Lịch giảng dạy';
    if (path.includes('/classes')) return 'Quản lý Lớp & Học viên';
    if (path.includes('/grading')) return 'Chấm bài & Nhập điểm';
    if (path.includes('/lessons')) return 'Kho bài giảng';
    if (path.includes('/exams')) return 'Ngân hàng đề';
    if (path.includes('/users')) return 'Quản lý Học viên & Phụ huynh';
    if (path.includes('/reports')) return 'Báo cáo Học tập';
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
            <span className="text-primary">{pageTitle}</span>
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            {pageTitle === 'Tổng quan' ? 'Chào buổi sáng, Thầy Hoàng! 👋' : pageTitle}
          </h1>
        </div>
      </div>
      
      {/* Cột phải: Search, Thông báo, Profile */}
      <div className="flex items-center gap-4 md:gap-8">
        
        {/* Thanh tìm kiếm */}
        <div className="relative hidden lg:block group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18}/>
          <input 
            type="text" 
            placeholder="Tìm kiếm nhanh..." 
            className="pl-13 pr-5 py-3.5 bg-gray-50 hover:bg-gray-100 border border-transparent rounded-full focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm w-72 font-medium"
          />
        </div>
        
        {/* Chuông thông báo */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2.5 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-full transition-all"
          >
            <Bell size={22}/>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
              >
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="font-bold text-gray-900">Thông báo</h3>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Mới</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  <div className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors flex gap-3 cursor-pointer">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-emerald-500"/></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Nộp bài tập</p>
                      <p className="text-xs text-gray-500 mt-1">Học sinh Nguyễn Văn An vừa nộp bài kiểm tra Đại số.</p>
                      <p className="text-[10px] font-bold text-gray-400 mt-2">10 phút trước</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-100 text-center">
                  <button className="text-xs font-bold text-gray-500 hover:text-primary">Xem tất cả</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Phân cách */}
        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

        {/* Profile Card */}
        <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="hidden md:flex flex-col items-end justify-center">
            <span className="font-bold text-gray-900 text-sm leading-tight">Hoàng Lê</span>
            <span className="text-[11px] font-bold text-gray-400">Giáo viên Toán</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-bold shadow-md ring-4 ring-primary/5">
            H
          </div>
        </div>

      </div>
    </header>
  );
};

export default TeacherNavbar;