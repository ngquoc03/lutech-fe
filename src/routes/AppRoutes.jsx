import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/public/LandingPage';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
// ... import các page khác

const AppRoutes = () => {
  return (
    <Routes>
      {/* Trang Public */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Trang Teacher */}
      <Route path="/teacher/*" element={<TeacherDashboard />} />
      
      {/* Trang Admin */}
      <Route path="/admin/*" element={<AdminDashboard />} />
      
      {/* Các route khác tương tự... */}
    </Routes>
  );
};