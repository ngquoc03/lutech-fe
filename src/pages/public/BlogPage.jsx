import React from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import ScrollReveal from '../../components/public/ScrollReveal';

const FEATURED_POST = {
  title: "Cách AI thay đổi hoàn toàn cách học sinh chinh phục IELTS 8.0",
  excerpt: "Khám phá câu chuyện của Minh Hằng - từ band 6.0 lên 8.0 chỉ trong 3 tháng nhờ áp dụng mô hình AI chấm điểm và cá nhân hóa lộ trình học tập của EduTech. Bạn cũng có thể làm được nếu biết cách tận dụng sức mạnh của công nghệ.",
  category: "Góc Học Tập",
  date: "20 Tháng 5, 2026",
  author: "EduTech Academic",
  readTime: "8 phút đọc",
  coverColor: "from-blue-600 to-indigo-800"
};

const POSTS = [
  {
    title: "5 Bí kíp luyện Speaking một mình hiệu quả với Trợ lý Ảo",
    excerpt: "Không cần partner, bạn vẫn có thể tự tin giao tiếp và nâng cao phản xạ tiếng Anh nhờ các bài tập mô phỏng phòng thi thật do AI điều khiển.",
    category: "Bí kíp IELTS",
    date: "12 Tháng 5, 2026",
    author: "Thầy John",
    readTime: "5 phút đọc",
    coverColor: "from-emerald-400 to-teal-500"
  },
  {
    title: "Giáo viên tiếng Anh thời 4.0: Cắt giảm 80% thời gian chấm bài",
    excerpt: "Công việc chấm hàng tá bài Writing mỗi đêm đã là dĩ vãng. Hãy xem cách các giáo viên EduTech tận dụng hệ thống Auto-grading để tối ưu giáo án.",
    category: "Dành cho Giáo viên",
    date: "05 Tháng 5, 2026",
    author: "Cô Lan Anh",
    readTime: "6 phút đọc",
    coverColor: "from-amber-400 to-orange-500"
  },
  {
    title: "Cập nhật tính năng: Ra mắt hệ thống báo cáo Năng lực Cá nhân",
    excerpt: "EduTech chính thức phát hành bản cập nhật Báo cáo Học thuật, giúp học viên nhìn rõ biểu đồ tiến bộ của từng kỹ năng qua mỗi tuần.",
    category: "Cập nhật Sản phẩm",
    date: "28 Tháng 4, 2026",
    author: "Product Team",
    readTime: "4 phút đọc",
    coverColor: "from-purple-400 to-pink-500"
  },
  {
    title: "Tại sao bạn học hoài mà điểm Reading vẫn lẹt đẹt?",
    excerpt: "Phân tích từ dữ liệu lớn (Big Data) của hơn 10.000 học viên cho thấy 3 sai lầm chí mạng này đang cản bước bạn đạt band 7.0 Reading.",
    category: "Phân tích Data",
    date: "15 Tháng 4, 2026",
    author: "Data Science Team",
    readTime: "7 phút đọc",
    coverColor: "from-rose-400 to-red-500"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-primary/20 overflow-hidden">
      <LandingNavbar />

      <main className="pt-32 pb-24">
        {/* SEO Header & 3D Background */}
        <section className="px-6 max-w-7xl mx-auto mb-20 text-center relative">
          {/* Animated 3D Background Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div 
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-[20%] w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
            />
            <motion.div 
              animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-[20%] w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]"
            />
          </div>

          <ScrollReveal>
            <header>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.2] tracking-tight text-gray-900">
                Thư viện <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Kiến thức</span>
              </h1>
              <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                Nơi hội tụ bí kíp luyện thi IELTS đỉnh cao, xu hướng công nghệ giáo dục và những câu chuyện truyền cảm hứng từ cộng đồng EduTech.
              </p>
              
              <div className="max-w-2xl mx-auto relative group">
                <Search className="absolute left-6 top-5 text-gray-400 group-focus-within:text-primary transition-colors" size={24} />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm bài viết, chủ đề luyện thi..." 
                  className="w-full pl-16 pr-6 py-5 bg-white border border-gray-200 rounded-full shadow-lg focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-lg font-medium"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                {['Tất cả', 'Bí kíp IELTS', 'Góc Học Tập', 'Dành cho Giáo viên', 'Phân tích Data', 'Sản phẩm'].map(tag => (
                  <button key={tag} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-base font-bold text-gray-600 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </header>
          </ScrollReveal>
        </section>

        {/* Featured Post (SEO Best Practice) */}
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <ScrollReveal delay={0.2}>
            <article className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 group flex flex-col lg:flex-row relative z-10">
              <div className={`lg:w-1/2 h-80 lg:h-auto bg-gradient-to-br ${FEATURED_POST.coverColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-gray-900 text-sm font-extrabold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                  <Tag size={16} className="text-primary"/> Bài viết nổi bật
                </div>
                {/* 3D decorative element in image */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-20 -bottom-20 w-64 h-64 border-[40px] border-white/10 rounded-full"
                />
              </div>
              
              <div className="p-10 lg:p-14 lg:w-1/2 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500 mb-6">
                  <span className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-lg"><Tag size={16}/> {FEATURED_POST.category}</span>
                  <time className="flex items-center gap-2"><Calendar size={16}/> {FEATURED_POST.date}</time>
                  <span className="flex items-center gap-2"><Clock size={16}/> {FEATURED_POST.readTime}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 leading-tight group-hover:text-primary transition-colors">
                  {FEATURED_POST.title}
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                  {FEATURED_POST.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-3 font-bold text-gray-800">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                      <User size={20} />
                    </div>
                    {FEATURED_POST.author}
                  </span>
                  <button className="text-white bg-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-primaryDark hover:shadow-lg transition-all">
                    Đọc ngay <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </section>

        {/* Recent Posts Grid */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold mb-10 text-gray-900">Bài viết mới nhất</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {POSTS.map((post, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <article className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative z-10">
                  {/* Fake Image Placeholder using Gradients */}
                  <div className={`h-64 w-full bg-gradient-to-br ${post.coverColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
                    <span className="absolute top-6 left-6 bg-white/90 backdrop-blur text-gray-900 text-sm font-extrabold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500 mb-6">
                      <time className="flex items-center gap-2"><Calendar size={16}/> {post.date}</time>
                      <span className="flex items-center gap-2"><Clock size={16}/> {post.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-extrabold mb-6 text-gray-900 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                      <span className="font-bold text-gray-700">{post.author}</span>
                      <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                        Đọc tiếp <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-6 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-80 h-80 bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-30 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
               
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">Đừng bỏ lỡ bí kíp học tập</h2>
               <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
                 Tham gia cùng 10,000+ học viên và giáo viên khác. Nhận email định kỳ về các mẹo thi IELTS và tài liệu độc quyền từ EduTech.
               </p>
               
               <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                 <input 
                   type="email" 
                   placeholder="Nhập địa chỉ Email của bạn..." 
                   className="flex-1 px-8 py-5 rounded-2xl text-gray-900 outline-none focus:ring-4 focus:ring-primary/50 text-lg font-medium shadow-xl" 
                   required
                 />
                 <button type="submit" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-primaryDark hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                   Đăng ký <ArrowRight size={24}/>
                 </button>
               </form>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default BlogPage;