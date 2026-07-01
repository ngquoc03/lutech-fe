import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from '../components/student/StudentSidebar';
import StudentNavbar from '../components/student/StudentNavbar';

const StudentLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-[280px] flex flex-col h-screen overflow-y-auto w-full relative">
        {/* Navbar */}
        <StudentNavbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="p-4 lg:p-8 w-full max-w-7xl mx-auto">
          {/* Outlet chính là nơi hiển thị nội dung trang con của học sinh */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
