import React, { useState } from 'react';
import { Check, X, Zap, Star, Building, ArrowRight } from 'lucide-react';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const PLANS = [
    {
      name: "Khởi động",
      desc: "Dành cho giáo viên độc lập hoặc trung tâm nhỏ",
      monthlyPrice: "499,000",
      annualPrice: "399,000",
      icon: <Zap size={24} className="text-blue-500" />,
      color: "blue",
      features: ["Tối đa 150 học viên", "Quản lý điểm danh & học phí", "App cho phụ huynh (Cơ bản)", "Hỗ trợ qua Email"],
      missing: ["Chấm thi AI tự động", "Báo cáo tài chính nâng cao", "API tùy chỉnh"]
    },
    {
      name: "Chuyên nghiệp",
      desc: "Lựa chọn tốt nhất cho trung tâm đang tăng trưởng",
      monthlyPrice: "1,299,000",
      annualPrice: "999,000",
      icon: <Star size={24} className="text-primary" />,
      color: "primary",
      isPopular: true,
      features: ["Tối đa 800 học viên", "Tất cả tính năng Khởi động", "Chấm thi IELTS bằng AI", "Báo cáo tài chính & vận hành", "Hỗ trợ Zalo/Hotline 24/7"],
      missing: ["API tùy chỉnh"]
    },
    {
      name: "Doanh nghiệp",
      desc: "Dành cho chuỗi hệ thống đa cơ sở",
      monthlyPrice: "Liên hệ",
      annualPrice: "Liên hệ",
      icon: <Building size={24} className="text-emerald-500" />,
      color: "emerald",
      features: ["Không giới hạn học viên", "Quản lý đa cơ sở (Multi-branch)", "API tích hợp hệ thống nội bộ", "Triển khai Server riêng (Tùy chọn)", "Quản lý tài khoản chuyên trách"],
      missing: []
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-primary/20">
      <LandingNavbar />

      <main className="pt-32 pb-24">
        {/* Header & Toggle */}
        <section className="text-center px-6 max-w-4xl mx-auto mb-16">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Đầu tư nhỏ, <span className="text-primary">Tác động lớn</span></h1>
            <p className="text-xl text-gray-600 mb-10">Chọn gói giải pháp phù hợp với quy mô của bạn. Không phí ẩn, không phụ phí phức tạp.</p>
            
            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-4 bg-white p-2 rounded-full border border-gray-200 inline-flex shadow-sm">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${!isAnnual ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Thanh toán Tháng
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${isAnnual ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Thanh toán Năm <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full">-20%</span>
              </button>
            </div>
          </ScrollReveal>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 max-w-7xl mx-auto mb-24">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {PLANS.map((plan, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className={`relative bg-white rounded-3xl p-8 border ${plan.isPopular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-lg'}`}>
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Được ưa chuộng nhất
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-${plan.color}-50 rounded-xl`}>{plan.icon}</div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 h-10">{plan.desc}</p>
                  
                  <div className="mb-8">
                    {plan.annualPrice === "Liên hệ" ? (
                      <span className="text-5xl font-extrabold">Liên hệ</span>
                    ) : (
                      <>
                        <span className="text-5xl font-extrabold">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span className="text-gray-500 font-medium"> ₫ /tháng</span>
                      </>
                    )}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-bold mb-8 transition ${plan.isPopular ? 'bg-primary text-white hover:bg-primaryDark hover:shadow-lg' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                    {plan.annualPrice === "Liên hệ" ? "Nhận báo giá" : "Bắt đầu dùng thử"}
                  </button>
                  
                  <ul className="space-y-4">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <Check size={18} className="text-green-500 flex-shrink-0" /> {f}
                      </li>
                    ))}
                    {plan.missing.map((m, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400">
                        <X size={18} className="text-gray-300 flex-shrink-0" /> {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default PricingPage;