import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, Filter, Plus, ChevronLeft, ChevronRight, 
  Users, MapPin, MoreHorizontal, X, Calculator, Book, Beaker, PlayCircle, Video 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherSchedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('Tất cả');

  // Dữ liệu mẫu (Multi-subject Mock Data)
  const SCHEDULE_DATA = [
    {
      date: "Hôm nay, 1 tháng 7",
      classes: [
        { 
          id: 1, 
          time: "07:30 - 09:00", 
          subject: "Toán Đại số", 
          topic: "Ôn tập Hàm số & Đồ thị",
          className: "Lớp 12A1", 
          room: "Phòng 302", 
          type: "Offline", 
          students: 45, 
          status: "Đang diễn ra",
          icon: <Calculator size={20} className="text-blue-500"/>,
          bg: "bg-blue-50",
          border: "border-blue-100"
        },
        { 
          id: 2, 
          time: "09:15 - 10:45", 
          subject: "Vật Lý", 
          topic: "Khúc xạ ánh sáng (Thực hành)",
          className: "Lớp 11B1", 
          room: "Phòng Thí nghiệm 1", 
          type: "Offline", 
          students: 42, 
          status: "Sắp tới",
          icon: <Beaker size={20} className="text-cyan-500"/>,
          bg: "bg-cyan-50",
          border: "border-cyan-100"
        },
        { 
          id: 3, 
          time: "14:00 - 16:30", 
          subject: "Ngữ Văn", 
          topic: "Phân tích tác phẩm Truyện Kiều",
          className: "Lớp 10C2", 
          room: "Google Meet", 
          type: "Online", 
          students: 38, 
          status: "Sắp tới",
          icon: <Book size={20} className="text-amber-500"/>,
          bg: "bg-amber-50",
          border: "border-amber-100"
        }
      ]
    },
    {
      date: "Ngày mai, 2 tháng 7",
      classes: [
        { 
          id: 4, 
          time: "08:00 - 09:30", 
          subject: "Toán Hình học", 
          topic: "Hình học Không gian",
          className: "Lớp 12A1", 
          room: "Phòng 302", 
          type: "Offline", 
          students: 45, 
          status: "Chưa bắt đầu",
          icon: <Calculator size={20} className="text-blue-500"/>,
          bg: "bg-gray-50",
          border: "border-gray-100"
        },
      ]
    }
  ];

  const filteredData = SCHEDULE_DATA.map(day => ({
    ...day,
    classes: day.classes.filter(c => filter === 'Tất cả' || c.type === filter)
  })).filter(day => day.classes.length > 0);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* 1. Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Lịch giảng dạy</h1>
          <p className="text-gray-500 mt-1 font-medium">Quản lý thời khóa biểu và các lớp học đa môn của bạn.</p>
          
          <div className="flex gap-2 mt-4 bg-white p-1.5 rounded-xl border border-gray-200 w-fit shadow-sm">
            {['Tất cả', 'Offline', 'Online'].map(type => (
              <button 
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 text-sm font-bold rounded-lg transition-all ${
                  filter === type 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          <Plus size={20}/> Thêm tiết học mới
        </button>
      </div>

      {/* 2. Content Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Main Schedule Timeline (Left Column 2/3) */}
        <div className="xl:col-span-2 space-y-8">
          {filteredData.map((day, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-3">
                <CalendarIcon size={24} className="text-primary" />
                {day.date}
              </h2>
              
              <div className="space-y-4">
                {day.classes.map((cls) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.01 }}
                    key={cls.id} 
                    className={`bg-white p-6 rounded-[2rem] border ${cls.border} shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 group relative overflow-hidden`}
                  >
                    {/* Background tint for active class */}
                    {cls.status === 'Đang diễn ra' && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                    )}

                    {/* Time & Status Column */}
                    <div className="md:w-40 flex-shrink-0 flex md:flex-col justify-between md:justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-6">
                      <span className="font-extrabold text-gray-900 text-xl tracking-tight">{cls.time}</span>
                      <span className={`text-xs uppercase font-extrabold mt-2 px-3 py-1 rounded-full w-fit flex items-center gap-1 shadow-sm ${
                        cls.status === 'Đang diễn ra' 
                          ? 'bg-emerald-100 text-emerald-700 ring-2 ring-emerald-100' 
                          : cls.status === 'Sắp tới'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600'
                      }`}>
                        {cls.status === 'Đang diễn ra' && <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>}
                        {cls.status}
                      </span>
                    </div>

                    {/* Class Details Column */}
                    <div className="flex-1 space-y-3 relative z-10">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className={`p-1.5 rounded-lg ${cls.bg}`}>
                              {cls.icon}
                            </div>
                            <span className="font-bold text-gray-500 text-sm">{cls.subject}</span>
                          </div>
                          <h3 className="font-extrabold text-2xl text-gray-900 group-hover:text-primary transition-colors">{cls.topic}</h3>
                          <p className="font-bold text-gray-600 text-lg mt-1">{cls.className}</p>
                        </div>
                        <button className="text-gray-300 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-xl">
                          <MoreHorizontal size={20}/>
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 bg-gray-50 p-3 rounded-2xl w-fit">
                        <span className="flex items-center gap-2">
                          {cls.type === 'Online' ? <Video size={16} className="text-primary"/> : <MapPin size={16} className="text-amber-600"/>}
                          {cls.room}
                        </span>
                        <span className="w-px h-5 bg-gray-200"></span>
                        <span className="flex items-center gap-2">
                          <Users size={16} className="text-blue-500"/> 
                          {cls.students} học sinh
                        </span>
                      </div>
                    </div>

                    {/* Action Column */}
                    <div className="md:w-32 flex items-center justify-end md:justify-center relative z-10">
                      {cls.status === 'Đang diễn ra' ? (
                        <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex flex-col items-center gap-1 shadow-lg shadow-primary/30 hover:bg-primaryDark transition-all hover:scale-105">
                          <PlayCircle size={24}/>
                          <span className="text-xs">Vào lớp</span>
                        </button>
                      ) : (
                        <button className="w-full py-3 bg-white border-2 border-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 hover:border-gray-200 transition-all text-sm">
                          Chi tiết
                        </button>
                      )}
                    </div>

                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Widgets (Right Column 1/3) */}
        <div className="space-y-6">
          {/* Calendar Widget */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-extrabold text-lg text-gray-900">Tháng 7, 2026</h3>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500"><ChevronLeft size={20}/></button>
                  <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500"><ChevronRight size={20}/></button>
                </div>
             </div>
             
             {/* Days of week */}
             <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-400 mb-2">
               <div>T2</div><div>T3</div><div>T4</div><div>T5</div><div>T6</div><div>T7</div><div>CN</div>
             </div>
             
             {/* Dates Grid */}
             <div className="grid grid-cols-7 gap-1 text-center text-sm font-bold">
                {[...Array(31)].map((_, i) => {
                  const isToday = i === 0;
                  const hasClass = [0, 1, 4, 12].includes(i); // Random mock days with classes
                  return (
                    <div 
                      key={i} 
                      className={`p-2 rounded-xl cursor-pointer relative transition-all ${
                        isToday 
                        ? 'bg-primary text-white shadow-md shadow-primary/30' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {i + 1}
                      {hasClass && !isToday && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></div>
                      )}
                    </div>
                  )
                })}
             </div>
          </div>

          {/* Quick Tasks Widget */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 blur-2xl rounded-full"></div>
             <h3 className="font-extrabold text-lg mb-2 relative z-10">Cần chuẩn bị</h3>
             <p className="text-gray-400 text-sm mb-6 relative z-10">Các tài liệu cần upload trước giờ học.</p>
             
             <ul className="space-y-4 relative z-10">
               <li className="flex gap-3 items-start">
                 <div className="mt-1"><div className="w-2 h-2 rounded-full bg-rose-500"></div></div>
                 <div>
                   <p className="font-bold text-sm">Đề Thi thử THPTQG Toán</p>
                   <p className="text-xs text-gray-400">Lớp 12A1 • Hạn: Hôm nay</p>
                 </div>
               </li>
               <li className="flex gap-3 items-start">
                 <div className="mt-1"><div className="w-2 h-2 rounded-full bg-amber-500"></div></div>
                 <div>
                   <p className="font-bold text-sm">Slide Bài giảng Truyện Kiều</p>
                   <p className="text-xs text-gray-400">Lớp 10C2 • Hạn: Ngày mai</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>
      </div>

      {/* 3. Modal Thêm mới (Glassmorphism) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl border border-gray-100"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-extrabold text-gray-900">Thêm lịch giảng dạy</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
                >
                  <X size={20}/>
                </button>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Môn học & Chủ đề</label>
                  <input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" placeholder="VD: Toán - Ôn tập Hàm số..." />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Lớp học</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none">
                      <option>Chọn Lớp</option>
                      <option>Lớp 12A1 (Toán)</option>
                      <option>Lớp 11B1 (Lý)</option>
                      <option>Lớp 10C2 (Văn)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Hình thức</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none">
                      <option>Offline (Tại lớp)</option>
                      <option>Online (Zoom/Meet)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Giờ bắt đầu</label>
                    <input type="time" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Giờ kết thúc</label>
                    <input type="time" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" />
                  </div>
                </div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-4 mt-4 bg-primary text-white rounded-2xl font-extrabold text-lg shadow-lg hover:shadow-xl hover:bg-primaryDark transition-all"
                >
                  Tạo lịch giảng dạy
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeacherSchedule;