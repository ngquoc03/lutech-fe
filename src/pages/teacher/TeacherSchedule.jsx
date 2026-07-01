import React, { useState } from 'react';
import { Calendar, Filter, Plus, ChevronLeft, ChevronRight, BookOpen, Clock, Users, FileText, MapPin, Video, MoreHorizontal, X } from 'lucide-react';

const TeacherSchedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('Tất cả');

  // Dữ liệu cũ của bạn (đã được giữ nguyên)
  const SCHEDULE_DATA = [
    {
      date: "Hôm nay, 1 tháng 7",
      classes: [
        { id: 1, time: "07:30 - 09:00", subject: "Toán Đại số", className: "Lớp 10A1", room: "Phòng 302", type: "Offline", students: 45, status: "Đang diễn ra" },
        { id: 2, time: "09:15 - 10:45", subject: "Toán Hình học", className: "Lớp 11B1", room: "Phòng 205", type: "Offline", students: 42, status: "Sắp tới" },
      ]
    }
  ];

  // Logic lọc dữ liệu
  const filteredClasses = SCHEDULE_DATA[0].classes.filter(c => 
    filter === 'Tất cả' || c.type === filter
  );

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      
      {/* 1. Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lịch giảng dạy</h1>
          <div className="flex gap-2 mt-2">
            {['Tất cả', 'Offline', 'Online'].map(type => (
              <button 
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1 text-xs font-bold rounded-full border transition ${filter === type ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primaryDark transition-all"
        >
          <Plus size={18}/> Thêm tiết học/Đề thi
        </button>
      </div>

      {/* 2. Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {SCHEDULE_DATA.map((day, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-lg font-bold text-gray-800 border-b pb-2">{day.date}</h2>
              {filteredClasses.map((cls) => (
                <div key={cls.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-4">
                  <div className="md:w-32 flex-shrink-0 flex md:flex-col justify-center">
                    <span className="font-bold text-primary">{cls.time}</span>
                    <span className={`text-[10px] uppercase font-bold mt-1 px-2 py-0.5 rounded w-fit ${cls.status === 'Đang diễn ra' ? 'bg-green-100 text-green-700' : 'bg-gray-100'}`}>
                      {cls.status}
                    </span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg">{cls.subject} - {cls.className}</h3>
                      <button className="text-gray-400 hover:text-primary"><MoreHorizontal size={18}/></button>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={14}/> {cls.room}</span>
                      <span className="flex items-center gap-1"><Users size={14}/> {cls.students} học sinh</span>
                    </div>
                    <button className="text-sm font-bold text-primary hover:underline mt-2 block">
                      Xem danh sách học sinh &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Sidebar Mini */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
             <h3 className="font-bold mb-4">Lịch tháng</h3>
             <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {[...Array(31)].map((_, i) => (
                  <div key={i} className={`p-2 rounded-lg cursor-pointer ${i === 0 ? 'bg-primary text-white font-bold' : 'hover:bg-gray-100'}`}>{i + 1}</div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* 3. Modal Thêm mới */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Thêm tiết học hoặc Đề thi</h2>
              <button onClick={() => setIsModalOpen(false)}><X size={20}/></button>
            </div>
            <div className="space-y-4">
              <input className="w-full p-3 border rounded-xl" placeholder="Tên môn học hoặc Tên đề thi" />
              <select className="w-full p-3 border rounded-xl bg-white">
                <option>Chọn Lớp</option>
                <option>Lớp 10A1</option>
                <option>Lớp 11B1</option>
              </select>
              <button className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primaryDark">Lưu thông tin</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherSchedule;