import React from 'react';
import { ArrowRight, BookOpen, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-center overflow-hidden" style={{ perspective: 1000 }}>
      {/* Animated 3D Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -30, 0], 
            rotate: [0, 15, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-32 h-32 bg-primary/20 rounded-2xl blur-xl backdrop-blur-3xl transform rotate-12"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div 
          animate={{ 
            y: [0, 40, 0], 
            x: [0, 20, 0],
            rotate: [0, -20, 20, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[15%] w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-[25%] w-24 h-24 bg-purple-500/10 rounded-lg blur-lg transform rotate-45"
        />
      </div>

      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-block py-1.5 px-5 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20 shadow-sm">
          🌟 Nền tảng Học tập & Giảng dạy Tiếng Anh Thông minh
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
          Học tập cá nhân hoá. <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Giảng dạy dễ dàng hơn.
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          EduTech mang đến trải nghiệm học tập đột phá với AI tự động chấm điểm và cá nhân hóa lộ trình cho học sinh, đồng thời giảm thiểu 80% khối lượng công việc quản lý cho giáo viên.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-4">
          <motion.button 
            whileHover={{ scale: 1.05, rotateY: 5, translateZ: 10 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
          >
            Bắt đầu học miễn phí <ArrowRight size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, rotateY: -5, translateZ: 10 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-gray-100 text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg shadow-sm hover:bg-gray-50 hover:border-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <BookOpen size={20} className="text-blue-500" /> Dành cho Giáo viên
          </motion.button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200/60 flex flex-wrap justify-center gap-8 items-center text-sm font-medium text-gray-500">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> +10,000 Học sinh</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> +500 Giáo viên</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Tích hợp AI thông minh</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;