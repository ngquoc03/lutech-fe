import React, { useState } from 'react';
import { 
  Folder, FolderOpen, FileText, Plus, Settings2, FileSpreadsheet, 
  UploadCloud, FileType2, Shuffle, Save, CheckSquare, AlignLeft, File, Trash2, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherExams = () => {
  const [selectedFolder, setSelectedFolder] = useState('Chương 1: Khảo sát hàm số');
  const [selectedExam, setSelectedExam] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  // Exam Builder States
  const [examType, setExamType] = useState('mixed'); // 'multiple_choice', 'essay', 'mixed'
  const [inputMode, setInputMode] = useState('manual'); // 'manual', 'file'
  const [isShuffled, setIsShuffled] = useState(true);
  
  // State quản lý danh sách câu hỏi khi soạn thủ công
  const [manualQuestions, setManualQuestions] = useState([]);

  // MOCK DATA: Cây thư mục giáo trình + Nội dung đề thi
  const CURRICULUM = [
    {
      id: "S1",
      subject: "Toán Đại số 12",
      chapters: [
        {
          id: "C1",
          name: "Chương 1: Khảo sát hàm số",
          exams: [
            { 
              id: "E1", name: "Kiểm tra 15p - Cực trị", type: "Trắc nghiệm", qCount: 2,
              questions: [
                { id: "q1", type: "multiple_choice", content: "Điểm cực đại của đồ thị hàm số y = x^3 - 3x là:", options: ["(1, -2)", "(-1, 2)", "(0, 0)", "(2, 2)"], correctOption: 1 },
                { id: "q2", type: "multiple_choice", content: "Hàm số nào sau đây không có cực trị?", options: ["y = x^2", "y = x^3", "y = x^4", "y = x^2 - x"], correctOption: 1 }
              ] 
            },
            { 
              id: "E2", name: "Thi thử Giữa kỳ (Kết hợp)", type: "Hỗn hợp", qCount: 2,
              questions: [
                { id: "q3", type: "multiple_choice", content: "Tập xác định của hàm số y = log(x-1) là:", options: ["R", "(1, +∞)", "[1, +∞)", "(0, +∞)"], correctOption: 1 },
                { id: "q4", type: "essay", content: "Khảo sát sự biến thiên và vẽ đồ thị hàm số y = x^3 - 3x^2 + 2", rubric: "Tập xác định: 1đ\nĐạo hàm & BBT: 3đ\nVẽ đồ thị: 1đ" }
              ] 
            },
          ]
        },
        {
          id: "C2",
          name: "Chương 2: Lũy thừa, Mũ & Logarit",
          exams: [
            { 
              id: "E3", name: "Bài tập về nhà Tuần 5", type: "Tự luận", qCount: 1,
              questions: [
                { id: "q5", type: "essay", content: "Giải phương trình 2^(x+1) + 2^x = 24", rubric: "Đặt nhân tử chung: 1đ\nGiải ra x = 3: 1đ" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "S2",
      subject: "Ngữ Văn 10",
      chapters: [
        {
          id: "C3",
          name: "Bài 1: Truyện truyền kỳ",
          exams: []
        }
      ]
    }
  ];

  // =====================================
  // HÀM XỬ LÝ (HANDLERS)
  // =====================================
  const handleCreateNew = () => {
    setSelectedExam(null);
    setIsCreating(true);
    setManualQuestions([]); // Reset form
  };

  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    setIsCreating(false);
  };

  const addManualQuestion = (type) => {
    const newQuestion = type === 'multiple_choice' 
      ? { id: Date.now().toString(), type: 'multiple_choice', content: '', options: ['', '', '', ''], correctOption: null }
      : { id: Date.now().toString(), type: 'essay', content: '', rubric: '' };
    setManualQuestions([...manualQuestions, newQuestion]);
  };

  const removeManualQuestion = (id) => {
    setManualQuestions(manualQuestions.filter(q => q.id !== id));
  };

  // =====================================
  // RENDER: GIAO DIỆN SOẠN THỦ CÔNG
  // =====================================
  const renderManualBuilder = () => {
    return (
      <motion.div key="manual" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
        
        {manualQuestions.map((q, index) => (
          <div key={q.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative group">
            <button onClick={() => removeManualQuestion(q.id)} className="absolute top-4 right-4 p-2 text-gray-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors">
              <Trash2 size={18}/>
            </button>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center text-sm">{index + 1}</span>
              <span className="text-sm font-bold text-gray-500 uppercase">{q.type === 'multiple_choice' ? 'Trắc nghiệm' : 'Tự luận'}</span>
            </div>

            <textarea 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium resize-none mb-4" 
              rows="2" 
              placeholder="Nhập nội dung câu hỏi..."
            ></textarea>

            {q.type === 'multiple_choice' && (
              <div className="grid grid-cols-2 gap-4">
                {['A', 'B', 'C', 'D'].map((label, optIndex) => (
                  <div key={label} className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 font-bold hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                      {label}
                    </button>
                    <input 
                      type="text" 
                      placeholder={`Nhập đáp án ${label}...`}
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                ))}
                <p className="col-span-2 text-xs font-bold text-gray-400 mt-2">Bấm vào vòng tròn A,B,C,D để chọn đáp án đúng.</p>
              </div>
            )}

            {q.type === 'essay' && (
              <div>
                <textarea 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-sm font-medium resize-none" 
                  rows="3" 
                  placeholder="Nhập bareme điểm hoặc hướng dẫn giải..."
                ></textarea>
              </div>
            )}
          </div>
        ))}

        <div className="flex gap-4">
          {(examType === 'multiple_choice' || examType === 'mixed') && (
            <button onClick={() => addManualQuestion('multiple_choice')} className="flex-1 py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold flex flex-col items-center justify-center gap-2 hover:bg-primary/5 hover:border-primary hover:text-primary transition-all">
              <Plus size={24}/> Thêm câu Trắc nghiệm
            </button>
          )}
          {(examType === 'essay' || examType === 'mixed') && (
            <button onClick={() => addManualQuestion('essay')} className="flex-1 py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold flex flex-col items-center justify-center gap-2 hover:bg-amber-500/10 hover:border-amber-500 hover:text-amber-600 transition-all">
              <Plus size={24}/> Thêm câu Tự luận
            </button>
          )}
        </div>
      </motion.div>
    );
  };

  // =====================================
  // RENDER: GIAO DIỆN XEM ĐỀ (VIEWER)
  // =====================================
  const renderExamViewer = () => {
    return (
      <div className="flex flex-col h-full bg-gray-50">
        {/* Header Tóm tắt */}
        <div className="p-8 border-b border-gray-200 bg-white flex justify-between items-start shadow-sm z-10 relative">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <FileText size={20}/>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900">{selectedExam.name}</h2>
            </div>
            <div className="flex items-center gap-4 text-sm font-bold text-gray-500 ml-13">
              <span className="bg-gray-100 px-3 py-1 rounded-full">{selectedExam.type}</span>
              <span>{selectedExam.qCount} câu hỏi</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
              Xuất PDF
            </button>
            <button className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl shadow-sm hover:bg-primaryDark transition-colors">
              Chỉnh sửa đề
            </button>
          </div>
        </div>

        {/* Nội dung đề thi */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-6">
          {selectedExam.questions?.map((q, index) => (
            <div key={q.id} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 relative">
              <div className="flex gap-4">
                <div className="w-8 h-8 flex-shrink-0 bg-gray-100 text-gray-700 font-black rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-lg leading-relaxed mb-4">{q.content}</p>
                  
                  {/* Trắc nghiệm */}
                  {q.type === 'multiple_choice' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {q.options.map((opt, optIndex) => (
                        <div key={optIndex} className={`p-3 rounded-xl border flex items-center gap-3 ${q.correctOption === optIndex ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-100'}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${q.correctOption === optIndex ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                            {['A', 'B', 'C', 'D'][optIndex]}
                          </div>
                          <span className={`font-medium ${q.correctOption === optIndex ? 'text-emerald-700' : 'text-gray-700'}`}>{opt}</span>
                          {q.correctOption === optIndex && <CheckCircle2 size={16} className="text-emerald-500 ml-auto"/>}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tự luận */}
                  {q.type === 'essay' && (
                    <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                      <p className="text-xs font-bold text-amber-600 uppercase mb-2 tracking-wider">Bareme & Hướng dẫn giải</p>
                      <p className="text-sm text-amber-900 font-medium whitespace-pre-line leading-relaxed">{q.rubric}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };


  return (
    <div className="w-full h-[calc(100vh-120px)] flex gap-6 animate-in fade-in duration-500">
      
      {/* LEFT PANEL: Curriculum Accordion */}
      <div className="w-1/3 bg-white rounded-[2rem] shadow-sm border border-gray-100 flex flex-col overflow-hidden h-full">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Ngân hàng đề</h2>
            <p className="text-sm font-medium text-gray-500 mt-1">Phân chia theo Giáo trình</p>
          </div>
          <button 
            onClick={handleCreateNew}
            className="p-2 bg-primary text-white rounded-xl shadow-lg hover:bg-primaryDark transition-all hover:scale-105"
          >
            <Plus size={20}/>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {CURRICULUM.map(subject => (
            <div key={subject.id} className="mb-4">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-2 px-2">{subject.subject}</h3>
              <div className="space-y-1">
                {subject.chapters.map(chapter => {
                  const isOpen = selectedFolder === chapter.name;
                  return (
                    <div key={chapter.id}>
                      <div 
                        onClick={() => setSelectedFolder(isOpen ? null : chapter.name)}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${isOpen ? 'bg-primary/5 text-primary' : 'hover:bg-gray-50 text-gray-700'}`}
                      >
                        {isOpen ? <FolderOpen size={18} className="text-primary"/> : <Folder size={18} className="text-gray-400"/>}
                        <span className="font-bold text-sm select-none">{chapter.name}</span>
                      </div>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }} 
                            animate={{ opacity: 1, height: 'auto' }} 
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden ml-6 mt-1 border-l-2 border-gray-100 pl-2 space-y-1"
                          >
                            {chapter.exams.length > 0 ? chapter.exams.map(exam => (
                              <div 
                                key={exam.id}
                                onClick={() => handleSelectExam(exam)}
                                className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all text-sm font-medium ${selectedExam?.id === exam.id ? 'bg-gray-100 text-gray-900 shadow-sm' : 'hover:bg-gray-50 text-gray-500'}`}
                              >
                                <FileText size={16} className={selectedExam?.id === exam.id ? 'text-primary' : 'text-gray-400'}/>
                                <span className="flex-1 truncate">{exam.name}</span>
                              </div>
                            )) : (
                              <div className="p-3 text-xs text-gray-400 italic">Thư mục trống</div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL: Workspace / Exam Builder */}
      <div className="w-2/3 bg-white rounded-[2rem] shadow-sm border border-gray-100 flex flex-col overflow-hidden h-full">
        
        {isCreating ? (
          // ==============================
          // CHẾ ĐỘ TẠO ĐỀ MỚI (WIZARD)
          // ==============================
          <>
            <div className="p-8 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-2xl font-extrabold text-gray-900">Tạo đề thi mới</h2>
              <input type="text" placeholder="Nhập tên đề thi..." className="mt-4 w-full text-lg font-bold text-gray-900 bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all"/>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <Settings2 size={18}/> Cấu hình đề thi
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Định dạng câu hỏi</label>
                    <div className="flex bg-white rounded-xl p-1 border border-gray-200">
                      <button onClick={() => setExamType('multiple_choice')} className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${examType === 'multiple_choice' ? 'bg-primary text-white shadow' : 'text-gray-500'}`}>
                        <CheckSquare size={14}/> Trắc nghiệm
                      </button>
                      <button onClick={() => setExamType('essay')} className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${examType === 'essay' ? 'bg-primary text-white shadow' : 'text-gray-500'}`}>
                        <AlignLeft size={14}/> Tự luận
                      </button>
                      <button onClick={() => setExamType('mixed')} className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${examType === 'mixed' ? 'bg-primary text-white shadow' : 'text-gray-500'}`}>
                        Hỗn hợp
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tính năng bảo mật</label>
                    <div 
                      onClick={() => setIsShuffled(!isShuffled)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${isShuffled ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-200'}`}
                    >
                      <div className="flex items-center gap-2">
                        <Shuffle size={16} className={isShuffled ? 'text-emerald-600' : 'text-gray-400'}/>
                        <span className={`text-sm font-bold ${isShuffled ? 'text-emerald-700' : 'text-gray-600'}`}>Tự động xáo trộn câu hỏi</span>
                      </div>
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${isShuffled ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                        <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${isShuffled ? 'translate-x-5' : 'translate-x-0'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 border-b border-gray-200 mb-6">
                  <button onClick={() => setInputMode('manual')} className={`pb-3 text-sm font-bold transition-all border-b-2 ${inputMode === 'manual' ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                    Soạn thảo thủ công
                  </button>
                  <button onClick={() => setInputMode('file')} className={`pb-3 text-sm font-bold transition-all border-b-2 ${inputMode === 'file' ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                    Nhập từ File (Word, PDF, Excel)
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {inputMode === 'file' ? (
                    <motion.div key="file" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                      <div className="border-2 border-dashed border-gray-300 rounded-3xl p-12 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-primary/5 hover:border-primary transition-all cursor-pointer">
                        <div className="flex gap-4 mb-4">
                          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600"><FileType2 size={24}/></div>
                          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600"><FileSpreadsheet size={24}/></div>
                          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-500"><File size={24}/></div>
                        </div>
                        <p className="font-extrabold text-gray-900 text-lg">Kéo thả file đề thi vào đây</p>
                        <p className="text-gray-500 text-sm font-medium mt-1">Hệ thống sẽ tự động bóc tách câu hỏi và đáp án nhờ AI</p>
                        <p className="text-gray-400 text-xs mt-4">Hỗ trợ: .docx, .xlsx, .pdf</p>
                      </div>
                    </motion.div>
                  ) : (
                    renderManualBuilder()
                  )}
                </AnimatePresence>
              </div>

            </div>

            <div className="p-6 border-t border-gray-100 bg-white flex justify-end gap-4">
              <button onClick={() => setIsCreating(false)} className="px-6 py-3 font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">Hủy bỏ</button>
              <button className="px-8 py-3 bg-gray-900 text-white font-extrabold rounded-xl shadow-lg hover:bg-black transition-all flex items-center gap-2">
                <Save size={18}/> Lưu đề thi
              </button>
            </div>
          </>
        ) : selectedExam ? (
          renderExamViewer()
        ) : (
          // ==============================
          // TRẠNG THÁI TRỐNG (EMPTY STATE)
          // ==============================
          <div className="flex flex-col h-full items-center justify-center text-center p-8 bg-gray-50/30">
            <FolderOpen size={64} className="text-gray-300 mb-4"/>
            <h2 className="text-xl font-bold text-gray-400">Chưa chọn đề thi nào</h2>
            <p className="text-sm font-medium text-gray-400 mt-2">Vui lòng chọn một đề thi ở danh sách bên trái<br/>hoặc tạo mới một đề thi.</p>
            <button 
              onClick={handleCreateNew}
              className="mt-6 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Plus size={18}/> Tạo đề thi mới
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default TeacherExams;
