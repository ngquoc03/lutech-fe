import React from 'react';
import { Cpu, CloudLightning, ShieldCheck, Database, Zap, Fingerprint, ArrowRight, Activity } from 'lucide-react';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal'; // Tận dụng component hiệu ứng đã tạo

const TECH_FEATURES = [
  {
    icon: <Cpu size={32} />,
    title: "AI & Machine Learning",
    desc: "Lõi AI độc quyền phân tích ngôn ngữ tự nhiên (NLP) giúp chấm điểm IELTS Writing/Speaking với độ chính xác lên đến 95% so với giám khảo thật."
  },
  {
    icon: <CloudLightning size={32} />,
    title: "Hạ tầng Cloud Native",
    desc: "Xây dựng trên nền tảng Microservices, tự động mở rộng (Auto-scaling) để chịu tải hàng chục ngàn học viên truy cập cùng lúc."
  },
  {
    icon: <Database size={32} />,
    title: "Big Data & Phân tích",
    desc: "Xử lý hàng triệu điểm dữ liệu học tập mỗi ngày để phác họa biểu đồ năng lực và dự đoán điểm số (Predictive Analytics) chính xác."
  },
  {
    icon: <Fingerprint size={32} />,
    title: "Định danh sinh trắc học",
    desc: "Tích hợp công nghệ nhận diện khuôn mặt (FaceID) để điểm danh tự động và chống gian lận trong các kỳ thi trực tuyến."
  }
];

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <LandingNavbar />

      {/* Hero Section - Vibe Công nghệ (Dark) */}
      <section className="pt-40 pb-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Lưới Grid Background tạo cảm giác ma trận */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          {/* Vùng sáng hắt (Glow) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] opacity-30 bg-primary blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 mb-6 text-sm font-bold text-primary bg-primary/10 border border-primary/20 rounded-full">
              Powered by Next-Gen Technologies
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Kiến trúc đột phá.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Hiệu suất vô hạn.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
              LuTech không chỉ là một phần mềm quản lý. Chúng tôi mang những công nghệ tiên tiến nhất thế giới như AI, Cloud Computing và Big Data vào lớp học của bạn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Tech Grid (Bento phong cách hiện đại) */}
      <section className="py-24 px-6 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">4 Trụ cột Công nghệ</h2>
              <p className="text-gray-500 text-lg">Nền tảng vững chắc cho sự tăng trưởng vượt bậc</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {TECH_FEATURES.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Activity className="text-primary mb-6" size={48} />
                <h2 className="text-4xl font-bold mb-6 leading-tight">Độ trễ gần như bằng không</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Hệ thống được tối ưu hóa ở mức Database và Cache, kết hợp với mạng lưới CDN toàn cầu, mang lại trải nghiệm mượt mà ngay cả trong thời điểm diễn ra kỳ thi đồng loạt với hàng ngàn thí sinh.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                    <Zap className="text-yellow-400" />
                    <span className="text-xl font-semibold w-32">&lt; 50ms</span>
                    <span className="text-gray-500">Thời gian phản hồi API</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                    <ShieldCheck className="text-green-400" />
                    <span className="text-xl font-semibold w-32">99.99%</span>
                    <span className="text-gray-500">Cam kết Uptime SLA</span>
                  </div>
                </div>
              </div>
              
              {/* Giả lập Server Terminal */}
              <div className="bg-[#0D1117] p-6 rounded-2xl border border-gray-800 font-mono text-sm text-green-400 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-500 mb-2"># Khởi tạo mô hình AI chấm điểm IELTS</p>
                <p>&gt; lutech-ai load-model --type=ielts-writing --version=v3.2</p>
                <p className="text-blue-400 mt-1">[INFO] Loading neural network parameters... 100%</p>
                <p className="text-blue-400">[INFO] Optimizing tensor cores...</p>
                <br/>
                <p>&gt; lutech-ai grade --student_id=99281 --task=task2</p>
                <p className="text-yellow-400 mt-1">Analyzing vocabulary diversity...</p>
                <p className="text-yellow-400">Checking grammatical range...</p>
                <p className="text-green-500 mt-2 font-bold">[SUCCESS] Band Score: 7.5 (Time: 0.42s)</p>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-6">Trải nghiệm tương lai của Giáo dục số</h2>
            <p className="text-xl text-gray-600 mb-10">Đừng để công nghệ cũ kìm hãm sự phát triển của trung tâm bạn.</p>
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition flex items-center justify-center gap-2 mx-auto">
              Nhận tài liệu API & Demo <ArrowRight size={20} />
            </button>
          </ScrollReveal>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default TechnologyPage;