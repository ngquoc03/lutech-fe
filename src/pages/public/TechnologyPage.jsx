import React, { useState, useEffect } from 'react';
import { Cpu, CloudLightning, ShieldCheck, Database, Zap, ArrowRight, Activity, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const TECH_FEATURES = [
  {
    icon: <Cpu size={40} />,
    title: "AI Chấm điểm Bản xứ",
    desc: "Mô hình ngôn ngữ lớn (LLM) được tinh chỉnh riêng cho bài thi IELTS, phân tích ngữ pháp, từ vựng và logic bài viết với độ chuẩn xác 99% so với giám khảo thật."
  },
  {
    icon: <Database size={40} />,
    title: "Big Data & Cá nhân hoá",
    desc: "Xử lý hàng triệu điểm dữ liệu học tập mỗi giây. Phác họa chi tiết biểu đồ năng lực để đề xuất bài tập khắc phục điểm yếu một cách thông minh."
  },
  {
    icon: <CloudLightning size={40} />,
    title: "Hạ tầng Cloud Auto-scaling",
    desc: "Kiến trúc Serverless trên nền tảng AWS giúp tự động mở rộng tài nguyên, đảm bảo hệ thống không bao giờ giật lag ngay cả khi hàng ngàn học sinh thi thử cùng lúc."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Bảo mật Dữ liệu Tuyệt đối",
    desc: "Áp dụng chuẩn mã hoá AES-256 cho toàn bộ dữ liệu học viên và đề thi. Hệ thống chống gian lận AI (Anti-cheat) tự động giám sát kỳ thi trực tuyến."
  }
];

const TypewriterTerminal = () => {
  const [text, setText] = useState('');
  const fullText = `> edutech-ai grade --student=99281 --task=ielts-writing-t2\n[INFO] Loading NLP models... 100%\n[INFO] Analyzing vocabulary diversity...\n[INFO] Checking grammatical range...\n[SUCCESS] Band Score: 7.5\n[REPORT] Generated in 0.42s`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40); // Tốc độ gõ chữ
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="bg-[#0D1117] p-8 rounded-3xl border border-gray-800 font-mono text-sm shadow-2xl relative overflow-hidden group">
      {/* Background glow in terminal */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-colors"></div>
      
      <div className="flex gap-2 mb-6 relative z-10">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      
      <div className="text-gray-400 mb-4 font-bold relative z-10"># AI Grading Engine Runtime</div>
      
      <pre className="text-green-400 whitespace-pre-wrap leading-relaxed relative z-10">
        {text}
        <span className="animate-pulse">_</span>
      </pre>
    </div>
  );
};

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20 font-sans">
      <LandingNavbar />

      {/* Hero Section - Vibe Công nghệ 3D */}
      <section className="pt-40 pb-32 px-6 bg-[#0B0F19] text-white relative overflow-hidden" style={{ perspective: 1200 }}>
        {/* Animated 3D Tech Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Lưới Grid Matrix */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating 3D Orbs */}
          <motion.div 
            animate={{ y: [0, -50, 0], rotate: [0, 45, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ y: [0, 60, 0], x: [0, -40, 0], rotate: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 py-2 px-6 mb-8 text-sm font-bold text-primary bg-primary/10 border border-primary/20 rounded-full shadow-lg shadow-primary/10 backdrop-blur-md">
              <Code size={16} /> Powered by Next-Gen Technologies
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-[1.2] tracking-tight">
              Sức mạnh công nghệ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-primary">
                Phía sau mỗi bài học
              </span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10 font-medium">
              Không chỉ là một phần mềm. EduTech mang những công nghệ tiên tiến nhất thế giới như Trí tuệ nhân tạo (AI), Cloud Computing và Big Data để kiến tạo môi trường học tập hoàn hảo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Tech Grid (Bento phong cách hiện đại) */}
      <section className="py-32 px-6 bg-white relative z-20 -mt-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">4 Trụ cột Công nghệ</h2>
              <p className="text-xl font-medium text-gray-500">Nền tảng vững chắc cho sự đột phá trong giảng dạy</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {TECH_FEATURES.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group h-full flex flex-col justify-center"
                >
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300 border border-gray-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section with Typing Animation */}
      <section className="py-32 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                  <Activity className="text-blue-400" size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Độ trễ gần như <span className="text-blue-400">bằng không</span></h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
                  Hệ thống được tối ưu hóa ở mức Database và Cache, kết hợp với mạng lưới CDN toàn cầu. EduTech dễ dàng xử lý hàng chục ngàn học sinh cùng thi thử một lúc mà không gặp bất kỳ gián đoạn nào.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 border-b border-gray-800 pb-6 group">
                    <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                      <Zap className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-white mb-1">&lt; 50ms</div>
                      <div className="text-gray-500 font-medium">Thời gian phản hồi API</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 border-b border-gray-800 pb-6 group">
                    <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center group-hover:bg-green-400/20 transition-colors">
                      <ShieldCheck className="text-green-400" size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-white mb-1">99.99%</div>
                      <div className="text-gray-500 font-medium">Cam kết Uptime SLA</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Typewriter Terminal */}
              <div className="lg:pl-10">
                <TypewriterTerminal />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-tight">Trải nghiệm tương lai <br/> của Giáo dục số</h2>
            <p className="text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-medium">Khám phá cách AI và công nghệ đám mây thay đổi hoàn toàn cách học và dạy Tiếng Anh.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/30 transition flex items-center justify-center gap-2"
              >
                Học sinh: Trải nghiệm thi AI <ArrowRight size={24} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="bg-gray-100 text-gray-800 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                Giáo viên: Yêu cầu Demo
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default TechnologyPage;