import React, { useState } from 'react';
import { 
  Folder, FolderOpen, FileText, Plus, Settings2, FileSpreadsheet, 
  UploadCloud, FileType2, Shuffle, Save, CheckSquare, AlignLeft, File, Trash2, CheckCircle2, ArrowLeft, Image as ImageIcon, Mic
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherExams = () => {
  // 'library' | 'editor' | 'viewer'
  const [viewMode, setViewMode] = useState('library');
  const [selectedExam, setSelectedExam] = useState(null);
  
  // Library States
  const [expandedChapterId, setExpandedChapterId] = useState('C1');

  // Exam Builder States
  const [examName, setExamName] = useState('');
  const [examType, setExamType] = useState('mixed'); // 'multiple_choice', 'essay', 'mixed'
  const [inputMode, setInputMode] = useState('manual'); // 'manual', 'file'
  const [isShuffled, setIsShuffled] = useState(true);
  
  // State quản lý danh sách câu hỏi khi soạn thủ công
  const [manualQuestions, setManualQuestions] = useState([]);

  // MOCK DATA
  const CURRICULUM = [
    {
      id: "S1",
      className: "Lớp Toán Đại số 12A1",
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
      className: "Lớp Ngữ Văn 10C2",
      chapters: [
        {
          id: "C3",
          name: "Bài 1: Truyện truyền kỳ",
          exams: []
        }
      ]
    },
    {
      id: "S3",
      className: "Lớp Vật Lý 11B1",
      chapters: [
        {
          id: "C4",
          name: "Chương 1: Quang học",
          exams: []
        }
      ]
    }
  ];

  // =====================================
  // HANDLERS
  // =====================================
  const handleCreateNew = () => {
    setSelectedExam(null);
    setExamName('');
    setManualQuestions([]); 
    setViewMode('editor');
  };

  const handleEditExam = (exam) => {
    setSelectedExam(exam);
    setExamName(exam.name);
    if(exam.type === 'Trắc nghiệm') setExamType('multiple_choice');
    else if(exam.type === 'Tự luận') setExamType('essay');
    else setExamType('mixed');
    
    setManualQuestions(exam.questions || []);
    setInputMode('manual');
    setViewMode('editor');
  };

  const handleViewExam = (exam) => {
    setSelectedExam(exam);
    setViewMode('viewer');
  };

  const handleBackToLibrary = () => {
    setViewMode('library');
    setSelectedExam(null);
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
  // RENDER: LIBRARY VIEW
  // =====================================
  const renderLibrary = () => (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Ngân hàng đề thi</h1>
          <p className="text-gray-500 mt-1 font-medium">Lưu trữ và biên soạn đề kiểm tra, bài tập về nhà.</p>
        </div>
        <button 
          onClick={handleCreateNew}
          className="bg-primary hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg transition-transform hover:scale-105 flex items-center gap-2 text-lg"
        >
          <Plus size={24}/> Tạo Đề Thi Mới
        </button>
      </div>

      {CURRICULUM.map(subject => (
        <div key={subject.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden p-8">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
              <FolderOpen size={20}/>
            </div>
            {subject.className}
          </h2>

          <div className="space-y-6">
            {subject.chapters.map(chapter => {
              const isExpanded = expandedChapterId === chapter.id;
              return (
                <div key={chapter.id} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/30">
                  <div 
                    onClick={() => setExpandedChapterId(isExpanded ? null : chapter.id)}
                    className="p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {isExpanded ? <FolderOpen className="text-primary" size={24}/> : <Folder className="text-gray-400" size={24}/>}
                      <h3 className="font-bold text-lg text-gray-800">{chapter.name}</h3>
                      <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-md">{chapter.exams.length} đề</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-5 pt-0 border-t border-gray-100"
                      >
                        {chapter.exams.length === 0 ? (
                          <div className="text-center py-8 text-gray-400 font-medium">Chưa có đề thi nào trong chương này.</div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                            {chapter.exams.map(exam => (
                              <div key={exam.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                    <FileText size={24}/>
                                  </div>
                                  <span className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-bold rounded-full">
                                    {exam.type}
                                  </span>
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{exam.name}</h4>
                                <p className="text-gray-500 font-medium text-sm mb-6">{exam.qCount} câu hỏi</p>
                                
                                <div className="flex gap-2">
                                  <button onClick={() => handleViewExam(exam)} className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg text-sm transition-colors">
                                    Xem trước
                                  </button>
                                  <button onClick={() => handleEditExam(exam)} className="flex-1 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg text-sm transition-colors">
                                    Sửa đề
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
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
  );

  // =====================================
  // RENDER: FULL-WIDTH EDITOR
  // =====================================
  const renderEditor = () => (
    <div className="min-h-[calc(100vh-120px)] animate-in fade-in duration-500">
      
      {/* Navbar của Editor */}
      <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 mb-6 sticky top-4 z-50">
        <button onClick={handleBackToLibrary} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
          <ArrowLeft size={20}/> Quay lại Ngân hàng
        </button>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            Xem trước (Preview)
          </button>
          <button className="px-8 py-2.5 bg-gray-900 text-white font-extrabold rounded-xl shadow-lg hover:bg-black transition-all flex items-center gap-2">
            <Save size={18}/> Lưu Đề Thi
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 pb-20">
        
        {/* Header Đề thi */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          <h2 className="text-3xl font-black text-gray-900 mb-6">{selectedExam ? 'Chỉnh sửa Đề thi' : 'Tạo Đề thi Mới'}</h2>
          
          <div className="space-y-6">
            <div>
              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block">Tên đề thi</label>
              <input 
                type="text" 
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                placeholder="VD: Kiểm tra 15 phút Toán Đại số..." 
                className="w-full text-2xl font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Định dạng câu hỏi</label>
                <div className="flex bg-gray-50 rounded-xl p-1.5 border border-gray-200">
                  <button onClick={() => setExamType('multiple_choice')} className={`flex-1 py-2.5 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${examType === 'multiple_choice' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                    <CheckSquare size={16}/> Trắc nghiệm
                  </button>
                  <button onClick={() => setExamType('essay')} className={`flex-1 py-2.5 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${examType === 'essay' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                    <AlignLeft size={16}/> Tự luận
                  </button>
                  <button onClick={() => setExamType('mixed')} className={`flex-1 py-2.5 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${examType === 'mixed' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                    Hỗn hợp
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Tùy chọn Khác</label>
                <div 
                  onClick={() => setIsShuffled(!isShuffled)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${isShuffled ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}
                >
                  <div className="flex items-center gap-2">
                    <Shuffle size={18} className={isShuffled ? 'text-emerald-600' : 'text-gray-400'}/>
                    <span className={`font-bold ${isShuffled ? 'text-emerald-700' : 'text-gray-600'}`}>Xáo trộn câu hỏi</span>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${isShuffled ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${isShuffled ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Builder */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setInputMode('manual')} className={`px-6 py-3 rounded-xl font-bold transition-all ${inputMode === 'manual' ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}>
              Soạn thảo Thủ công
            </button>
            <button onClick={() => setInputMode('file')} className={`px-6 py-3 rounded-xl font-bold transition-all ${inputMode === 'file' ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}>
              Nhập từ File Excel
            </button>
          </div>

          <AnimatePresence mode="wait">
            {inputMode === 'file' ? (
              <motion.div key="file" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-16 flex flex-col items-center justify-center hover:bg-primary/5 hover:border-primary transition-all cursor-pointer">
                  <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                    <FileSpreadsheet size={40}/>
                  </div>
                  <h3 className="font-black text-gray-900 text-2xl mb-2">Kéo thả file Excel đề thi vào đây</h3>
                  <p className="text-gray-500 font-medium text-lg text-center max-w-md">Hệ thống sẽ tự động bóc tách câu hỏi và đáp án dựa trên cấu trúc chuẩn của EduTech.</p>
                  
                  <div className="flex gap-4 mt-8">
                    <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                      Tải file mẫu (.xlsx)
                    </button>
                    <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                      Chọn File tải lên
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="manual" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                
                {manualQuestions.map((q, index) => (
                  <div key={q.id} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm relative group transition-all hover:border-primary/30">
                    <button onClick={() => removeManualQuestion(q.id)} className="absolute top-6 right-6 p-2 text-gray-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors">
                      <Trash2 size={20}/>
                    </button>
                    
                    <div className="flex items-center gap-3 mb-6 pr-12">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center text-lg">{index + 1}</div>
                      <span className="font-bold text-gray-500 uppercase bg-gray-100 px-3 py-1 rounded-md text-sm">{q.type === 'multiple_choice' ? 'Trắc nghiệm' : 'Tự luận'}</span>
                      <div className="ml-auto flex gap-2">
                        <button className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-100 flex items-center gap-2 transition-colors">
                          <ImageIcon size={16}/> Thêm Ảnh
                        </button>
                        <button className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-100 flex items-center gap-2 transition-colors">
                          <Mic size={16}/> Thêm Âm Thanh
                        </button>
                      </div>
                    </div>

                    <textarea 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium resize-none mb-6 text-lg" 
                      rows="3" 
                      placeholder="Nhập nội dung câu hỏi..."
                      value={q.content}
                    ></textarea>

                    {q.type === 'multiple_choice' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['A', 'B', 'C', 'D'].map((label, optIndex) => (
                          <div key={label} className={`flex items-center gap-3 p-3 border rounded-2xl transition-colors ${q.correctOption === optIndex ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-200'}`}>
                            <button 
                              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-black transition-colors flex-shrink-0 ${q.correctOption === optIndex ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-200 text-gray-400 hover:border-emerald-500 hover:text-emerald-500'}`}
                            >
                              {label}
                            </button>
                            <input 
                              type="text" 
                              placeholder={`Nội dung đáp án ${label}...`}
                              className="flex-1 px-4 py-3 bg-transparent border-none outline-none font-medium text-gray-900"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {q.type === 'essay' && (
                      <div>
                        <textarea 
                          className="w-full px-5 py-4 bg-amber-50/50 border border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all font-medium resize-none text-amber-900 placeholder:text-amber-700/50" 
                          rows="4" 
                          placeholder="Nhập bareme điểm hoặc hướng dẫn giải cho học sinh (tùy chọn)..."
                          value={q.rubric}
                        ></textarea>
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex gap-4">
                  {(examType === 'multiple_choice' || examType === 'mixed') && (
                    <button onClick={() => addManualQuestion('multiple_choice')} className="flex-1 py-8 border-2 border-dashed border-gray-300 rounded-3xl text-gray-500 font-bold flex flex-col items-center justify-center gap-3 hover:bg-primary/5 hover:border-primary hover:text-primary transition-all group">
                      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Plus size={28}/>
                      </div>
                      <span className="text-lg">Thêm câu Trắc nghiệm</span>
                    </button>
                  )}
                  {(examType === 'essay' || examType === 'mixed') && (
                    <button onClick={() => addManualQuestion('essay')} className="flex-1 py-8 border-2 border-dashed border-gray-300 rounded-3xl text-gray-500 font-bold flex flex-col items-center justify-center gap-3 hover:bg-amber-500/10 hover:border-amber-500 hover:text-amber-600 transition-all group">
                      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                        <Plus size={28}/>
                      </div>
                      <span className="text-lg">Thêm câu Tự luận</span>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  // =====================================
  // RENDER: VIEWER (PREVIEW)
  // =====================================
  const renderViewer = () => (
    <div className="min-h-[calc(100vh-120px)] animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 mb-6 sticky top-4 z-50">
        <button onClick={handleBackToLibrary} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
          <ArrowLeft size={20}/> Quay lại Ngân hàng
        </button>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            Xuất PDF
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-gray-100 pb-20">
        <div className="text-center mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-4">{selectedExam.name}</h1>
          <div className="flex items-center justify-center gap-4 text-gray-600 font-bold">
            <span className="bg-gray-100 px-4 py-1.5 rounded-full">{selectedExam.type}</span>
            <span>•</span>
            <span>{selectedExam.qCount} câu hỏi</span>
          </div>
        </div>

        <div className="space-y-10">
          {selectedExam.questions?.map((q, index) => (
            <div key={q.id}>
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-100 text-gray-700 font-black rounded-full flex items-center justify-center text-lg">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-medium text-gray-900 text-xl leading-relaxed mb-6">{q.content}</p>
                  
                  {q.type === 'multiple_choice' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {q.options.map((opt, optIndex) => (
                        <div key={optIndex} className={`p-4 rounded-2xl border-2 flex items-center gap-4 ${q.correctOption === optIndex ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-100'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${q.correctOption === optIndex ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                            {['A', 'B', 'C', 'D'][optIndex]}
                          </div>
                          <span className={`font-semibold text-lg ${q.correctOption === optIndex ? 'text-emerald-800' : 'text-gray-800'}`}>{opt}</span>
                          {q.correctOption === optIndex && <CheckCircle2 size={24} className="text-emerald-500 ml-auto"/>}
                        </div>
                      ))}
                    </div>
                  )}

                  {q.type === 'essay' && (
                    <div className="mt-6 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
                      <p className="text-sm font-black text-amber-700 uppercase mb-3 tracking-wider">Bareme & Hướng dẫn giải</p>
                      <p className="text-base text-amber-900 font-medium whitespace-pre-line leading-relaxed">{q.rubric}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {viewMode === 'library' && renderLibrary()}
      {viewMode === 'editor' && renderEditor()}
      {viewMode === 'viewer' && renderViewer()}
    </div>
  );
};

export default TeacherExams;
