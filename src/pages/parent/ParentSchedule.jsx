import React from 'react';
import { Calendar, Clock, MapPin, Video, Users } from 'lucide-react';

const ParentSchedule = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Lịch học của con</h1>
          <p className="text-gray-500 mt-1 font-medium">Theo dõi thời khóa biểu để nhắc nhở và đưa đón con đúng giờ.</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-bl-full -z-0 opacity-50"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          
          {/* Lịch Hôm nay */}
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="text-indigo-500" size={24}/> Hôm nay
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-indigo-50/80 rounded-2xl border border-indigo-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-indigo-500"></div>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-white text-indigo-700 text-[10px] font-black uppercase rounded-full shadow-sm">12A1</span>
                  <span className="text-sm font-black text-indigo-600 flex items-center gap-1"><Clock size={16}/> Sắp diễn ra</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4">Toán Đại số 12</h4>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-600">
                    <Clock size={16}/> 14:00 - 15:30
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-600">
                    <Users size={16}/> Thầy Hoàng Lê
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-indigo-600 bg-white border border-indigo-100 w-fit px-3 py-1.5 rounded-lg mt-1 shadow-sm">
                    <Video size={16}/> Học Online (Google Meet)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px bg-gray-100"></div>

          {/* Lịch Ngày mai */}
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2 text-gray-400">
              <Calendar size={24}/> Ngày mai
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black uppercase rounded-full">IELTS</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4">Tiếng Anh IELTS 7.0+</h4>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-500">
                    <Clock size={16}/> 19:00 - 21:00
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-500">
                    <Users size={16}/> Thầy David
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 border border-gray-200 w-fit px-3 py-1.5 rounded-lg mt-1">
                    <Video size={16}/> Học Online (Zoom)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px bg-gray-100"></div>

          {/* Lịch Sắp tới */}
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2 text-gray-400">
              <Calendar size={24}/> Thứ 5
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black uppercase rounded-full">VL12</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4">Vật lý Cơ bản 12</h4>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-500">
                    <Clock size={16}/> 08:00 - 09:30
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-500">
                    <Users size={16}/> Cô Mai Phương
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 border border-gray-200 w-fit px-3 py-1.5 rounded-lg mt-1">
                    <MapPin size={16}/> Lớp Offline (Phòng 302)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ParentSchedule;
