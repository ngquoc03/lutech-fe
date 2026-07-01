import React from 'react';
import { Outlet } from 'react-router-dom'; // Bắt buộc phải có Outlet
import TeacherSidebar from '../components/teacher/TeacherSidebar';
import TeacherNavbar from '../components/teacher/TeacherNavbar';

const TeacherLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Gọi Sidebar */}
      <TeacherSidebar />

      <div className="flex-1 lg:ml-64 flex flex-col h-screen overflow-y-auto">
        {/* Gọi Navbar */}
        <TeacherNavbar />
        
        <main className="p-8 w-full max-w-7xl mx-auto">
          {/* Outlet chính là nơi hiển thị TeacherDashboard */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout;