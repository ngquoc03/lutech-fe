import React, { useState, useEffect } from 'react';
import { 
  FileCheck, Clock, PlayCircle, AlertTriangle, 
  CheckCircle2, ChevronRight, CheckSquare, AlignLeft, Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentExams = () => {
  const [takingExam, setTakingExam] = useState(null); // Trạng thái: đang làm bài thi nào?
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 phút (giả lập)

  const MOCK_EXAMS = [
    { 
      id: 'e1', 
      title: "Kiểm tra 15p - Cực trị", 
      subject: "Toán Đại số 12",
      type: "Trắc nghiệm",
      duration: "15 phút",
      questions: 10,
      deadline: "23:59 - 15/10/2026",
      status: "pending" 
    },
    { 
      id: 'e2', 
      title: "Thi thử Giữa kỳ 1", 
      subject: "Toán Đại số 12",
      type: "Hỗn hợp",
      duration: "90 phút",
      questions: 40,
      deadline: "23:59 - 20/10/2026",
      status: "pending" 
    },
    { 
      id: 'e3', 
      title: "Bài tập về nhà Tuần 5", 
      subject: "Vật lý 12",
      type: "Tự luận",
      duration: "Không giới hạn",
      questions: 5,
      deadline: "Đã nộp",
      status: "submitted",
      score: 9.5
    }
  ];

  // Giả lập danh sách câu hỏi cho đề thi Cực trị
  const MOCK_EXAM_CONTENT = [
    {
      id: "q1",
      type: "multiple_choice",
      content: "Điểm cực đại của đồ thị hàm số y = x^3 - 3x là:",
      options: ["(1, -2)", "(-1, 2)", "(0, 0)", "(2, 2)"]
    },
    {
      id: "q2",
      type: "multiple_choice",
      content: "Hàm số nào sau đây không có cực trị?",
      options: ["y = x^2", "y = x^3", "y = x^4", "y = x^2 - x"]
    },
    {
      id: "q3",
      type: "essay",
      content: "Khảo sát sự biến thiên và vẽ đồ thị hàm số y = x^3 - 3x^2 + 2"
    }
  ];

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (takingExam && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [takingExam, timeLeft]);

  const handleStartExam = (exam) => {
    setTakingExam(exam);
    setTimeLeft(15 * 60);
  };

  const handleSubmit = () => {
    if (window.confirm("Bạn có chắc chắn muốn nộp bài?")) {
      setTakingExam(null);
      alert("Nộp bài thành công! AI đang tiến hành chấm điểm...");
    }
  };

  const renderExamList = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Bài kiểm tra</h1>
          <p className="text-gray-500 mt-1 font-medium">Danh sách các bài tập và đề thi được giao.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_EXAMS.map(exam => (
          <div key={exam.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 flex flex-col hover:border-emerald-200 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${
                exam.status === 'pending' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
              }`}>
                {exam.status === 'pending' ? 'Cần hoàn thành' : 'Đã nộp bài'}
              </span>
              {exam.status === 'submitted' && (
                <span className="text-lg font-black text-emerald-500">{exam.score}đ</span>
              )}
            </div>

            <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{exam.title}</h3>
            <p className="text-sm font-bold text-gray-500 mb-6">{exam.subject}</p>

            <div className="space-y-3 mb-8 flex-1">
              <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <FileCheck size={16} className="text-gray-400"/>
                {exam.type} • {exam.questions} câu hỏi
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <Clock size={16} className="text-gray-400"/>
                {exam.duration}
              </div>
              <div className={`flex items-center gap-3 text-sm font-bold ${exam.status === 'pending' ? 'text-rose-500' : 'text-gray-400'}`}>
                <AlertTriangle size={16}/>
                Hạn: {exam.deadline}
              </div>
            </div>

            {exam.status === 'pending' ? (
              <button 
                onClick={() => handleStartExam(exam)}
                className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 group-hover:bg-emerald-500"
              >
                <PlayCircle size={18}/> Bắt đầu làm bài
              </button>
            ) : (
              <button className="w-full py-3.5 bg-gray-50 text-gray-600 rounded-xl font-bold border border-gray-200 hover:bg-gray-100 transition-all">
                Xem lại kết quả
              </button>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderExamTakingUI = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="h-full flex flex-col bg-gray-50/50 -m-4 lg:-m-8 p-4 lg:p-8">
      
      {/* Exam Header */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-6 sticky top-0 z-20">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">{takingExam.title}</h2>
          <p className="text-sm font-bold text-gray-500 mt-1">{takingExam.subject}</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 bg-rose-50 px-5 py-3 rounded-2xl border border-rose-100">
            <Clock className="text-rose-500 animate-pulse" size={24}/>
            <span className="text-2xl font-black text-rose-600 tracking-wider font-mono">{formatTime(timeLeft)}</span>
          </div>
          <button 
            onClick={handleSubmit}
            className="px-8 py-3.5 bg-emerald-500 text-white rounded-2xl font-extrabold shadow-lg hover:bg-emerald-600 transition-all flex items-center gap-2"
          >
            <Send size={18}/> Nộp bài
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 relative">
        {/* Bảng điều hướng câu hỏi (Left Sidebar) */}
        <div className="w-full lg:w-72 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 h-fit sticky top-32">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4">Danh sách câu hỏi</h3>
          <div className="grid grid-cols-5 gap-2">
            {MOCK_EXAM_CONTENT.map((q, idx) => (
              <button 
                key={q.id}
                className={`w-full aspect-square rounded-xl font-bold flex items-center justify-center transition-all ${
                  idx === 0 
                    ? 'bg-emerald-500 text-white shadow-md' // Câu đã chọn (Mock)
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100' // Câu chưa chọn
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div> Đã làm (1)
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div> Chưa làm (2)
            </div>
          </div>
        </div>

        {/* Khu vực câu hỏi chính (Main Content) */}
        <div className="flex-1 space-y-6">
          {MOCK_EXAM_CONTENT.map((q, index) => (
            <div key={q.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-gray-100 text-gray-700 font-black flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-relaxed pt-1.5">{q.content}</h3>
              </div>

              {q.type === 'multiple_choice' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-14">
                  {q.options.map((opt, optIdx) => (
                    <label key={optIdx} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-colors group">
                      <div className="relative flex items-center justify-center w-6 h-6">
                        <input type="radio" name={q.id} className="peer sr-only"/>
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all"></div>
                        <CheckCircle2 size={16} className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity"/>
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-emerald-700 transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="pl-14">
                  <textarea 
                    className="w-full h-40 p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium resize-none"
                    placeholder="Nhập bài làm tự luận của bạn vào đây..."
                  ></textarea>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      {takingExam ? renderExamTakingUI() : renderExamList()}
    </AnimatePresence>
  );
};

export default StudentExams;
