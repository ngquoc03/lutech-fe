import React from 'react';
import { 
  Building2, Users, GraduationCap, ArrowRight, CheckCircle2, 
  Laptop, Smartphone, PieChart, ShieldCheck 
} from 'lucide-react';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const SOLUTIONS = [
  {
    id: "centers",
    title: "Dành cho Trung tâm & Chuỗi",
    subtitle: "Tự động hóa 80% quy trình vận hành",
    desc: "LuTech giúp ban giám đốc có cái nhìn toàn cảnh về tài chính, nhân sự và chất lượng đào tạo trên toàn hệ thống các cơ sở.",
    icon: <Building2 size={32} className="text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
    features: ["Quản lý thu/chi & công nợ tự động", "Phân quyền đa cơ sở (Multi-branch)", "Báo cáo tăng trưởng Real-time", "Quản lý chiến dịch CRM & Tuyển sinh"]
  },
  {
    id: "teachers",
    title: "Dành cho Giáo viên",
    subtitle: "Giải phóng khỏi công việc giấy tờ",
    desc: "Trợ lý AI giúp giáo viên chấm điểm Speaking/Writing IELTS ngay lập tức, tiết kiệm hàng chục giờ đồng hồ mỗi tuần để tập trung vào chuyên môn.",
    icon: <Users size={32} className="text-emerald-600" />,
    color: "bg-emerald-50 border-emerald-100",
    features: ["Chấm thi tự động bằng AI (Auto-grading)", "Ngân hàng đề thi & Học liệu thông minh", "Quản lý điểm danh, bài tập về nhà", "Tương tác trực tiếp với học viên"]
  },
  {
    id: "students",
    title: "Dành cho Học viên & Phụ huynh",
    subtitle: "Trải nghiệm học tập cá nhân hóa",
    desc: "Học viên nắm rõ lộ trình, phụ huynh an tâm với các báo cáo cập nhật liên tục qua ứng dụng di động độc quyền.",
    icon: <GraduationCap size={32} className="text-purple-600" />,
    color: "bg-purple-50 border-purple-100",
    features: ["App di động tiện lợi (iOS & Android)", "Xem lịch học & Thông báo đẩy", "Làm bài test Online mọi lúc mọi nơi", "Biểu đồ đánh giá năng lực chi tiết"]
  }
];

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] selection:bg-primary/20 font-sans overflow-hidden">
      <LandingNavbar />

      <main className="pt-32 pb-24">
        {/* 1. Hero Section */}
        <section className="px-6 text-center max-w-5xl mx-auto mb-24 relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 mb-6 text-sm font-bold text-primary bg-white border border-primary/20 rounded-full shadow-sm">
              Giải quyết mọi bài toán quản lý
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">
              Một nền tảng. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Đa góc nhìn.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dù bạn là Giám đốc cần số liệu, Giáo viên cần công cụ, hay Phụ huynh cần sự an tâm. LuTech đều có các phân hệ được thiết kế "đo ni đóng giày" cho riêng bạn.
            </p>
          </ScrollReveal>
        </section>

        {/* 2. Solutions Details (Z-Pattern Layout) */}
        <section className="px-6 max-w-7xl mx-auto space-y-32 mb-32">
          {SOLUTIONS.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={solution.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal delay={0.1}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${solution.color} shadow-sm border`}>
                      {solution.icon}
                    </div>
                    <h2 className="text-4xl font-bold mb-4">{solution.title}</h2>
                    <p className="text-xl font-medium text-gray-500 mb-6">{solution.subtitle}</p>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{solution.desc}</p>
                    
                    <ul className="space-y-4 mb-10">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <CheckCircle2 size={20} className="text-primary flex-shrink-0"/>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="text-primary font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                      Tìm hiểu thêm chi tiết <ArrowRight size={20} />
                    </button>
                  </ScrollReveal>
                </div>

                {/* UI Mockup (Fake UI) */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal delay={0.3}>
                    <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-gray-100 relative group">
                      {/* Trình duyệt giả */}
                      <div className="bg-gray-50 rounded-[2rem] border border-gray-100 overflow-hidden h-[400px] flex flex-col relative">
                        <div className="h-12 bg-white border-b border-gray-100 flex items-center px-6 gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          <div className="mx-auto w-1/2 h-6 bg-gray-50 rounded-md"></div>
                        </div>
                        {/* Cấu trúc giả lập UI tùy theo đối tượng */}
                        <div className="p-8 flex-1 flex flex-col gap-4">
                          <div className="w-1/3 h-8 bg-gray-200 rounded-lg mb-4"></div>
                          <div className="flex gap-4">
                            <div className="w-1/2 h-32 bg-primary/10 rounded-2xl border border-primary/20"></div>
                            <div className="w-1/2 h-32 bg-blue-50 rounded-2xl border border-blue-100"></div>
                          </div>
                          <div className="w-full flex-1 bg-gray-100 rounded-2xl mt-2"></div>
                        </div>
                        
                        {/* Overlay kính mờ khi hover */}
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold shadow-xl">Xem bản Demo</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                
              </div>
            );
          })}
        </section>

        {/* 3. Lợi ích giá trị */}
        <section className="bg-white py-24 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-16">Quy trình vận hành trơn tru (Seamless Workflow)</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: <Laptop/>, t: "1. Đăng ký & Placement Test", d: "Tự động phân loại đầu vào" },
                { icon: <Building2/>, t: "2. Xếp lớp & Thu học phí", d: "Tạo hóa đơn e-invoice tự động" },
                { icon: <PieChart/>, t: "3. Đào tạo & Báo cáo", d: "AI chấm thi, cập nhật điểm số" },
                { icon: <ShieldCheck/>, t: "4. Cấp chứng chỉ", d: "Hoàn thành và lưu trữ hồ sơ" }
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative group">
                    {/* Đường gạch nối giữa các bước (ẩn ở bản mobile) */}
                    {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-100 -z-10 group-hover:bg-primary/30 transition-colors"></div>}
                    
                    <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-primary shadow-sm mx-auto mb-6 group-hover:border-primary transition-colors">
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{step.t}</h4>
                    <p className="text-gray-500 text-sm">{step.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Final CTA */}
        <section className="px-6 max-w-5xl mx-auto mt-24">
          <ScrollReveal>
            <div className="bg-slate-900 text-white rounded-[3rem] p-16 text-center relative overflow-hidden">
              {/* Trang trí */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Bạn đã sẵn sàng để bứt phá?</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">Liên hệ ngay hôm nay để nhận kịch bản chuyển đổi số được cá nhân hóa hoàn toàn miễn phí cho trung tâm của bạn.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primaryDark transition-colors">
                  Dùng thử 14 ngày miễn phí
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors">
                  Lên lịch Demo với Chuyên gia
                </button>
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