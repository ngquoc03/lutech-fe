import React from 'react';
import { PieChart, TrendingUp, Users, DollarSign, Download, ArrowRight, BarChart3, Target, Calendar } from 'lucide-react';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const REPORT_FEATURES = [
  {
    icon: <Target size={32} />,
    title: "Báo cáo Học thuật (Academic)",
    desc: "Theo dõi sự tiến bộ của từng học viên qua từng bài test. AI phân tích và chỉ ra chính xác kỹ năng nào (Reading, Listening...) đang yếu để giáo viên điều chỉnh giáo án."
  },
  {
    icon: <DollarSign size={32} />,
    title: "Báo cáo Tài chính (Financial)",
    desc: "Kiểm soát dòng tiền theo thời gian thực. Thống kê học phí đã thu, công nợ chưa đóng, và dự phóng doanh thu tháng tới với độ chính xác cao."
  },
  {
    icon: <Users size={32} />,
    title: "Báo cáo Vận hành (Operations)",
    desc: "Đo lường hiệu suất của giáo viên, tỉ lệ lấp đầy phòng học và tỉ lệ giữ chân học viên (Retention Rate) để tối ưu hóa chi phí vận hành."
  }
];

const ReportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20 font-sans">
      <LandingNavbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-6 text-center max-w-5xl mx-auto mb-20">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full">
              Data-Driven Education
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              Biến dữ liệu thô thành <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Quyết định chiến lược</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tạm biệt những bảng tính Excel chắp vá. Hệ thống báo cáo 360° của LuTech mang đến bức tranh toàn cảnh về sức khỏe trung tâm của bạn chỉ với một cú click.
            </p>
          </ScrollReveal>
        </section>

        {/* Mock Dashboard UI (Điểm nhấn UI cực mạnh) */}
        <section className="px-6 max-w-6xl mx-auto mb-32">
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100 overflow-hidden relative">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold">Tổng quan doanh thu & Tăng trưởng</h3>
                  <p className="text-gray-500">Cập nhật lần cuối: Vừa xong</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition">
                  <Download size={18} /> Xuất PDF
                </button>
              </div>

              {/* Các chỉ số nhanh */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { label: "Tổng học viên", val: "2,451", inc: "+12%", icon: <Users size={20} className="text-blue-500"/>, bg: "bg-blue-50" },
                  { label: "Doanh thu (Tháng)", val: "840M", inc: "+5.4%", icon: <DollarSign size={20} className="text-emerald-500"/>, bg: "bg-emerald-50" },
                  { label: "Tỉ lệ hoàn thành", val: "94%", inc: "+2.1%", icon: <PieChart size={20} className="text-purple-500"/>, bg: "bg-purple-50" },
                  { label: "Điểm trung bình", val: "6.5", inc: "+0.5", icon: <TrendingUp size={20} className="text-amber-500"/>, bg: "bg-amber-50" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${stat.bg}`}>{stat.icon}</div>
                      <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-lg">{stat.inc}</span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                    <p className="text-3xl font-extrabold text-gray-900">{stat.val}</p>
                  </div>
                ))}
              </div>

              {/* Fake Chart CSS */}
              <div className="relative h-64 w-full flex items-end justify-between gap-2 border-b border-gray-200 pb-4">
                {/* Vẽ các cột biểu đồ bằng Div */}
                {[40, 65, 45, 80, 55, 90, 75, 100, 60, 85, 70, 95].map((height, i) => (
                  <div key={i} className="w-full flex flex-col items-center gap-2 group relative">
                    {/* Tooltip khi hover */}
                    <div className="absolute -top-12 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Tháng {i + 1}: {height}M
                    </div>
                    {/* Cột chart */}
                    <div 
                      className="w-full max-w-[40px] bg-primary/20 rounded-t-lg group-hover:bg-primary transition-colors duration-300 relative overflow-hidden"
                      style={{ height: `${height}%` }}
                    >
                      {/* Hiệu ứng gradient trên cột */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">T{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Tính năng chi tiết */}
        <section className="px-6 max-w-7xl mx-auto mb-24">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Phân tích sâu. Hành động nhanh.</h2>
              <p className="text-gray-600 text-lg">Mọi dữ liệu bạn cần, được phân loại rõ ràng theo từng nghiệp vụ.</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {REPORT_FEATURES.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA Báo cáo phụ huynh */}
        <section className="px-6 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-primary rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
              
              <div className="z-10 max-w-lg">
                <h2 className="text-3xl font-bold mb-4">Minh bạch với Phụ huynh</h2>
                <p className="text-primary-foreground opacity-90 mb-8 text-lg">
                  Tự động gửi báo cáo học tập định kỳ (Daily/Weekly/Monthly) qua Zalo hoặc Mobile App. Gia tăng sự tin tưởng và tỉ lệ đăng ký khóa học tiếp theo.
                </p>
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition flex items-center gap-2">
                  Xem mẫu báo cáo <ArrowRight size={20} />
                </button>
              </div>

              <div className="z-10 hidden md:block">
                <Calendar size={120} className="opacity-20 transform -rotate-12" />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default ReportsPage;