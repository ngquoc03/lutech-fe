import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

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
import TeacherClasses from './pages/teacher/TeacherClasses';
import AiGrading from './pages/teacher/AiGrading';
import TeacherLessons from './pages/teacher/TeacherLessons';
import TeacherExams from './pages/teacher/TeacherExams';
import TeacherAccounts from './pages/teacher/TeacherAccounts';
import TeacherUsers from './pages/teacher/TeacherUsers';

import StudentLayout from './layouts/StudentLayout';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentClasses from './pages/student/StudentClasses';
import StudentLessons from './pages/student/StudentLessons';
import StudentExams from './pages/student/StudentExams';
import StudentGrades from './pages/student/StudentGrades';

import ParentLayout from './layouts/ParentLayout';
import ParentDashboard from './pages/parent/ParentDashboard';
import ParentProgress from './pages/parent/ParentProgress';
import ParentSchedule from './pages/parent/ParentSchedule';

import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminBlog from './pages/admin/AdminBlog';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="schedule" element={<TeacherSchedule />} />
          <Route path="classes" element={<TeacherClasses />} />
          <Route path="grading" element={<AiGrading />} />
          <Route path="lessons" element={<TeacherLessons />} />
          <Route path="exams" element={<TeacherExams />} />
          <Route path="accounts" element={<TeacherAccounts />} />
          <Route path="users" element={<TeacherUsers />} />
        </Route>

        {/* ================= STUDENT ROUTES ================= */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="classes" element={<StudentClasses />} />
          <Route path="lessons" element={<StudentLessons />} />
          <Route path="exams" element={<StudentExams />} />
          <Route path="grades" element={<StudentGrades />} />
        </Route>

        {/* ================= PARENT ROUTES ================= */}
        <Route path="/parent" element={<ParentLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="progress" element={<ParentProgress />} />
          <Route path="schedule" element={<ParentSchedule />} />
        </Route>

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="blog" element={<AdminBlog />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;