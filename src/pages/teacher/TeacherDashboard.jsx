import React from 'react';
import { BookOpen, Users, FileText, Clock, Calendar, PlayCircle, Sparkles, MoreVertical } from 'lucide-react';

const TeacherDashboard = () => {
  // Dữ liệu mẫu (Mock Data)
  const STATS = [
    { label: "Lớp đang phụ trách", value: "4", icon: <BookOpen size={24} className="text-blue-500"/>, bg: "bg-blue-50" },
    { label: "Tổng học viên", value: "128", icon: <Users size={24} className="text-emerald-500"/>, bg: "bg-emerald-50" },
    { label: "Bài tập chờ chấm", value: "15", icon: <FileText size={24} className="text-amber-500"/>, bg: "bg-amber-50" },
    { label: "Giờ dạy trong tuần", value: "18h", icon: <Clock size={24} className="text-purple-500"/>, bg: "bg-purple-50" },
  ];

  const SCHEDULE_TODAY = [
    { time: "08:00 - 09:30", class: "IELTS Master 7.0+", room: "Phòng 102", type: "Offline", status: "Hoàn thành" },
    { time: "14:00 - 15:30", class: "Giao tiếp cơ bản (CB-02)", room: "Zoom Meeting", type: "Online", status: "Đang diễn ra" },
    { time: "18:00 - 19:30", class: "IELTS Intensive Writing", room: "Phòng 205", type: "Offline", status: "Sắp tới" },
  ];

  const AI_GRADING_TASKS = [
    { student: "Nguyễn Văn A", task: "IELTS Writing Task 2", aiScore: "6.5", time: "15 phút trước" },
    { student: "Trần Thị B", task: "IELTS Writing Task 1", aiScore: "7.0", time: "1 giờ trước" },
    { student: "Lê Hoàng C", task: "Speaking Mock Test", aiScore: "5.5", time: "2 giờ trước" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
            <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cột chia Grid: Lịch dạy & Chấm thi AI */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Lịch dạy hôm nay */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Lịch dạy hôm nay</h3>
            <button className="text-primary text-sm font-semibold hover:underline">Xem toàn bộ lịch</button>
          </div>
          
          <div className="space-y-4">
            {SCHEDULE_TODAY.map((item, idx) => (
              <div key={idx} className="flex items-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition group">
                <div className="w-24 font-bold text-gray-900">{item.time}</div>
                <div className="w-2 h-12 bg-gray-200 rounded-full mx-4 group-hover:bg-primary transition"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg">{item.class}</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <Calendar size={14}/> {item.room} ({item.type})
                  </p>
                </div>
                <div>
                  {item.status === 'Đang diễn ra' ? (
                    <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-md hover:bg-primaryDark">
                      <PlayCircle size={16}/> Vào lớp
                    </button>
                  ) : (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === 'Hoàn thành' ? 'bg-gray-100 text-gray-500' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trợ lý AI Chấm bài */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Sparkles size={20} className="text-amber-500"/> Trợ lý AI chấm bài
            </h3>
            <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={20}/></button>
          </div>
          
          <p className="text-sm text-gray-500 mb-4">AI đã sơ khảo 15 bài tập mới. Vui lòng duyệt lại trước khi gửi điểm cho học viên.</p>
          
          <div className="space-y-4">
            {AI_GRADING_TASKS.map((task, idx) => (
              <div key={idx} className="p-4 bg-amber-50/50 border border-amber-100 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800">{task.student}</h4>
                  <span className="text-xs text-gray-500">{task.time}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{task.task}</p>
                <div className="flex justify-between items-center">
                  <div className="bg-white px-2 py-1 rounded border border-gray-200 text-sm font-bold text-primary">
                    Dự kiến: {task.aiScore}
                  </div>
                  <button className="text-sm font-bold text-amber-600 hover:text-amber-700">
                    Duyệt ngay &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 bg-gray-50 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition">
            Xem tất cả bài tập
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;