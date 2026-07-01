import React, { useState } from 'react';
import { Check, X, Zap, Star, Building, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const PLANS = [
    {
      name: "Học Sinh (Pro)",
      desc: "Phù hợp để tự học và luyện thi IELTS tại nhà",
      monthlyPrice: "199,000",
      annualPrice: "149,000",
      icon: <GraduationCap size={32} className="text-blue-500" />,
      iconBgClass: "bg-blue-50",
      features: [
        "Luyện đề Cambridge không giới hạn", 
        "Chấm điểm Writing/Speaking AI (30 bài/tháng)", 
        "Phân tích lộ trình học tập cá nhân", 
        "App di động (iOS & Android)"
      ],
      missing: [
        "Quản lý lớp học & giao bài", 
        "API tích hợp"
      ]
    },
    {
      name: "Giáo Viên (Premium)",
      desc: "Trợ thủ đắc lực giảm 80% thời gian chấm bài",
      monthlyPrice: "499,000",
      annualPrice: "399,000",
      icon: <Star size={32} className="text-white" />,
      iconBgClass: "bg-primary/20",
      isPopular: true,
      features: [
        "Tất cả tính năng của Học Sinh", 
        "Chấm điểm AI tự động (150 bài/tháng)", 
        "Quản lý tối đa 5 lớp học", 
        "Giao bài và theo dõi tiến độ tự động", 
        "Hỗ trợ ưu tiên 24/7"
      ],
      missing: [
        "API tích hợp"
      ]
    },
    {
      name: "Nhà Trường / Tổ chức",
      desc: "Giải pháp toàn diện cho trung tâm ngoại ngữ",
      monthlyPrice: "Liên hệ",
      annualPrice: "Liên hệ",
      icon: <Building size={32} className="text-emerald-500" />,
      iconBgClass: "bg-emerald-50",
      features: [
        "Không giới hạn tài khoản học sinh", 
        "Chấm điểm AI không giới hạn", 
        "Quản lý đa cơ sở (Multi-branch)", 
        "Cấp API tích hợp nội bộ", 
        "Customer Success Manager riêng"
      ],
      missing: []
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-primary/20 overflow-hidden">
      <LandingNavbar />

      <main className="pt-32 pb-24 relative">
        {/* Animated 3D Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-[15%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"
          />
        </div>

        {/* SEO Header */}
        <article className="relative z-10">
          <section className="text-center px-6 max-w-5xl mx-auto mb-20">
            <ScrollReveal>
              <header>
                <span className="inline-block py-2 px-6 mb-8 mt-8 text-sm font-bold text-primary bg-white border border-primary/20 rounded-full shadow-sm">
                  Đầu tư thông minh cho tri thức
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-[1.2] tracking-tight text-gray-900">
                  Một mức giá. <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                    Mở khóa mọi tiềm năng.
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                  Bắt đầu học tập và giảng dạy thông minh hơn ngay hôm nay. Không phí ẩn, không thủ tục phức tạp.
                </p>
                
                {/* Toggle Switch */}
                <div className="flex items-center justify-center gap-2 bg-white p-2 rounded-full border border-gray-200 inline-flex shadow-md">
                  <button 
                    onClick={() => setIsAnnual(false)}
                    className={`px-8 py-3 rounded-full font-bold transition-all text-lg ${!isAnnual ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    Đóng theo Tháng
                  </button>
                  <button 
                    onClick={() => setIsAnnual(true)}
                    className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-3 text-lg ${isAnnual ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    Đóng theo Năm 
                    <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full animate-bounce shadow-sm">
                      Tiết kiệm 25%
                    </span>
                  </button>
                </div>
              </header>
            </ScrollReveal>
          </section>

          {/* Pricing Cards */}
          <section className="px-6 max-w-7xl mx-auto mb-32">
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {PLANS.map((plan, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div 
                    whileHover={{ y: -15 }}
                    className={`relative rounded-[2.5rem] p-10 h-full flex flex-col transition-all duration-300 ${
                      plan.isPopular 
                        ? 'bg-gradient-to-br from-blue-700 to-primary text-white shadow-2xl shadow-primary/30 border-none scale-105 z-20' 
                        : 'bg-white border border-gray-200 shadow-xl hover:shadow-2xl'
                    }`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-extrabold shadow-lg tracking-wide uppercase">
                        Lựa chọn Tối ưu nhất
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl ${plan.isPopular ? 'bg-white/20 backdrop-blur-md' : plan.iconBgClass}`}>
                        {plan.icon}
                      </div>
                      <h2 className={`text-3xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.name}
                      </h2>
                    </div>
                    
                    <p className={`text-lg font-medium mb-8 h-14 ${plan.isPopular ? 'text-blue-100' : 'text-gray-500'}`}>
                      {plan.desc}
                    </p>
                    
                    <div className="mb-10">
                      {plan.annualPrice === "Liên hệ" ? (
                        <span className="text-5xl font-extrabold tracking-tight">Liên hệ</span>
                      ) : (
                        <div className="flex items-end gap-2">
                          <span className="text-6xl font-extrabold tracking-tight">
                            {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className={`text-xl font-medium mb-2 ${plan.isPopular ? 'text-blue-200' : 'text-gray-500'}`}>
                            ₫ /tháng
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <button 
                      className={`w-full py-5 rounded-2xl font-bold text-xl mb-10 transition-all ${
                        plan.isPopular 
                          ? 'bg-white text-primary hover:bg-gray-50 hover:scale-[1.02] shadow-lg' 
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:scale-[1.02]'
                      }`}
                    >
                      {plan.annualPrice === "Liên hệ" ? "Nhận tư vấn ngay" : "Bắt đầu dùng thử 14 ngày"}
                    </button>
                    
                    <div className="mt-auto">
                      <ul className="space-y-5">
                        {plan.features.map((f, i) => (
                          <li key={i} className={`flex items-start gap-4 text-lg font-medium ${plan.isPopular ? 'text-white' : 'text-gray-700'}`}>
                            <div className={`mt-1 rounded-full p-1 flex-shrink-0 ${plan.isPopular ? 'bg-white/20' : 'bg-green-100 text-green-600'}`}>
                              <Check size={16} className={plan.isPopular ? 'text-white' : ''} />
                            </div>
                            {f}
                          </li>
                        ))}
                        {plan.missing.map((m, i) => (
                          <li key={i} className={`flex items-start gap-4 text-lg ${plan.isPopular ? 'text-white/40' : 'text-gray-400'}`}>
                            <div className="mt-1 rounded-full p-1 flex-shrink-0">
                              <X size={16} />
                            </div>
                            <span className="line-through">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
};

export default PricingPage;