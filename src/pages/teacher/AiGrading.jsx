import React, { useState } from 'react';
import { 
  CheckCircle, AlertCircle, XCircle, Sparkles, User, 
  FileText, Download, ChevronRight, Edit3, Calculator, 
  ArrowLeft, Search, Clock, CheckSquare, BookOpen, BrainCircuit
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AiGrading = () => {
  // Trạng thái điều hướng: 'CLASS_LIST' -> 'EXAM_LIST' -> 'STUDENT_LIST' -> 'GRADING_CANVAS'
  const [step, setStep] = useState('CLASS_LIST');
  
  // Lưu trữ đối tượng đang được chọn
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Chế độ chấm bài: 'AI' hoặc 'MANUAL'
  const [gradingMode, setGradingMode] = useState('AI');

  // ==========================================
  // MOCK DATA CẤU TRÚC (TREE)
  // ==========================================
  const DATA = [
    {
      id: "C1",
      name: "Toán Đại số 12A1",
      icon: <Calculator size={24} className="text-blue-600"/>,
      color: "bg-blue-50 border-blue-100",
      exams: [
        {
          id: "E1",
          name: "Bài kiểm tra 15p - Logarit",
          date: "15/10/2026",
          status: "Đang chấm",
          submissions: [
            { id: "S1", name: "Nguyễn Văn An", status: "Đã nộp", time: "15 phút trước", aiScore: "7.5", aiReady: true },
            { id: "S2", name: "Trần Thị Bích", status: "Đã nộp", time: "2 giờ trước", aiScore: "8.0", aiReady: true },
            { id: "S3", name: "Lê Hoàng Cường", status: "Chưa nộp", time: "-", aiScore: null, aiReady: false },
          ]
        },
        {
          id: "E2",
          name: "Thi thử Giữa kỳ 1",
          date: "01/10/2026",
          status: "Đã chấm xong",
          submissions: []
        }
      ]
    },
    {
      id: "C2",
      name: "Ngữ Văn 10C2",
      icon: <BookOpen size={24} className="text-amber-600"/>,
      color: "bg-amber-50 border-amber-100",
      exams: [
        {
          id: "E3",
          name: "Bài văn nghị luận xã hội",
          date: "12/10/2026",
          status: "Đang chấm",
          submissions: [
            { id: "S4", name: "Phạm Đình Dũng", status: "Đã nộp", time: "1 ngày trước", aiScore: "6.5", aiReady: true },
            { id: "S5", name: "Hoàng Thanh Em", status: "Đã nộp", time: "1 ngày trước", aiScore: "9.0", aiReady: true },
          ]
        }
      ]
    }
  ];

  // ==========================================
  // HANDLERS ĐIỀU HƯỚNG
  // ==========================================
  const handleSelectClass = (cls) => {
    setSelectedClass(cls);
    setStep('EXAM_LIST');
  };

  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    setStep('STUDENT_LIST');
  };

  const handleSelectStudent = (student) => {
    if (student.status === 'Chưa nộp') return;
    setSelectedStudent(student);
    setStep('GRADING_CANVAS');
    // Mặc định bật chế độ AI nếu AI đã chấm xong
    setGradingMode(student.aiReady ? 'AI' : 'MANUAL');
  };

  const handleBack = () => {
    if (step === 'GRADING_CANVAS') setStep('STUDENT_LIST');
    else if (step === 'STUDENT_LIST') setStep('EXAM_LIST');
    else if (step === 'EXAM_LIST') setStep('CLASS_LIST');
  };

  // ==========================================
  // RENDER COMPONENTS
  // ==========================================
  const renderClassList = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h2 className="text-2xl font-extrabold text-gray-900">Chọn Lớp học để chấm bài</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.map(cls => (
          <div 
            key={cls.id} 
            onClick={() => handleSelectClass(cls)}
            className={`p-6 rounded-[2rem] border cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all ${cls.color}`}
          >
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-4">
              {cls.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{cls.name}</h3>
            <p className="text-gray-600 text-sm font-medium">{cls.exams.length} bài thi/kiểm tra</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderExamList = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-gray-600"/>
        </button>
        <div>
          <p className="text-sm font-bold text-gray-500">{selectedClass?.name}</p>
          <h2 className="text-2xl font-extrabold text-gray-900">Danh sách Bài thi / Bài tập</h2>
        </div>
      </div>

      <div className="space-y-4">
        {selectedClass?.exams.map(exam => (
          <div 
            key={exam.id}
            onClick={() => handleSelectExam(exam)}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary hover:shadow-md cursor-pointer transition-all flex justify-between items-center group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-xl">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{exam.name}</h3>
                <p className="text-sm font-medium text-gray-500 mt-1 flex items-center gap-2">
                  <Clock size={14}/> Hạn chót: {exam.date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${exam.status === 'Đang chấm' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {exam.status}
              </span>
              <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors"/>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderStudentList = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-gray-600"/>
          </button>
          <div>
            <p className="text-sm font-bold text-gray-500">{selectedClass?.name} / {selectedExam?.name}</p>
            <h2 className="text-2xl font-extrabold text-gray-900">Danh sách Học sinh</h2>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
          <input type="text" placeholder="Tìm tên học sinh..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none w-64"/>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase">Học sinh</th>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase">Trạng thái</th>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase">Thời gian nộp</th>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase">Điểm AI</th>
              <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {selectedExam?.submissions.map(sub => (
              <tr 
                key={sub.id} 
                onClick={() => handleSelectStudent(sub)}
                className={`transition-colors ${sub.status === 'Chưa nộp' ? 'bg-gray-50 opacity-60 cursor-not-allowed' : 'hover:bg-primary/5 cursor-pointer group'}`}
              >
                <td className="py-4 px-6 font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User size={16}/>
                  </div>
                  {sub.name}
                </td>
                <td className="py-4 px-6">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${sub.status === 'Đã nộp' ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-600'}`}>
                    {sub.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600 font-medium">{sub.time}</td>
                <td className="py-4 px-6">
                  {sub.aiReady ? (
                    <span className="flex items-center gap-1 font-black text-amber-600">
                      <Sparkles size={14}/> {sub.aiScore}
                    </span>
                  ) : <span className="text-gray-400">-</span>}
                </td>
                <td className="py-4 px-6 text-right">
                  {sub.status === 'Đã nộp' && (
                    <button className="text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Chấm bài &rarr;
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  const renderGradingCanvas = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-140px)] flex flex-col">
      {/* Header Canvas */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button onClick={handleBack} className="p-2 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 rounded-xl transition-colors">
            <ArrowLeft size={20} className="text-gray-600"/>
          </button>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Bài làm của: {selectedStudent?.name}</h2>
            <p className="text-sm font-medium text-gray-500">{selectedClass?.name} - {selectedExam?.name}</p>
          </div>
        </div>
        
        {/* Toggle Mode AI / Manual */}
        <div className="flex p-1 bg-gray-100 rounded-xl border border-gray-200">
          <button 
            onClick={() => setGradingMode('MANUAL')}
            className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${gradingMode === 'MANUAL' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Edit3 size={16}/> Tự chấm
          </button>
          <button 
            onClick={() => setGradingMode('AI')}
            disabled={!selectedStudent?.aiReady}
            className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${gradingMode === 'AI' ? 'bg-primary text-white shadow-sm shadow-primary/30' : 'text-gray-500 hover:text-gray-700 disabled:opacity-50'}`}
          >
            <BrainCircuit size={16}/> Trợ lý AI
          </button>
        </div>
      </div>

      {/* Workspace */}
      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Bài làm của học sinh */}
        <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 overflow-y-auto custom-scrollbar">
          <div className="font-mono text-sm leading-relaxed text-gray-800">
            <p className="mb-4 text-gray-400 font-sans">-- Bài làm được nộp lúc {selectedStudent?.time} --</p>
            {/* Nội dung Mock */}
            <p>Giải phương trình: log_2(x-1) + log_2(x+1) = 3</p>
            <br/>
            <p>
              Điều kiện: 
              <span className={`px-1 rounded cursor-pointer font-bold transition-colors ${gradingMode === 'AI' ? 'bg-rose-100 text-rose-700' : 'text-gray-900'}`}>
                x {'>'} -1
              </span> 
              {gradingMode === 'AI' && <span className="text-rose-500 text-xs ml-2 font-sans">(AI báo lỗi)</span>}
            </p>
            <br/>
            <p>Ta có: log_2[(x-1)(x+1)] = 3</p>
            <p>{'=>'} x^2 - 1 = 8</p>
            <p>{'=>'} x^2 = 9</p>
            <p>{'=>'} x = 3 hoặc x = -3</p>
            <br/>
            <p>Kết luận: So với điều kiện, nhận x = 3.</p>
          </div>
        </div>

        {/* Panel Chấm điểm */}
        <div className="w-96 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col overflow-hidden relative">
          
          {/* Header Panel */}
          <div className={`p-6 border-b border-gray-100 transition-colors ${gradingMode === 'AI' ? 'bg-amber-50/50' : 'bg-gray-50/50'}`}>
            {gradingMode === 'AI' ? (
              <div className="flex items-center gap-2 text-amber-600 font-extrabold text-lg">
                <Sparkles size={24}/> AI Đề xuất
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gray-900 font-extrabold text-lg">
                <CheckSquare size={24}/> Chấm thủ công
              </div>
            )}
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar">
            {gradingMode === 'AI' ? (
              // Chế độ AI
              <>
                <div className="text-center">
                  <div className="text-6xl font-black text-amber-600 tracking-tighter">
                    {selectedStudent?.aiScore}
                    <span className="text-2xl text-amber-300 font-bold">/10</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-rose-50 p-4 rounded-2xl border border-rose-100">
                    <AlertCircle size={18} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-rose-900">Sai điều kiện xác định. Cần x-1 {'>'} 0 và x+1 {'>'} 0 = x {'>'} 1.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                    <CheckCircle size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-emerald-900">Giải đúng phương trình logarit cơ bản và đối chiếu nghiệm.</p>
                  </div>
                </div>
              </>
            ) : (
              // Chế độ Thủ công
              <>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Điểm số</label>
                  <input type="number" max="10" min="0" step="0.1" className="w-full text-3xl font-black text-gray-900 border-2 border-gray-200 rounded-2xl p-4 text-center focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all"/>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nhận xét chi tiết</label>
                  <textarea rows="6" className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm font-medium focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="Nhập lời phê..."></textarea>
                </div>
              </>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-gray-100 bg-white space-y-3">
            {gradingMode === 'AI' ? (
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-extrabold shadow-lg shadow-primary/30 hover:bg-primaryDark transition-all flex justify-center items-center gap-2">
                <CheckCircle size={20}/> Chấp nhận điểm AI
              </button>
            ) : (
              <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-extrabold shadow-lg hover:bg-black transition-all flex justify-center items-center gap-2">
                <CheckCircle size={20}/> Lưu điểm thủ công
              </button>
            )}
            <button className="w-full py-3 bg-rose-50 text-rose-600 rounded-2xl font-bold hover:bg-rose-100 transition-all">
              Yêu cầu học sinh làm lại
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto h-full">
      <AnimatePresence mode="wait">
        {step === 'CLASS_LIST' && <motion.div key="1" exit={{ opacity: 0 }}>{renderClassList()}</motion.div>}
        {step === 'EXAM_LIST' && <motion.div key="2" exit={{ opacity: 0 }}>{renderExamList()}</motion.div>}
        {step === 'STUDENT_LIST' && <motion.div key="3" exit={{ opacity: 0 }}>{renderStudentList()}</motion.div>}
        {step === 'GRADING_CANVAS' && <motion.div key="4" exit={{ opacity: 0 }} className="h-full">{renderGradingCanvas()}</motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default AiGrading;
