import React, { useState } from 'react';
import { Bell, Menu, ChevronRight, UserCircle2, ShieldAlert, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AdminNavbar = ({ onMenuClick }) => {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  const getPageTitle = (path) => {
    if (path.includes('/dashboard')) return 'Bảng điều khiển';
    if (path.includes('/users')) return 'Quản lý Giáo viên';
    if (path.includes('/blog')) return 'Quản lý Blog';
    return 'Hệ thống';
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
            <span>LuTech</span>
            <ChevronRight size={14} className="text-gray-300" />
            <span className="text-amber-500">{pageTitle}</span>
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            {pageTitle === 'Bảng điều khiển' ? 'Hệ thống ổn định. Chào Admin! ⚡' : pageTitle}
          </h1>
        </div>
      </div>
      
      {/* Cột phải: Thông báo, Profile */}
      <div className="flex items-center gap-4 md:gap-8">
        
        {/* Status Indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          Máy chủ đang chạy
        </div>

        {/* Chuông thông báo */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2.5 text-gray-500 hover:text-amber-500 hover:bg-amber-50 rounded-full transition-all"
          >
            <Bell size={22}/>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white animate-pulse"></span>
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
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">2 Mới</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  <div className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors flex gap-3 cursor-pointer">
                    <div className="mt-1"><AlertCircle size={18} className="text-rose-500"/></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Cảnh báo tải Server</p>
                      <p className="text-xs text-gray-500 mt-1">CPU máy chủ #1 vượt ngưỡng 80% trong 5 phút qua.</p>
                      <p className="text-[10px] font-bold text-gray-400 mt-2">Vài giây trước</p>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 transition-colors flex gap-3 cursor-pointer">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-emerald-500"/></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Đăng ký mới</p>
                      <p className="text-xs text-gray-500 mt-1">Giáo viên Trần Văn A vừa được cấp tài khoản thành công.</p>
                      <p className="text-[10px] font-bold text-gray-400 mt-2">2 giờ trước</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-100 text-center">
                  <button className="text-xs font-bold text-gray-500 hover:text-amber-600">Xem tất cả</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Phân cách */}
        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

        {/* Profile Card */}
        <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 leading-tight">Super Admin</p>
            <p className="text-xs font-medium text-gray-500">System Manager</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white shadow-md ring-4 ring-gray-100 relative">
            <ShieldAlert size={20} className="text-amber-500" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default AdminNavbar;
