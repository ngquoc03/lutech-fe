import React, { useState } from 'react';
import { 
  FileCheck, Calendar, Trophy, ChevronRight, 
  MessageSquare, Star, ArrowLeft, Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentGrades = () => {
  const [selectedExam, setSelectedExam] = useState(null);

  const GRADES_HISTORY = [
    { 
      id: 'g1', 
      title: "Bài tập về nhà Tuần 5", 
      subject: "Vật lý 12",
      date: "10/10/2026",
      score: 9.5,
      aiFeedback: "Bài làm rất tốt, cách giải trình bày rõ ràng. Tuy nhiên ở câu 3 cần chú ý đơn vị đo."
    },
    { 
      id: 'g2', 
      title: "Kiểm tra 15p - Khảo sát hàm số", 
      subject: "Toán Đại số 12",
      date: "05/10/2026",
      score: 8.0,
      aiFeedback: "Nắm vững phương pháp tính đạo hàm. Cần cải thiện kỹ năng vẽ bảng biến thiên."
    }
  ];

  const renderList = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Kết quả & Nhận xét</h1>
          <p className="text-gray-500 mt-1 font-medium">Xem lại điểm số và nhận xét từ AI & Giáo viên.</p>
        </div>
        <div className="bg-emerald-50 px-6 py-3 rounded-2xl flex items-center gap-3">
          <Trophy className="text-emerald-500" size={24}/>
          <div>
            <p className="text-xs font-black text-emerald-600 uppercase tracking-wider">Điểm trung bình</p>
            <p className="text-xl font-black text-emerald-700 leading-none mt-1">8.75</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GRADES_HISTORY.map(grade => (
          <div key={grade.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 relative overflow-hidden group hover:border-emerald-200 transition-colors cursor-pointer" onClick={() => setSelectedExam(grade)}>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl">
                <Calendar size={16} className="text-gray-400"/>
                <span className="text-sm font-bold text-gray-600">{grade.date}</span>
              </div>
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                {grade.score}
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">{grade.title}</h3>
              <p className="text-sm font-bold text-gray-500 mb-4">{grade.subject}</p>
              
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={16} className="text-amber-500"/>
                  <span className="text-xs font-black text-amber-700 uppercase tracking-wider">Nhận xét từ AI</span>
                </div>
                <p className="text-sm font-medium text-amber-900 leading-relaxed line-clamp-2">{grade.aiFeedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderFeedbackViewer = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col bg-gray-50/50 -m-4 lg:-m-8 p-4 lg:p-8">
      
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6">
        <button onClick={() => setSelectedExam(null)} className="flex items-center gap-2 px-4 py-2 text-gray-600 font-bold hover:bg-gray-100 rounded-xl transition-colors">
          <ArrowLeft size={18}/> Quay lại
        </button>
        <div className="text-center">
          <h2 className="text-lg font-extrabold text-gray-900">{selectedExam.title}</h2>
          <p className="text-xs font-bold text-gray-500">{selectedExam.subject}</p>
        </div>
        <div className="flex items-center gap-2 font-black text-2xl text-emerald-500 px-4">
          {selectedExam.score}đ
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        {/* Khung Canvas bài làm */}
        <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col relative group">
          <div className="absolute top-4 right-4 z-10">
            <button className="p-2 bg-white/80 backdrop-blur-md rounded-xl text-gray-600 hover:text-emerald-500 hover:bg-white shadow-sm transition-all">
              <Maximize2 size={20}/>
            </button>
          </div>
          <div className="flex-1 bg-gray-200 relative p-8 flex items-center justify-center overflow-auto custom-scrollbar">
            {/* Giả lập tờ giấy bài làm có nét bút đỏ của AI */}
            <div className="w-full max-w-2xl bg-white shadow-lg min-h-[800px] p-12 relative font-mono text-gray-800 text-lg">
              <h1 className="text-center font-bold text-xl border-b-2 border-gray-800 pb-4 mb-8">BÀI LÀM</h1>
              
              <div className="space-y-6">
                <p>1. Ta có hàm số: y = x^3 - 3x^2 + 2</p>
                <p>2. Đạo hàm: y' = 3x^2 - 6x</p>
                <p>3. Cho y' = 0 &lt;=&gt; 3x(x - 2) = 0</p>
                <p className="ml-8">&lt;=&gt; x = 0 hoặc x = 2</p>
                
                {/* Lỗi sai cố ý */}
                <div className="relative inline-block mt-4">
                  <p>4. Bảng xét dấu:</p>
                  <p className="mt-2">Với x = 0 =&gt; y = 2 (Cực tiểu)</p>
                  
                  {/* Bút đỏ AI */}
                  <div className="absolute top-8 left-12 w-32 h-6 border-2 border-rose-500 rounded-full rotate-2 opacity-80"></div>
                  <div className="absolute top-4 -right-48 w-40 bg-rose-50 border border-rose-200 p-3 rounded-xl rounded-bl-none shadow-sm text-sm font-sans font-medium text-rose-700">
                    <span className="font-bold text-rose-600">AI Nhận xét:</span><br/>
                    Sai bản chất! x = 0 là điểm Cực đại, không phải Cực tiểu.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Khung Feedback */}
        <div className="w-full lg:w-96 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4">Tổng quan đánh giá</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                <Trophy size={28} className="text-emerald-500"/>
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-500 leading-none">{selectedExam.score}<span className="text-xl text-gray-400">/10</span></p>
                <p className="text-xs font-bold text-emerald-700 mt-1 bg-emerald-100 px-2 py-0.5 rounded w-fit">Rất tốt</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 relative">
                <div className="absolute -top-3 left-4 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-black text-amber-700 uppercase">
                  <Star size={12}/> AI Phân tích
                </div>
                <p className="text-sm font-medium text-amber-900 mt-2">{selectedExam.aiFeedback}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 relative">
                <div className="absolute -top-3 left-4 bg-blue-100 px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-black text-blue-700 uppercase">
                  <MessageSquare size={12}/> Lời phê của GV
                </div>
                <p className="text-sm font-medium text-blue-900 mt-2">Em làm bài khá cẩn thận. Chú ý kỹ hơn phần kết luận cực trị nhé. Cố gắng lên!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      {selectedExam ? renderFeedbackViewer() : renderList()}
    </AnimatePresence>
  );
};

export default StudentGrades;
