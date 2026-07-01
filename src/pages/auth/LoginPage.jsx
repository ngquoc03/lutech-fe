import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, GraduationCap } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Cột trái: Form đăng nhập */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl mb-10 justify-center">
            <GraduationCap size={32} /> LuTech
          </Link>
          <h2 className="text-3xl font-extrabold text-center mb-2">Chào mừng trở lại</h2>
          <p className="text-gray-500 text-center mb-8">Vui lòng đăng nhập để tiếp tục quản lý</p>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input type="email" placeholder="admin@lutech.vn" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700">Mật khẩu</label>
                <a href="#" className="text-sm text-primary hover:underline font-semibold">Quên mật khẩu?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
              </div>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-0.5 transition duration-300 flex items-center justify-center gap-2">
              Đăng nhập <ArrowRight size={20} />
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-8">
            Chưa có tài khoản trung tâm? <Link to="/contact" className="text-primary font-bold hover:underline">Liên hệ mở mới</Link>
          </p>
        </div>
      </div>
      
      {/* Cột phải: Branding (Ẩn trên mobile) */}
      <div className="hidden lg:flex w-1/2 bg-primary p-12 text-white flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 mt-20">Tối ưu vận hành.<br/>Bứt phá doanh thu.</h1>
          <p className="text-xl opacity-80 max-w-lg leading-relaxed">LuTech LMS giúp hàng ngàn trung tâm ngoại ngữ tiết kiệm 70% thời gian quản lý thủ công mỗi ngày.</p>
        </div>
        {/* Vòng tròn trang trí background */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};
export default LoginPage;