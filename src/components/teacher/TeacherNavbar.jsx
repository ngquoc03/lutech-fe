import React from 'react';
import { Search, Bell, Menu, CalendarDays } from 'lucide-react';

const TeacherNavbar = () => {
  // Lấy ngày hiện tại format đẹp mắt
  const today = new Date().toLocaleDateString('vi-VN', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="h-24 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10 w-full shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
      
      {/* Cột trái: Tên & Nút Menu Mobile */}
      <div className="flex items-center gap-4">
        {/* Nút Menu chỉ hiện trên điện thoại */}
        <button className="p-2 -ml-2 text-gray-600 lg:hidden hover:bg-gray-100 rounded-lg">
          <Menu size={24} />
        </button>
        
        <div className="flex flex-col justify-center">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-1">Chào buổi sáng, Thầy Hoàng! 👋</h1>
          <p className="text-sm text-gray-500 hidden md:flex items-center gap-1.5">
            <CalendarDays size={15} className="text-primary" />
            Hôm nay là {today}
          </p>
        </div>
      </div>
      
      {/* Cột phải: Search, Thông báo, Profile */}
      <div className="flex items-center gap-4 md:gap-8">
        
        {/* Thanh tìm kiếm */}
        <div className="relative hidden md:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18}/>
          <input 
            type="text" 
            placeholder="Tìm học sinh, lớp học, đề thi..." 
            className="pl-11 pr-5 py-3 bg-gray-50 hover:bg-gray-100 border border-transparent rounded-full focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm w-64 lg:w-[340px]"
          />
        </div>
        
        {/* Chuông thông báo */}
        <button className="relative p-2.5 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-full transition-all">
          <Bell size={22}/>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
        
        {/* Profile Card */}
        <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="hidden md:flex flex-col items-end justify-center">
            <span className="font-bold text-gray-900 text-sm">Hoàng Lê</span>
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">Giáo viên Toán - THPT</span>
          </div>
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-bold shadow-md ring-4 ring-gray-50">
            H
          </div>
        </div>

      </div>
    </header>
  );
};

export default TeacherNavbar;