import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, BookOpen, GraduationCap, Users, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (role, path) => {
    localStorage.setItem('edutech_role', role);
    navigate(path);
  };

  const ROLES = [
    {
      id: 'admin',
      title: 'Quản trị viên (Admin)',
      desc: 'Giám đốc hệ thống, quản lý giáo viên và cổng thông tin.',
      icon: <ShieldAlert size={32} className="text-zinc-900" />,
      color: 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-900',
      path: '/admin/dashboard'
    },
    {
      id: 'teacher',
      title: 'Giáo viên',
      desc: 'Quản lý lớp học, bài giảng, bài tập và học viên.',
      icon: <BookOpen size={32} className="text-blue-600" />,
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-900',
      path: '/teacher/dashboard'
    },
    {
      id: 'student',
      title: 'Học sinh',
      desc: 'Không gian học tập, làm bài kiểm tra và xem điểm.',
      icon: <GraduationCap size={32} className="text-emerald-600" />,
      color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-900',
      path: '/student/dashboard'
    },
    {
      id: 'parent',
      title: 'Phụ huynh',
      desc: 'Giám sát tiến độ, lịch học và điểm số của con.',
      icon: <Users size={32} className="text-indigo-600" />,
      color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200 text-indigo-900',
      path: '/parent/dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Branding */}
        <div className="w-full md:w-5/12 bg-zinc-900 p-12 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-12">
              <GraduationCap size={40} className="text-amber-500" />
              <span className="text-3xl font-black tracking-tight">EduTech</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight mb-4">
              Nền tảng EdTech hiện đại nhất.
            </h1>
            <p className="text-zinc-400 text-sm font-medium">
              Vui lòng chọn vai trò để đăng nhập vào hệ thống thử nghiệm (Mock Login).
            </p>
          </div>
          
          <div className="mt-12 text-xs font-bold text-zinc-600 uppercase tracking-wider">
            © 2026 EduTech Platform
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Đăng nhập (Demo)</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ROLES.map((role) => (
              <button
                key={role.id}
                onClick={() => handleLogin(role.id, role.path)}
                className={`p-6 text-left rounded-3xl border transition-all duration-300 group ${role.color}`}
              >
                <div className="mb-4 bg-white/50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {role.icon}
                </div>
                <h3 className="font-extrabold text-lg mb-2">{role.title}</h3>
                <p className="text-xs font-medium opacity-80 mb-6 line-clamp-2 h-8">
                  {role.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold mt-auto group-hover:translate-x-2 transition-transform">
                  Truy cập <ArrowRight size={16} />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center text-xs font-medium text-gray-400">
            Dữ liệu đăng nhập tạm thời được lưu trong LocalStorage trình duyệt.
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
