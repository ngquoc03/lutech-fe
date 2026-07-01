import React, { useState } from 'react';
import { 
  Users, Search, Filter, Calculator, Beaker, Book, 
  MoreVertical, Mail, Activity, GraduationCap, ArrowRight,
  TrendingUp, TrendingDown, Star, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  // MOCK DATA: Lớp học
  const CLASSES_DATA = [
    {
      id: 1,
      name: "Toán Đại số 12A1",
      schedule: "T2, T4 (07:30 - 09:00)",
      studentCount: 45,
      avgScore: 8.5,
      attendance: 98,
      icon: <Calculator size={24} className="text-blue-600"/>,
      color: "blue"
    },
    {
      id: 2,
      name: "Vật Lý 11B1",
      schedule: "T3, T5 (09:15 - 10:45)",
      studentCount: 42,
      avgScore: 7.2,
      attendance: 92,
      icon: <Beaker size={24} className="text-cyan-600"/>,
      color: "cyan"
    },
    {
      id: 3,
      name: "Ngữ Văn 10C2",
      schedule: "T2, T6 (14:00 - 16:30)",
      studentCount: 38,
      avgScore: 7.8,
      attendance: 95,
      icon: <Book size={24} className="text-amber-600"/>,
      color: "amber"
    }
  ];

  // MOCK DATA: Học sinh (hiển thị khi chọn lớp)
  const STUDENTS_DATA = [
    { id: "HS001", name: "Nguyễn Văn An", avatar: "https://i.pravatar.cc/150?u=1", score: 9.0, trend: "up", status: "Hoàn thành tốt" },
    { id: "HS002", name: "Trần Thị Bích", avatar: "https://i.pravatar.cc/150?u=2", score: 6.5, trend: "down", status: "Cần chú ý" },
    { id: "HS003", name: "Lê Hoàng Cường", avatar: "https://i.pravatar.cc/150?u=3", score: 8.2, trend: "up", status: "Tiến bộ" },
    { id: "HS004", name: "Phạm Đình Dũng", avatar: "https://i.pravatar.cc/150?u=4", score: 7.5, trend: "same", status: "Bình thường" },
    { id: "HS005", name: "Hoàng Thanh Em", avatar: "https://i.pravatar.cc/150?u=5", score: 5.0, trend: "down", status: "Nguy hiểm" },
  ];

  const getColorClasses = (color) => {
    const map = {
      blue: "bg-blue-50 border-blue-100 hover:border-blue-300 ring-blue-500",
      cyan: "bg-cyan-50 border-cyan-100 hover:border-cyan-300 ring-cyan-500",
      amber: "bg-amber-50 border-amber-100 hover:border-amber-300 ring-amber-500"
    };
    return map[color] || map.blue;
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Quản lý Lớp & Học viên</h1>
          <p className="text-gray-500 mt-1 font-medium">Theo dõi tổng quan sĩ số, điểm số và năng lực của từng học sinh.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Tìm tên lớp hoặc học sinh..." 
              className="pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all w-64 lg:w-80 font-medium"
            />
          </div>
          <button className="p-3 bg-white border border-gray-200 text-gray-700 rounded-2xl shadow-sm hover:bg-gray-50 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Danh sách Lớp học (Master View) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CLASSES_DATA.map((cls) => {
          const isSelected = selectedClass === cls.id;
          return (
            <motion.div 
              whileHover={{ y: -4 }}
              key={cls.id}
              onClick={() => setSelectedClass(isSelected ? null : cls.id)}
              className={`p-6 rounded-[2rem] border transition-all cursor-pointer relative overflow-hidden
                ${getColorClasses(cls.color)}
                ${isSelected ? 'shadow-xl ring-2' : 'shadow-sm hover:shadow-md'}
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  {cls.icon}
                </div>
                <button className="text-gray-400 hover:text-gray-900 bg-white/50 hover:bg-white rounded-full p-1 transition-all">
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{cls.name}</h2>
              <p className="text-gray-600 font-medium text-sm mb-6">{cls.schedule}</p>
              
              <div className="grid grid-cols-3 gap-2 border-t border-black/5 pt-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Sĩ số</p>
                  <p className="font-extrabold text-gray-900 flex items-center gap-1"><Users size={14}/> {cls.studentCount}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Điểm TB</p>
                  <p className="font-extrabold text-gray-900 flex items-center gap-1"><Star size={14} className="text-amber-500"/> {cls.avgScore}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Chuyên cần</p>
                  <p className="font-extrabold text-emerald-600 flex items-center gap-1"><Activity size={14}/> {cls.attendance}%</p>
                </div>
              </div>

              {isSelected && (
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-current opacity-5 rounded-full pointer-events-none"></div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Danh sách Học viên (Detail View) */}
      <AnimatePresence>
        {selectedClass && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white border border-gray-100 rounded-[2rem] shadow-lg p-8 mt-4">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">
                    Danh sách học viên: {CLASSES_DATA.find(c => c.id === selectedClass)?.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">Cập nhật mới nhất từ báo cáo điểm danh & bài tập AI</p>
                </div>
                <button className="px-5 py-2.5 bg-gray-900 text-white font-bold rounded-xl shadow-md hover:bg-black transition-all flex items-center gap-2 text-sm">
                  Xuất bảng điểm (Excel)
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-100 text-gray-400 font-bold uppercase tracking-wider text-xs">
                      <th className="pb-4 pl-4">Học viên</th>
                      <th className="pb-4">Mã số</th>
                      <th className="pb-4">Điểm TB</th>
                      <th className="pb-4">Trạng thái</th>
                      <th className="pb-4 text-right pr-4">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {STUDENTS_DATA.map((student, idx) => (
                      <motion.tr 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={student.id} 
                        className="hover:bg-gray-50/50 transition-colors group"
                      >
                        <td className="py-4 pl-4">
                          <div className="flex items-center gap-4">
                            <img src={student.avatar} alt="avatar" className="w-10 h-10 rounded-full border-2 border-gray-100" />
                            <span className="font-extrabold text-gray-900">{student.name}</span>
                          </div>
                        </td>
                        <td className="py-4 text-gray-500 font-medium">{student.id}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-gray-900">{student.score}</span>
                            {student.trend === 'up' && <TrendingUp size={16} className="text-emerald-500"/>}
                            {student.trend === 'down' && <TrendingDown size={16} className="text-rose-500"/>}
                          </div>
                        </td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold inline-block
                            ${student.status === 'Hoàn thành tốt' || student.status === 'Tiến bộ' ? 'bg-emerald-100 text-emerald-700' : ''}
                            ${student.status === 'Bình thường' ? 'bg-gray-100 text-gray-600' : ''}
                            ${student.status === 'Cần chú ý' || student.status === 'Nguy hiểm' ? 'bg-rose-100 text-rose-700' : ''}
                          `}>
                            {student.status}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors tooltip" title="Gửi tin nhắn">
                              <Mail size={18} />
                            </button>
                            <button className="p-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors tooltip" title="Xem hồ sơ">
                              <ChevronDown size={18} />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <button className="w-full mt-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl font-bold text-gray-600 transition-colors flex items-center justify-center gap-2 text-sm">
                Xem toàn bộ 45 học viên <ArrowRight size={16}/>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeacherClasses;
