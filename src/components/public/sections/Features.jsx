import React, { useState } from 'react';
import { Zap, BookOpen, Monitor, BarChart2, CheckCircle, GraduationCap, Users } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('student');

  const studentFeatures = [
    { 
      title: "Chấm điểm AI Tức thì", 
      icon: <Zap size={28}/>, 
      desc: "Nộp bài và nhận điểm ngay lập tức. AI phân tích lỗi sai chi tiết đến từng từ vựng và ngữ pháp giúp bạn nhanh chóng cải thiện." 
    },
    { 
      title: "Kho đề thi chuẩn Cambridge", 
      icon: <BookOpen size={28}/>, 
      desc: "Luyện tập thả ga với hàng ngàn đề thi thật được cập nhật liên tục. Trải nghiệm làm bài y hệt phòng thi thực tế." 
    },
    { 
      title: "Lộ trình học Cá nhân hoá", 
      icon: <BarChart2 size={28}/>, 
      desc: "Dựa vào điểm yếu của bạn, hệ thống tự động đề xuất các bài tập bổ trợ giúp tối ưu thời gian ôn luyện." 
    }
  ];

  const teacherFeatures = [
    { 
      title: "Quản lý Lớp học Thông minh", 
      icon: <Users size={28}/>, 
      desc: "Theo dõi tiến độ của từng học viên, điểm danh tự động và giao bài tập cho cả lớp chỉ với 1 click." 
    },
    { 
      title: "Giải phóng thời gian chấm bài", 
      icon: <CheckCircle size={28}/>, 
      desc: "Hệ thống tự động chấm điểm các kỹ năng Reading & Listening. Trợ lý AI gợi ý nhận xét cho bài Writing & Speaking." 
    },
    { 
      title: "Dashboard Phân tích 360°", 
      icon: <Monitor size={28}/>, 
      desc: "Nắm bắt nhanh chóng điểm yếu chung của toàn lớp để điều chỉnh giáo án giảng dạy kịp thời và hiệu quả." 
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Nền tảng được thiết kế cho <span className="text-primary">Thành công</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Dù bạn là học sinh đang khao khát chinh phục đỉnh cao, hay giáo viên muốn tối ưu hóa việc giảng dạy.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-full relative">
            <button 
              onClick={() => setActiveTab('student')}
              className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === 'student' ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <GraduationCap size={20} /> Cho Học Sinh
            </button>
            <button 
              onClick={() => setActiveTab('teacher')}
              className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === 'teacher' ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <BookOpen size={20} /> Cho Giáo Viên
            </button>
            
            {/* Sliding indicator */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-primary rounded-full shadow-md transition-transform duration-300 ease-out`}
              style={{ transform: activeTab === 'student' ? 'translateX(0)' : 'translateX(100%)' }}
            ></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {(activeTab === 'student' ? studentFeatures : teacherFeatures).map((f, i) => (
            <div key={i} className="p-10 bg-gray-50 border border-gray-100 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;