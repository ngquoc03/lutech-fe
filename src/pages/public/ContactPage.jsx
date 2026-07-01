import React from 'react';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-primary/20 overflow-hidden">
      <LandingNavbar />
      
      <main className="pt-32 pb-24 relative">
        {/* Animated 3D Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 left-[5%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]"
          />
        </div>

        <article className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          
          {/* Thông tin liên hệ (Bento Box style) */}
          <section className="flex flex-col justify-center">
            <ScrollReveal>
              <header className="mb-12">
                <span className="inline-flex items-center gap-2 py-2 px-6 mb-6 text-sm font-bold text-primary bg-white border border-primary/20 rounded-full shadow-sm">
                  <MessageSquare size={16} /> Hỗ trợ 24/7
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-gray-900">
                  Hãy để chúng tôi <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                    lắng nghe bạn
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                  Dù bạn cần tư vấn giải pháp EdTech, hỗ trợ kỹ thuật hay báo giá doanh nghiệp, đội ngũ LuTech luôn sẵn sàng đồng hành cùng bạn.
                </p>
              </header>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin size={28} />,
                    title: "Trụ sở chính",
                    desc: "Tòa nhà LuTech, Quận 1, TP. Hồ Chí Minh",
                    color: "text-blue-600",
                    bg: "bg-blue-50"
                  },
                  {
                    icon: <Phone size={28} />,
                    title: "Hotline (Miễn phí)",
                    desc: "1900 8888 (Phím 1: Kỹ thuật | Phím 2: Tư vấn)",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50"
                  },
                  {
                    icon: <Mail size={28} />,
                    title: "Email liên hệ",
                    desc: "hello@lutech.vn",
                    color: "text-purple-600",
                    bg: "bg-purple-50"
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="font-extrabold text-2xl text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h2>
                      <p className="text-gray-600 text-lg font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* Form gửi tin nhắn (Glassmorphism) */}
          <section>
            <ScrollReveal delay={0.2}>
              <div className="bg-white/70 backdrop-blur-xl p-10 md:p-12 rounded-[3rem] shadow-2xl border border-white relative overflow-hidden group">
                {/* Decorative element inside form */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-blue-500 rounded-bl-[100px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
                
                <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Gửi yêu cầu tư vấn</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên *</label>
                      <input 
                        type="text" 
                        placeholder="Nguyễn Văn A"
                        className="w-full px-5 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 font-medium placeholder-gray-400" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        placeholder="090 123 4567"
                        className="w-full px-5 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 font-medium placeholder-gray-400" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      placeholder="email@cuaban.com"
                      className="w-full px-5 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 font-medium placeholder-gray-400" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung yêu cầu</label>
                    <textarea 
                      rows="4" 
                      placeholder="Bạn cần chúng tôi hỗ trợ gì?"
                      className="w-full px-5 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 font-medium placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-700 to-primary text-white py-5 rounded-2xl font-extrabold text-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all flex justify-center items-center gap-3 mt-4"
                  >
                    Gửi yêu cầu ngay <Send size={24} />
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </section>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
};

export default ContactPage;