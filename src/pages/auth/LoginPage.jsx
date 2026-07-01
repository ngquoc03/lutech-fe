import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, Mail, Lock, ShieldAlert, 
  BookOpen, Users, ArrowRight, CheckCircle2, UserCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginPage = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('teacher');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const ROLES = [
    { id: 'admin', label: 'Admin', icon: <ShieldAlert size={16}/>, path: '/admin/dashboard', email: 'admin@lutech.edu' },
    { id: 'teacher', label: 'Giáo viên', icon: <BookOpen size={16}/>, path: '/teacher/dashboard', email: 'teacher@lutech.edu' },
    { id: 'student', label: 'Học sinh', icon: <GraduationCap size={16}/>, path: '/student/dashboard', email: 'student@lutech.edu' },
    { id: 'parent', label: 'Phụ huynh', icon: <Users size={16}/>, path: '/parent/dashboard', email: 'parent@lutech.edu' }
  ];

  const currentRoleInfo = ROLES.find(r => r.id === activeRole);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Giả lập thời gian load
    setTimeout(() => {
      localStorage.setItem('lutech_role', activeRole);
      navigate(currentRoleInfo.path);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center relative overflow-hidden font-sans p-4">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-amber-900/20 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1000px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden z-10"
      >
        
        {/* Left Branding Panel */}
        <div className="w-full md:w-5/12 p-10 lg:p-14 flex flex-col justify-between relative bg-gradient-to-br from-zinc-900 to-zinc-950 border-r border-white/5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 mb-16 hover:opacity-80 transition-opacity w-fit">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <GraduationCap size={24} className="text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">LuTech.</span>
            </Link>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Kiến tạo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">tương lai</span> <br />
              giáo dục.
            </h1>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[280px]">
              Nền tảng quản lý học tập thông minh, kết nối liền mạch giữa nhà trường, học sinh và phụ huynh.
            </p>
          </div>

          <div className="relative z-10 mt-16">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-zinc-900"/>
                <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-zinc-900"/>
                <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-zinc-900"/>
              </div>
              <p className="text-xs font-bold text-zinc-500">
                +12,450 người dùng <br />đang hoạt động
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full md:w-7/12 p-10 lg:p-16 bg-white relative">
          
          <div className="max-w-md mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">Đăng nhập</h2>
              <p className="text-zinc-500 text-sm font-medium">Chào mừng bạn trở lại! Vui lòng chọn phân hệ.</p>
            </div>

            {/* Role Tabs */}
            <div className="bg-zinc-100/80 p-1.5 rounded-2xl flex gap-1 mb-8">
              {ROLES.map(role => (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all duration-300
                    ${activeRole === role.id 
                      ? 'bg-white text-zinc-900 shadow-sm' 
                      : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200/50'
                    }
                  `}
                >
                  {role.icon} <span className="hidden sm:inline">{role.label}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-2 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20}/>
                  <input 
                    type="email" 
                    value={currentRoleInfo.email}
                    readOnly
                    className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-bold text-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-900/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-wider block">Mật khẩu</label>
                  <a href="#" className="text-xs font-bold text-amber-600 hover:text-amber-700">Quên mật khẩu?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20}/>
                  <input 
                    type="password" 
                    value="lutech-demo-password"
                    readOnly
                    className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-bold text-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-900/5 transition-all tracking-[0.2em]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-4 rounded-xl font-bold transition-all shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2 group disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {isLoggingIn ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Đăng nhập hệ thống <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-zinc-100">
              <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-2xl">
                <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20}/>
                <p className="text-xs font-medium text-blue-800 leading-relaxed">
                  <strong>Chế độ trải nghiệm:</strong> Mật khẩu và Email đã được điền sẵn theo từng phân hệ. Bạn chỉ cần bấm nút Đăng nhập để truy cập.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;