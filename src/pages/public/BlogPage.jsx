import React from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const POSTS = [
  {
    title: "Xu hướng EdTech 2026: Trí tuệ nhân tạo định hình lại việc học ngôn ngữ",
    excerpt: "Khám phá cách AI không chỉ chấm điểm mà còn phân tích tâm lý học viên, giúp giáo viên xây dựng lộ trình học tập hiệu quả gấp 3 lần.",
    category: "Xu hướng",
    date: "12 Tháng 5, 2026",
    author: "LuTech Team",
    coverColor: "from-blue-400 to-indigo-500"
  },
  {
    title: "Case Study: Trung tâm IELTS Alpha tăng 40% doanh thu trong 3 tháng",
    excerpt: "Bí quyết vận hành tinh gọn, giảm thiểu thời gian quản lý thủ công và tập trung vào trải nghiệm học viên của một trung tâm lớn tại TP.HCM.",
    category: "Case Study",
    date: "05 Tháng 5, 2026",
    author: "Hoàng Minh",
    coverColor: "from-emerald-400 to-teal-500"
  },
  {
    title: "Hướng dẫn tối ưu hóa tỉ lệ tái đăng ký (Retention Rate) cho trung tâm",
    excerpt: "Giữ chân học viên cũ luôn rẻ hơn việc tìm kiếm học viên mới. Dưới đây là 5 chiến lược bạn có thể áp dụng ngay hôm nay.",
    category: "Kinh doanh",
    date: "28 Tháng 4, 2026",
    author: "Lan Anh",
    coverColor: "from-amber-400 to-orange-500"
  },
  {
    title: "Cập nhật tính năng: Ra mắt hệ thống báo cáo dành riêng cho Phụ huynh",
    excerpt: "LuTech chính thức phát hành phân hệ Parent Portal, giúp phụ huynh theo dõi tiến độ của con em theo thời gian thực (Real-time).",
    category: "Sản phẩm",
    date: "15 Tháng 4, 2026",
    author: "Product Team",
    coverColor: "from-purple-400 to-pink-500"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-primary/20">
      <LandingNavbar />

      <main className="pt-32 pb-24">
        {/* Header & Search */}
        <section className="px-6 max-w-7xl mx-auto mb-16 text-center">
          <ScrollReveal>
            <h1 className="text-5xl font-extrabold mb-6">Thư viện <span className="text-primary">Kiến thức</span></h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Cập nhật những xu hướng công nghệ giáo dục mới nhất, kinh nghiệm quản lý trung tâm và thông tin sản phẩm từ LuTech.</p>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Tìm kiếm bài viết, chủ đề..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['Tất cả', 'Xu hướng', 'Kinh doanh', 'Sản phẩm', 'Case Study'].map(tag => (
                <button key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-primary transition">
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Blog Grid */}
        <section className="px-6 max-w-7xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {POSTS.map((post, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col h-full">
                  {/* Fake Image Placeholder using Gradients */}
                  <div className={`h-64 w-full bg-gradient-to-br ${post.coverColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag size={12}/> {post.category}
                    </span>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-3 mb-6 flex-1">{post.excerpt}</p>
                    
                    <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit">
                      Đọc tiếp <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-6 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-slate-900 text-white rounded-3xl p-12 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
               <h2 className="text-3xl font-bold mb-4 relative z-10">Không bỏ lỡ tin tức quan trọng</h2>
               <p className="text-gray-400 mb-8 relative z-10">Đăng ký nhận bản tin hàng tuần từ đội ngũ chuyên gia của LuTech.</p>
               <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto relative z-10">
                 <input type="email" placeholder="Địa chỉ Email của bạn" className="flex-1 px-6 py-4 rounded-xl text-gray-900 outline-none focus:ring-2 focus:ring-primary" />
                 <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primaryDark transition">Đăng ký</button>
               </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default BlogPage;