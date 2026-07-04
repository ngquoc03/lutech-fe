import React from 'react';
import {
  Building2, Users, GraduationCap, ArrowRight, CheckCircle2,
  Laptop, Smartphone, PieChart, ShieldCheck, Zap, BookOpen, Clock, PenTool, TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] selection:bg-primary/20 font-sans overflow-hidden">
      <LandingNavbar />

      <main className="pt-32 pb-24">
        {/* 1. Hero Section 3D */}
        <section className="px-6 text-center max-w-6xl mx-auto mb-32 relative">
          {/* Animated 3D Background Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div 
              animate={{ y: [0, -40, 0], rotate: [0, 20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-[10%] w-48 h-48 bg-primary/20 rounded-3xl blur-2xl transform rotate-12"
            />
            <motion.div 
              animate={{ y: [0, 50, 0], rotate: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            />
          </div>

          <ScrollReveal>
            <span className="inline-block py-2 px-6 mb-10 mt-8 text-sm font-bold text-primary bg-white border border-primary/20 rounded-full shadow-sm relative z-20">
              Giải pháp Chuyên biệt & Đột phá
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-[1.3] tracking-tight text-gray-900 relative z-20">
              Thiết kế dành riêng cho <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Thành công của bạn
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Bỏ lại phía sau những quy trình thủ công phức tạp. EduTech mang đến trải nghiệm học tập và giảng dạy liền mạch, thông minh và được cá nhân hoá tuyệt đối.
            </p>
          </ScrollReveal>
        </section>

        {/* 2. Solutions for Students (Bento Grid) */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <GraduationCap size={32} />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">Cho Học sinh</h2>
                <p className="text-xl text-gray-500 font-medium">Học ít hơn, hiểu sâu hơn, điểm cao hơn.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Box 1 */}
            <ScrollReveal delay={0.1}>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm h-full flex flex-col justify-between group">
                <div>
                  <Zap size={40} className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold mb-4">Chấm điểm AI 0.5s</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">Nhận kết quả Reading & Listening ngay khi nộp bài. AI chỉ ra chính xác câu sai và giải thích cặn kẽ từng lỗi ngữ pháp.</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-gray-700 font-medium"><CheckCircle2 className="text-primary" /> Chính xác 99%</li>
                  <li className="flex gap-2 text-gray-700 font-medium"><CheckCircle2 className="text-primary" /> Có giải thích tiếng Việt</li>
                </ul>
              </motion.div>
            </ScrollReveal>

            {/* Bento Box 2 */}
            <ScrollReveal delay={0.2}>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-primary to-emerald-700 text-white p-10 rounded-[2rem] shadow-xl h-full flex flex-col justify-between group">
                <div>
                  <BookOpen size={40} className="text-white/80 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold mb-4">Kho đề vô tận</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">Luyện tập thả ga với hàng ngàn đề thi chuẩn quốc tế được cập nhật hàng tuần. Mô phỏng 100% giao diện thi thật trên máy tính.</p>
                </div>
                <button className="bg-white text-primary w-full py-4 rounded-xl font-bold text-lg mt-4 group-hover:shadow-lg transition-all">
                  Thi thử ngay
                </button>
              </motion.div>
            </ScrollReveal>

            {/* Bento Box 3 */}
            <ScrollReveal delay={0.3}>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm h-full flex flex-col justify-between group">
                <div>
                  <PieChart size={40} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold mb-4">Lộ trình cá nhân hoá</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">Hệ thống phân tích điểm yếu và tự động đề xuất bài tập bổ trợ tập trung đúng vào kỹ năng bạn còn kém.</p>
                </div>
                <div className="w-full h-24 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center p-4">
                  <div className="w-full flex gap-2">
                    <div className="h-4 bg-primary/20 rounded w-1/3"></div>
                    <div className="h-4 bg-primary rounded w-2/3"></div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* 3. Solutions for Teachers (Bento Grid) */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12 flex-row-reverse text-right">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Users size={32} />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">Cho Giáo viên</h2>
                <p className="text-xl text-gray-500 font-medium">Giảm 80% việc vặt, tập trung 100% chuyên môn.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 transition-transform">
                  <PenTool size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Trợ lý Chấm thi AI</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">Không còn cảnh thức đêm chấm bài. AI giúp đánh giá sơ bộ các bài Writing/Speaking và gợi ý cấu trúc nhận xét chuẩn xác, giúp bạn hoàn thành việc chấm thi nhanh gấp 3 lần.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
                  <Laptop size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Quản lý Lớp 360°</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">Giao bài tập cho cả lớp chỉ với 1 click. Hệ thống tự động theo dõi tiến độ nộp bài, điểm danh và tổng hợp bảng điểm trực quan trên một màn hình duy nhất.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. Workflow Journey */}
        <section className="bg-white py-32 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Trải nghiệm Dễ dàng & Xuyên suốt</h2>
              <p className="text-2xl text-gray-500 mb-20 max-w-3xl mx-auto font-medium">Bắt đầu quá trình giảng dạy và học tập chưa bao giờ đơn giản đến thế.</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: <Laptop />, t: "1. Truy cập", d: "Đăng nhập nhanh chóng trên mọi thiết bị." },
                { icon: <BookOpen />, t: "2. Chọn bài", d: "Giáo viên giao bài, học sinh nhận thông báo." },
                { icon: <Zap />, t: "3. Làm bài & Chấm AI", d: "Nộp bài và nhận điểm số phân tích tức thời." },
                { icon: <TrendingUp />, t: "4. Cải thiện", d: "Ôn tập theo lộ trình cá nhân hoá." }
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative group text-center">
                    {i < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-full h-1 bg-gray-100 -z-10 group-hover:bg-primary/30 transition-colors rounded-full"></div>}

                    <div className="w-20 h-20 bg-gray-50 border-2 border-gray-100 rounded-2xl flex items-center justify-center text-primary shadow-sm mx-auto mb-8 group-hover:border-primary group-hover:-translate-y-2 transition-all duration-300 transform">
                      {React.cloneElement(step.icon, { size: 32 })}
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{step.t}</h4>
                    <p className="text-gray-500 text-lg font-medium px-4">{step.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="px-6 max-w-5xl mx-auto mt-32">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
              {/* Trang trí 3D */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>

              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10 leading-tight">
                Sẵn sàng bứt phá <br /> kết quả học tập?
              </h2>
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto relative z-10 font-medium leading-relaxed">
                Tham gia cùng hàng ngàn giáo viên và học sinh đã và đang trải nghiệm phương pháp giáo dục hiện đại nhất.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-primary/50 transition-all"
                >
                  Đăng ký miễn phí
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  Tìm hiểu thêm <ArrowRight size={24} />
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default SolutionsPage;