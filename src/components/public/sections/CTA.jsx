import React from 'react';
import { ArrowRight, BookOpen, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Sẵn sàng để bước vào kỷ nguyên học tập mới?
        </h2>
        <p className="text-xl mb-12 opacity-90 leading-relaxed font-medium">
          Dù bạn muốn tăng Band điểm nhanh chóng hay quản lý lớp học nhàn tênh, LuTech luôn có giải pháp hoàn hảo dành cho bạn.
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-2xl hover:bg-gray-50 hover:-translate-y-1 transition-all">
            Học sinh: Bắt đầu miễn phí <ArrowRight size={20} />
          </button>
          <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
            Giáo viên: Liên hệ dùng thử <BookOpen size={20} />
          </button>
        </div>
        <p className="mt-10 text-sm font-medium opacity-80">
          Hoàn toàn miễn phí trải nghiệm. Hỗ trợ 24/7.
        </p>
      </div>
    </section>
  );
};
export default CTA;