import React, { useState } from 'react';
import { 
  Users, Calendar, Video, Clock, 
  ChevronRight, UserCircle2, ArrowLeft, BookOpen, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentClasses = () => {
  const [activeClass, setActiveClass] = useState(null);

  const MY_CLASSES = [
    {
      id: 'c1',
      code: '12A1',
      name: 'Toán Đại số 12',
      teacher: 'Thầy Hoàng Lê',
      students: 45,
      type: 'Online',
      color: 'emerald'
    },
    {
      id: 'c2',
      code: 'VL12',
      name: 'Vật lý Cơ bản 12',
      teacher: 'Cô Mai Phương',
      students: 38,
      type: 'Offline',
      color: 'blue'
    },
    {
      id: 'c3',
      code: 'IELTS',
      name: 'Tiếng Anh IELTS 7.0+',
      teacher: 'Thầy David',
      students: 15,
      type: 'Hybrid',
      color: 'purple'
    }
  ];

  const CLASSMATES = [
    { id: 1, name: 'Nguyễn Văn An' },
    { id: 2, name: 'Trần Thị Bình' },
    { id: 3, name: 'Lê Hoàng Cường' },
    { id: 4, name: 'Phạm Thu Dung' },
    { id: 5, name: 'Hoàng Quốc Đạt' },
    { id: 6, name: 'Đặng Yến Nhi' },
  ];

  const getColorClasses = (colorName) => {
    switch (colorName) {
      case 'emerald': return { bg: 'bg-emerald-500', text: 'text-emerald-500', light: 'bg-emerald-50', hover: 'hover:border-emerald-200' };
      case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-500', light: 'bg-blue-50', hover: 'hover:border-blue-200' };
      case 'purple': return { bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-50', hover: 'hover:border-purple-200' };
      default: return { bg: 'bg-gray-500', text: 'text-gray-500', light: 'bg-gray-50', hover: 'hover:border-gray-200' };
    }
  };

  const renderClassList = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-gray-900">Các lớp đang tham gia ({MY_CLASSES.length})</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MY_CLASSES.map(cls => {
          const colors = getColorClasses(cls.color);
          return (
            <div 
              key={cls.id} 
              onClick={() => setActiveClass(cls)}
              className={`bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 cursor-pointer transition-all hover:shadow-md ${colors.hover} group relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${colors.light} rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-14 h-14 ${colors.bg} text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-sm`}>
                    {cls.code}
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black uppercase rounded-full">
                    {cls.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-extrabold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{cls.name}</h3>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-4">
                  <UserCircle2 size={16}/> GV: {cls.teacher}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1 text-sm font-bold text-gray-500">
                    <Users size={16}/> {cls.students} Học viên
                  </div>
                  <div className={`w-8 h-8 rounded-full ${colors.light} ${colors.text} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <ChevronRight size={16}/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  const renderClassDetail = () => {
    const colors = getColorClasses(activeClass.color);
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
        <button 
          onClick={() => setActiveClass(null)}
          className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 w-fit"
        >
          <ArrowLeft size={18}/> Quay lại danh sách lớp
        </button>

        <div className={`bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-64 h-64 ${colors.light} rounded-bl-full -z-0 opacity-50`}></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className={`w-24 h-24 ${colors.bg} text-white rounded-3xl flex items-center justify-center font-black text-3xl shadow-lg border-4 border-white flex-shrink-0`}>
                {activeClass.code}
              </div>
              <div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-black uppercase rounded-full mb-3 inline-block">Môn học: {activeClass.name}</span>
                <h2 className="text-3xl font-extrabold text-gray-900">{activeClass.name}</h2>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                    <UserCircle2 size={18}/> Giảng viên: {activeClass.teacher}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                    <Users size={18}/> {activeClass.students} Học sinh
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                    <MapPin size={18}/> Khóa học {activeClass.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Nút vào lớp Online */}
            {(activeClass.type === 'Online' || activeClass.type === 'Hybrid') && (
              <button className={`w-full md:w-auto px-6 py-4 ${colors.bg} hover:opacity-90 text-white rounded-2xl font-extrabold shadow-lg transition-all flex items-center justify-center gap-2 group flex-shrink-0`}>
                <Video size={20} className="animate-pulse" /> 
                Tham gia phòng Live
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bài giảng của lớp này */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <BookOpen size={20} className={colors.text} /> Bài giảng môn này
              </h3>
              <button className={`text-sm font-bold ${colors.text} hover:opacity-80`}>Xem tất cả</button>
            </div>
            
            <div className="space-y-4 flex-1">
              {[
                { title: 'Bài 3: Cực trị hàm số (Phần 2)', type: 'video', date: 'Hôm qua' },
                { title: 'Tài liệu ôn tập Chương 1', type: 'pdf', date: 'Tuần trước' },
              ].map((lesson, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl ${colors.light} ${colors.text} flex items-center justify-center`}>
                    {lesson.type === 'video' ? <Video size={20}/> : <BookOpen size={20}/>}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{lesson.title}</h4>
                    <p className="text-xs font-bold text-gray-400 mt-1">Đã đăng: {lesson.date}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300"/>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-3 bg-gray-50 text-gray-600 rounded-xl font-bold hover:bg-gray-100 transition-colors border border-gray-100">
              Chuyển đến Kho Học liệu
            </button>
          </div>

          {/* Bạn cùng lớp */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6">Bạn cùng lớp ({CLASSMATES.length})</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLASSMATES.map(student => (
                <div key={student.id} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-50 hover:border-gray-200">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-gray-600 font-bold`}>
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 truncate w-32" title={student.name}>{student.name}</p>
                    <p className="text-xs font-medium text-gray-500">ID: HS00{student.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Lớp học & Lịch</h1>
          <p className="text-gray-500 mt-1 font-medium">Quản lý nhiều lớp học và theo dõi thời khóa biểu của bạn.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Cột trái: Quản lý lớp học (Chiếm 2 cột) */}
        <div className="xl:col-span-2">
          <AnimatePresence mode="wait">
            {activeClass ? renderClassDetail() : renderClassList()}
          </AnimatePresence>
        </div>

        {/* Cột phải: Lịch học tổng hợp */}
        <div className="space-y-8">
          
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm sticky top-32">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="text-emerald-500" size={24}/> Lịch học tuần này
            </h3>
            
            <div className="space-y-6">
              
              <div className="relative pl-6 border-l-2 border-emerald-100 pb-2">
                <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-0 border-4 border-white"></div>
                <p className="text-sm font-black text-emerald-600 mb-1">Hôm nay, Thứ 3</p>
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded">12A1</span>
                    <h4 className="font-bold text-gray-900">Toán Đại số 12</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-500">
                      <Clock size={14}/> 14:00 - 15:30
                    </span>
                    <span className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-white border border-emerald-100 w-fit px-2 py-1 rounded-md">
                      <Video size={14}/> Google Meet
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-100 pb-2">
                <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-0 border-4 border-white"></div>
                <p className="text-sm font-black text-gray-400 mb-1">Ngày mai, Thứ 4</p>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 mt-2 hover:border-purple-200 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-black uppercase rounded">IELTS</span>
                    <h4 className="font-bold text-gray-900">Tiếng Anh IELTS 7.0+</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-500">
                      <Clock size={14}/> 19:00 - 21:00
                    </span>
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-gray-50 border border-gray-100 w-fit px-2 py-1 rounded-md">
                      <Video size={14}/> Zoom Link
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-100 pb-2">
                <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-0 border-4 border-white"></div>
                <p className="text-sm font-black text-gray-400 mb-1">Thứ 5, 20/10</p>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 mt-2 hover:border-blue-200 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-black uppercase rounded">VL12</span>
                    <h4 className="font-bold text-gray-900">Vật lý Cơ bản 12</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-500">
                      <Clock size={14}/> 08:00 - 09:30
                    </span>
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-gray-50 border border-gray-100 w-fit px-2 py-1 rounded-md">
                      <MapPin size={14}/> Lớp Offline (Phòng 302)
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentClasses;
