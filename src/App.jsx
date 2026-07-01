import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// --- PUBLIC PAGES ---
import LandingPage from './pages/public/LandingPage';
import SolutionsPage from './pages/public/SolutionsPage';
import ContactPage from './pages/public/ContactPage';
import TechnologyPage from './pages/public/TechnologyPage';
import ReportsPage from './pages/public/ReportsPage';
import PricingPage from './pages/public/PricingPage';
import BlogPage from './pages/public/BlogPage';

// --- AUTH PAGES ---
import LoginPage from './pages/auth/LoginPage';

// --- TEACHER LAYOUT & PAGES ---
import TeacherLayout from './layouts/TeacherLayout';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import TeacherSchedule from './pages/teacher/TeacherSchedule';
// Import sẵn file AiGrading để lát nữa chúng ta làm tiếp
// import AiGrading from './pages/teacher/AiGrading'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />

        {/* ================= AUTH ROUTES ================= */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* ================= TEACHER ROUTES ================= */}
        {/* Tất cả những gì nằm trong /teacher đều sẽ có Sidebar và Navbar */}
        <Route path="/teacher" element={<TeacherLayout />}>
          
          {/* Tự động chuyển hướng từ /teacher sang /teacher/dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />
        
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="schedule" element={<TeacherSchedule />} />
          
          {/* Chỗ này dành cho trang chấm điểm sắp tới */}
          {/* <Route path="grading" element={<AiGrading />} /> */}
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;