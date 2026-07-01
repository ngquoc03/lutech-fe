import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-white to-gray-50 text-center">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block py-1 px-4 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full">
          Hệ sinh thái Quản lý Đào tạo số #1
        </span>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
          Quản lý trung tâm <br /> 
          <span className="text-primary">Thông minh & Hiệu quả</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          LuTech là giải pháp toàn diện giúp tối ưu vận hành, tự động hóa chấm điểm bài thi IELTS và cá nhân hóa lộ trình học tập, giúp trung tâm của bạn tăng trưởng bền vững trong kỷ nguyên số.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition flex items-center justify-center gap-2">
            Đăng ký Demo miễn phí <ArrowRight size={20} />
          </button>
          <button className="bg-white border border-gray-200 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <PlayCircle size={20} /> Xem cách hoạt động
          </button>
        </div>
        <p className="mt-8 text-sm text-gray-400">Không cần thẻ tín dụng • Setup nhanh chóng trong 24h</p>
      </div>
    </section>
  );
};

export default Hero;