import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary to-blue-700 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-8">Bạn đã sẵn sàng để dẫn đầu trong lĩnh vực đào tạo?</h2>
        <p className="text-xl mb-12 opacity-90">
          Hãy để LuTech giải phóng bạn khỏi những công việc thủ công, để bạn tập trung vào điều quan trọng nhất: **Giảng dạy**.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition">
            Đăng ký trải nghiệm Demo <ArrowRight />
          </button>
          <button className="bg-transparent border border-white px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition">
            <MessageCircle /> Liên hệ tư vấn ngay
          </button>
        </div>
        <p className="mt-8 text-sm opacity-70">Hoàn toàn miễn phí. Không cần thẻ tín dụng khi dùng thử.</p>
      </div>
    </section>
  );
};
export default CTA;