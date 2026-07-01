import React from 'react';
import { PieChart, TrendingUp, Users, Download, ArrowRight, Target, Calendar, Clock, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const REPORT_FEATURES = [
  {
    icon: <Target size={40} />,
    title: "Báo cáo Năng lực Cá nhân",
    desc: "AI phân tích sâu vào từng kỹ năng (Reading, Listening, Writing, Speaking) để chỉ ra chính xác điểm yếu cốt lõi, giúp học sinh tiết kiệm hàng trăm giờ ôn tập sai hướng."
  },
  {
    icon: <Users size={40} />,
    title: "Thống kê Lớp học (Giáo viên)",
    desc: "Giáo viên dễ dàng nắm bắt tổng quan tiến độ của cả lớp. Nhận biết ngay học sinh nào đang tụt hậu để kịp thời hỗ trợ và điều chỉnh giáo án phù hợp."
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Theo dõi Tiến độ Dài hạn",
    desc: "Biểu đồ trực quan so sánh kết quả qua các bài kiểm tra định kỳ, giúp phụ huynh và học viên thấy rõ sự cải thiện theo thời gian thực."
  }
];

const ReportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20 font-sans overflow-hidden">
      <LandingNavbar />

      <main className="pt-32 pb-24">
        {/* SEO Article Wrapper */}
        <article>
          {/* Hero Section */}
          <section className="px-6 text-center max-w-6xl mx-auto mb-24 relative">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
              <motion.div 
                animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[15%] w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
              />
              <motion.div 
                animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-[15%] w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]"
              />
            </div>

            <ScrollReveal>
              <header>
                <span className="inline-block py-2 px-6 mb-8 mt-8 text-sm font-bold text-primary bg-white border border-primary/20 rounded-full shadow-sm relative z-20">
                  Data-Driven Learning
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.2] tracking-tight text-gray-900 relative z-20">
                  Thấu hiểu Năng lực. <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                    Cá nhân hoá Lộ trình.
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                  Tạm biệt những bảng điểm truyền thống nhàm chán. LuTech mang đến hệ thống phân tích học tập 360°, giúp bạn nhìn rõ từng bước tiến bộ của bản thân qua mỗi ngày học.
                </p>
              </header>
            </ScrollReveal>
          </section>

          {/* Mock Dashboard UI (Phân tích học tập) */}
          <section className="px-6 max-w-6xl mx-auto mb-32">
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Báo cáo Năng lực Tổng quan</h2>
                    <p className="text-gray-500 font-medium mt-1">Học sinh: Nguyễn Văn A • Cập nhật lần cuối: Vừa xong</p>
                  </div>
                  <button className="flex items-center gap-2 px-5 py-3 bg-gray-50 text-gray-800 font-bold rounded-xl hover:bg-gray-100 border border-gray-200 transition-all shadow-sm hover:shadow">
                    <Download size={20} /> Xuất PDF
                  </button>
                </div>

                {/* Các chỉ số nhanh */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {[
                    { label: "Điểm IELTS dự kiến", val: "7.0", inc: "+0.5", icon: <Target size={24} className="text-blue-500"/>, bg: "bg-blue-50" },
                    { label: "Thời gian tự học", val: "45h", inc: "+12h", icon: <Clock size={24} className="text-emerald-500"/>, bg: "bg-emerald-50" },
                    { label: "Tỷ lệ làm bài", val: "94%", inc: "+5%", icon: <PieChart size={24} className="text-purple-500"/>, bg: "bg-purple-50" },
                    { label: "Đề thi đã giải", val: "28", inc: "+4", icon: <BookOpen size={24} className="text-amber-500"/>, bg: "bg-amber-50" },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl ${stat.bg}`}>{stat.icon}</div>
                        <span className="text-sm font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-lg">{stat.inc}</span>
                      </div>
                      <p className="text-gray-500 text-sm font-semibold mb-2">{stat.label}</p>
                      <p className="text-4xl font-extrabold text-gray-900">{stat.val}</p>
                    </div>
                  ))}
                </div>

                {/* Biểu đồ giả lập sự tiến bộ */}
                <div className="relative h-72 w-full flex items-end justify-between gap-3 border-b border-gray-200 pb-4 mt-8">
                  <h3 className="absolute -top-8 left-0 font-bold text-gray-700">Biểu đồ Band Score qua các tháng</h3>
                  {[45, 50, 55, 55, 60, 65, 70, 75].map((height, i) => (
                    <div key={i} className="w-full flex flex-col items-center gap-3 group/chart relative">
                      {/* Tooltip khi hover */}
                      <div className="absolute -top-14 bg-gray-900 text-white text-sm font-bold py-2 px-3 rounded-lg opacity-0 group-hover/chart:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-30">
                        Bài test {i + 1}: {height / 10}
                      </div>
                      {/* Cột chart */}
                      <div 
                        className="w-full max-w-[48px] bg-primary/20 rounded-t-xl group-hover/chart:bg-primary transition-colors duration-300 relative overflow-hidden"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>
                      </div>
                      <span className="text-sm text-gray-500 font-bold">T{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Tính năng phân tích chi tiết (Bento Grid) */}
          <section className="px-6 max-w-7xl mx-auto mb-32">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Phân tích sâu. Hành động nhanh.</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">Báo cáo không chỉ để xem, mà để định hướng chính xác bước tiếp theo trên hành trình học tập.</p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-8">
              {REPORT_FEATURES.map((feature, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 h-full"
                  >
                    <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 border border-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* CTA Báo cáo phụ huynh */}
          <section className="px-6 max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-blue-700 to-primary rounded-[3rem] p-12 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
                {/* Trang trí 3D */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 opacity-20 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>
                
                <div className="z-10 max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Gắn kết chặt chẽ với Phụ huynh</h2>
                  <p className="text-blue-100 mb-10 text-xl font-medium leading-relaxed">
                    Tự động gửi báo cáo học tập định kỳ qua Zalo hoặc Mobile App. Giúp phụ huynh an tâm tuyệt đối khi nhìn thấy sự tiến bộ rõ rệt của con em mình mỗi ngày.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                  >
                    Xem mẫu báo cáo <ArrowRight size={24} />
                  </motion.button>
                </div>

                <div className="z-10 hidden md:block">
                  <motion.div 
                    animate={{ rotate: [0, 10, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Calendar size={180} className="text-white/20 filter drop-shadow-lg" />
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
};

export default ReportsPage;