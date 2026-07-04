import React from 'react';
import { Blocks } from 'lucide-react';

const Integrations = () => {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 py-1 px-3 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
            <Blocks size={16} /> Kết nối vô tận
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Môi trường học tập không giới hạn</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            EduTech kết nối mượt mà với các công cụ học tập và giao tiếp bạn đang sử dụng mỗi ngày. Lớp học trực tuyến, nhắc lịch tự động, và chia sẻ tài liệu chưa bao giờ dễ dàng đến thế.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['Zoom & Google Meet', 'Zalo & Messenger', 'Google Calendar', 'Thanh toán Online'].map(item => (
              <div key={item} className="p-4 border border-white/10 rounded-2xl bg-white/5 font-semibold text-center hover:bg-white/10 hover:scale-105 transition-all cursor-default">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-105"></div>
          <div className="h-96 bg-gray-800/80 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center border border-white/10 shadow-2xl relative z-10">
            <Blocks size={64} className="text-primary/50 mb-6" />
            <p className="text-xl font-bold text-gray-300 text-center px-8">Hệ thống mở API cho mọi nhu cầu giảng dạy của bạn</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Integrations;