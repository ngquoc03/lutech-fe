import React from 'react';
import { 
  BookOpen, Users, FileText, Clock, Calendar, 
  PlayCircle, Sparkles, MoreVertical, CheckCircle, 
  AlertCircle, ChevronRight, Calculator, Book, Beaker
} from 'lucide-react';
import { motion } from 'framer-motion';

const TeacherDashboard = () => {
  // Dữ liệu mẫu đa môn (Multi-subject Mock Data)
  const STATS = [
    { label: "Lớp đang phụ trách", value: "6", icon: <BookOpen size={24} className="text-blue-600"/>, bg: "bg-blue-100", trend: "+1 lớp mới" },
    { label: "Tổng học sinh", value: "245", icon: <Users size={24} className="text-emerald-600"/>, bg: "bg-emerald-100", trend: "100% sĩ số" },
    { label: "Bài tập chờ duyệt", value: "28", icon: <FileText size={24} className="text-amber-600"/>, bg: "bg-amber-100", trend: "Cần xử lý hôm nay" },
    { label: "Học sinh cần chú ý", value: "4", icon: <AlertCircle size={24} className="text-rose-600"/>, bg: "bg-rose-100", trend: "Kết quả giảm sút" },
  ];

  const SCHEDULE_TODAY = [
    { 
      time: "07:30 - 09:00", 
      subject: "Toán Đại số 12", 
      topic: "Ôn tập Hàm số & Đồ thị (Đề THPTQG)", 
      room: "Phòng 302", 
      type: "Offline", 
      status: "Hoàn thành",
      icon: <Calculator size={18} className="text-blue-500"/>
    },
    { 
      time: "09:15 - 10:45", 
      subject: "Vật Lý 11", 
      topic: "Khúc xạ ánh sáng (Thực hành)", 
      room: "Phòng Thí nghiệm 1", 
      type: "Offline", 
      status: "Đang diễn ra",
      icon: <Beaker size={18} className="text-cyan-500"/>
    },
    { 
      time: "14:00 - 16:30", 
      subject: "Ngữ Văn 10", 
      topic: "Phân tích tác phẩm Truyện Kiều", 
      room: "Google Meet", 
      type: "Online", 
      status: "Sắp tới",
      icon: <Book size={18} className="text-amber-500"/>
    },
  ];

  const AI_GRADING_TASKS = [
    { 
      student: "Nguyễn Văn A (Toán 12)", 
      task: "Giải phương trình Logarit", 
      aiFeedback: "Sai bước đặt điều kiện", 
      aiScore: "7.5/10", 
      time: "15 phút trước",
      color: "border-blue-200 bg-blue-50/50"
    },
    { 
      student: "Trần Thị B (Văn 10)", 
      task: "Nghị luận xã hội (500 chữ)", 
      aiFeedback: "Luận điểm 2 thiếu dẫn chứng", 
      aiScore: "8.0/10", 
      time: "1 giờ trước",
      color: "border-amber-200 bg-amber-50/50"
    },
    { 
      student: "Lê Hoàng C (Lý 11)", 
      task: "Bài tập Khúc xạ", 
      aiFeedback: "Sai công thức góc khúc xạ", 
      aiScore: "6.0/10", 
      time: "2 giờ trước",
      color: "border-cyan-200 bg-cyan-50/50"
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Tổng quan Giảng dạy</h1>
          <p className="text-gray-500 mt-1 font-medium">Theo dõi lịch trình và hiệu suất học tập của học sinh hôm nay.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            Tạo bài tập mới
          </button>
          <button className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primaryDark hover:shadow-lg transition-all flex items-center gap-2">
            <PlayCircle size={18} /> Bắt đầu lớp học
          </button>
        </div>
      </div>

      {/* Quick Stats (LMS Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, idx) => (
          <motion.div 
            whileHover={{ y: -4 }}
            key={idx} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between cursor-pointer group"
          >
            <div>
              <p className="text-gray-500 text-sm font-bold mb-2">{stat.label}</p>
              <p className="text-3xl font-extrabold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-xs font-semibold text-gray-400 group-hover:text-primary transition-colors">{stat.trend}</p>
            </div>
            <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
              {stat.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid: Lịch dạy & Chấm thi AI */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Lịch dạy hôm nay (Left Column - 2/3) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 relative overflow-hidden">
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900">Lịch giảng dạy hôm nay</h2>
              <button className="text-primary font-bold hover:underline flex items-center gap-1">
                Xem thời khóa biểu <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              {SCHEDULE_TODAY.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center p-5 border border-gray-100 rounded-2xl hover:border-primary/30 hover:shadow-md bg-white transition-all group">
                  <div className="w-32 font-extrabold text-gray-900 mb-2 sm:mb-0 text-lg tracking-tight">{item.time}</div>
                  
                  {/* Timeline dot/line */}
                  <div className="hidden sm:flex flex-col items-center mx-6">
                    <div className={`w-3 h-3 rounded-full ${item.status === 'Đang diễn ra' ? 'bg-primary ring-4 ring-primary/20 animate-pulse' : 'bg-gray-300 group-hover:bg-primary transition-colors'}`}></div>
                    {idx !== SCHEDULE_TODAY.length - 1 && <div className="w-0.5 h-12 bg-gray-100 my-1"></div>}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {item.icon}
                      <span className="font-bold text-gray-500 text-sm">{item.subject}</span>
                    </div>
                    <h3 className="font-extrabold text-gray-900 text-xl mb-1 group-hover:text-primary transition-colors">{item.topic}</h3>
                    <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <Calendar size={14}/> {item.room} ({item.type})
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-0 sm:ml-4">
                    {item.status === 'Đang diễn ra' ? (
                      <button className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:bg-primaryDark transition-all">
                        <PlayCircle size={18}/> Vào lớp
                      </button>
                    ) : (
                      <div className={`px-4 py-2 rounded-xl text-sm font-bold text-center border ${
                        item.status === 'Hoàn thành' 
                          ? 'bg-gray-50 border-gray-200 text-gray-500 flex items-center justify-center gap-2' 
                          : 'bg-blue-50 border-blue-100 text-blue-600'
                      }`}>
                        {item.status === 'Hoàn thành' && <CheckCircle size={16} />}
                        {item.status}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Submissions / Thống kê nhanh */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Trạng thái Nộp bài (Tuần này)</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-gray-500 font-bold mb-2 text-sm">Toán Đại số 12</p>
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-4xl font-extrabold text-gray-900">42/45</span>
                  <span className="text-sm font-bold text-emerald-600 mb-1">93% nộp đủ</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>
              <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-gray-500 font-bold mb-2 text-sm">Ngữ Văn 10</p>
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-4xl font-extrabold text-gray-900">38/40</span>
                  <span className="text-sm font-bold text-emerald-600 mb-1">95% nộp đủ</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trợ lý AI Chấm bài (Right Column - 1/3) */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 relative overflow-hidden h-fit">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 opacity-10 rounded-bl-full pointer-events-none"></div>

          <div className="flex justify-between items-center mb-6 relative z-10">
            <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
              <Sparkles size={22} className="text-amber-500"/> Trợ lý AI (Sơ khảo)
            </h2>
            <button className="text-gray-400 hover:text-gray-900 transition-colors"><MoreVertical size={20}/></button>
          </div>
          
          <p className="text-sm text-gray-600 mb-6 font-medium leading-relaxed relative z-10">
            Hệ thống AI đã sơ khảo xong <strong className="text-gray-900">28 bài tập đa môn</strong>. Các cảnh báo lỗi sai logic/công thức đã được đánh dấu đỏ. Vui lòng duyệt lại.
          </p>
          
          <div className="space-y-4 relative z-10">
            {AI_GRADING_TASKS.map((task, idx) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                key={idx} 
                className={`p-5 rounded-2xl border ${task.color} transition-all cursor-pointer shadow-sm`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-extrabold text-gray-900">{task.student}</h4>
                  <span className="text-xs font-bold text-gray-500 bg-white px-2 py-1 rounded-md shadow-sm">{task.time}</span>
                </div>
                <p className="text-sm font-bold text-gray-700 mb-1">{task.task}</p>
                <p className="text-sm font-medium text-rose-600 mb-4 bg-white/50 inline-block px-2 py-0.5 rounded flex items-center gap-1">
                  <AlertCircle size={14} /> Gợi ý AI: {task.aiFeedback}
                </p>
                
                <div className="flex justify-between items-center border-t border-black/5 pt-3 mt-1">
                  <div className="font-bold text-gray-900">
                    Điểm sơ bộ: <span className="text-primary text-lg">{task.aiScore}</span>
                  </div>
                  <button className="text-sm font-extrabold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                    Duyệt ngay <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-4 bg-gray-50 text-gray-900 font-extrabold rounded-2xl hover:bg-gray-100 hover:shadow-inner transition-all relative z-10">
            Xem tất cả bài tập chờ duyệt
          </button>
        </div>

      </div>
    </div>
  );
};

export default TeacherDashboard;