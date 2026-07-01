import React, { useState } from 'react';
import { Bell, Menu, ChevronRight, UserCircle2, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ParentNavbar = ({ onMenuClick }) => {
  const location = useLocation();
  const [activeChild, setActiveChild] = useState('an');

  const CHILDREN = [
    { id: 'an', name: 'Nguyễn Văn An', class: '12A1', avatar: 'A' },
    { id: 'binh', name: 'Nguyễn Thị Bình', class: '9A4', avatar: 'B' }
  ];

  const currentChild = CHILDREN.find(c => c.id === activeChild);

  const getPageTitle = (path) => {
    if (path.includes('/dashboard')) return 'Tổng quan';
    if (path.includes('/progress')) return 'Tình hình học tập';
    if (path.includes('/schedule')) return 'Lịch học';
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
            <span>LuTech</span>
            <ChevronRight size={14} className="text-gray-300" />
            <span className="text-indigo-500">{pageTitle}</span>
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            {pageTitle === 'Tổng quan' ? 'Chào Anh/Chị Nguyễn Tuấn! 👋' : pageTitle}
          </h1>
        </div>
      </div>
      
      {/* Cột phải: Child Selector, Thông báo, Profile */}
      <div className="flex items-center gap-4 md:gap-8">
        
        {/* Child Selector */}
        <div className="relative group">
          <div className="flex items-center gap-3 p-2 pr-4 bg-indigo-50 border border-indigo-100 rounded-full cursor-pointer hover:bg-indigo-100 transition-colors">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
              {currentChild.avatar}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-indigo-900 leading-tight">{currentChild.name}</p>
              <p className="text-[10px] font-black uppercase text-indigo-500">Lớp {currentChild.class}</p>
            </div>
            <ChevronDown size={16} className="text-indigo-400 ml-1" />
          </div>
          
          <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 overflow-hidden py-2">
            <div className="px-4 py-2 text-[10px] font-black text-gray-400 uppercase tracking-wider">Theo dõi học sinh</div>
            {CHILDREN.map(child => (
              <div 
                key={child.id}
                onClick={() => setActiveChild(child.id)}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors ${
                  activeChild === child.id ? 'bg-indigo-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  activeChild === child.id ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {child.avatar}
                </div>
                <div>
                  <p className={`text-sm font-bold ${activeChild === child.id ? 'text-indigo-900' : 'text-gray-700'}`}>{child.name}</p>
                  <p className="text-[10px] font-black uppercase text-gray-500">Lớp {child.class}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chuông thông báo */}
        <button className="relative p-2.5 text-gray-500 hover:text-indigo-500 hover:bg-indigo-50 rounded-full transition-all">
          <Bell size={22}/>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
        
        {/* Phân cách */}
        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

        {/* Profile Card */}
        <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 flex items-center justify-center text-white shadow-md ring-4 ring-gray-100">
            <UserCircle2 size={24} />
          </div>
        </div>

      </div>
    </header>
  );
};

export default ParentNavbar;
