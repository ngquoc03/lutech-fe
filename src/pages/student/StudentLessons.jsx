import React, { useState } from 'react';
import { 
  PlayCircle, FileText, CheckCircle2, ChevronRight, Play, LayoutGrid, List, BookOpen, ChevronDown
} from 'lucide-react';

const StudentLessons = () => {
  const [activeSubject, setActiveSubject] = useState('math');
  const [activeLesson, setActiveLesson] = useState(null);

  const SUBJECTS = [
    { id: 'math', name: 'Toán Đại số 12', color: 'emerald' },
    { id: 'physics', name: 'Vật lý 12', color: 'blue' },
    { id: 'english', name: 'Tiếng Anh IELTS', color: 'purple' }
  ];

  const MOCK_CURRICULUM = {
    'math': [
      {
        chapter: "Chương 1: Khảo sát hàm số",
        lessons: [
          { id: 'l1', title: "Bài 1: Sự đồng biến, nghịch biến", type: "video", duration: "45 phút", status: "completed" },
          { id: 'l2', title: "Bài 2: Cực trị của hàm số", type: "video", duration: "50 phút", status: "in-progress", progress: 60 },
          { id: 'l3', title: "Tài liệu ôn tập Chương 1", type: "pdf", pages: "12 trang", status: "not-started" },
        ]
      },
      {
        chapter: "Chương 2: Lũy thừa, Mũ & Logarit",
        lessons: [
          { id: 'l4', title: "Bài 1: Lũy thừa", type: "video", duration: "40 phút", status: "not-started" },
        ]
      }
    ],
    'physics': [
      {
        chapter: "Chương 1: Dao động cơ",
        lessons: [
          { id: 'p1', title: "Bài 1: Dao động điều hòa", type: "video", duration: "35 phút", status: "not-started" },
          { id: 'p2', title: "Sổ tay công thức Dao động", type: "pdf", pages: "5 trang", status: "not-started" },
        ]
      }
    ],
    'english': []
  };

  const currentCurriculum = MOCK_CURRICULUM[activeSubject] || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12 h-full flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Kho học liệu</h1>
          <p className="text-gray-500 mt-1 font-medium">Khám phá và học tập các bài giảng được giao.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-[600px]">
        
        {/* RIGHT PANEL: Khung phát (Video/PDF Player) */}
        <div className="lg:order-2 flex-1 flex flex-col gap-6">
          {activeLesson ? (
            <div className="bg-white p-4 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col h-full">
              <div className="w-full aspect-video bg-gray-900 rounded-[2rem] overflow-hidden relative flex items-center justify-center">
                {activeLesson.type === 'video' ? (
                  <>
                    <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80" className="w-full h-full object-cover opacity-60" alt="Video thumbnail"/>
                    <button className="absolute w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-emerald-500 hover:scale-110 transition-all group">
                      <Play className="text-white ml-2 group-hover:text-white" size={32} fill="currentColor"/>
                    </button>
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-600">
                      <div className="h-full bg-emerald-500" style={{width: `${activeLesson.progress || 0}%`}}></div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-white">
                    <FileText size={64} className="mb-4 text-emerald-500"/>
                    <p className="font-bold text-lg">Đang hiển thị tài liệu PDF...</p>
                    <button className="mt-4 px-6 py-2 bg-emerald-500 rounded-xl font-bold hover:bg-emerald-600 transition-colors">Tải xuống</button>
                  </div>
                )}
              </div>
              <div className="p-4 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 text-xs font-black uppercase rounded-full ${activeLesson.type === 'video' ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600'}`}>
                    {activeLesson.type === 'video' ? 'Video Bài giảng' : 'Tài liệu PDF'}
                  </span>
                  <span className="text-sm font-bold text-gray-400">{activeLesson.duration || activeLesson.pages}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900">{activeLesson.title}</h2>
                <p className="text-gray-500 font-medium mt-2">Bài giảng do Thầy Hoàng Lê biên soạn. Vui lòng xem kỹ video và ghi chép lại các kiến thức trọng tâm.</p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center h-full text-center p-8">
              <PlayCircle size={64} className="text-gray-300 mb-4"/>
              <h2 className="text-2xl font-extrabold text-gray-400">Chưa chọn bài giảng</h2>
              <p className="text-gray-400 font-medium mt-2">Hãy chọn một bài giảng ở danh sách bên trái để bắt đầu học.</p>
            </div>
          )}
        </div>

        {/* LEFT PANEL: Danh sách Giáo trình */}
        <div className="lg:order-1 w-full lg:w-[400px] bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col">
          
          {/* Bộ chọn Môn học */}
          <div className="mb-6 relative group">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1 block">Khóa học / Lớp học</label>
            <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-emerald-500" />
                <span className="font-bold text-gray-900">{SUBJECTS.find(s => s.id === activeSubject)?.name}</span>
              </div>
              <ChevronDown size={18} className="text-gray-400" />
            </div>
            
            {/* Giả lập Dropdown (hiển thị khi hover cho nhanh) */}
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 overflow-hidden">
              {SUBJECTS.map(sub => (
                <div 
                  key={sub.id} 
                  onClick={() => { setActiveSubject(sub.id); setActiveLesson(null); }}
                  className={`p-3 font-bold text-sm cursor-pointer transition-colors ${activeSubject === sub.id ? 'bg-emerald-50 text-emerald-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {sub.name}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <h3 className="text-lg font-extrabold text-gray-900">Giáo trình</h3>
            <div className="flex gap-2 text-gray-400">
              <LayoutGrid size={18} className="hover:text-emerald-500 cursor-pointer"/>
              <List size={18} className="text-emerald-500 cursor-pointer"/>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-6">
            {currentCurriculum.length === 0 ? (
              <div className="text-center text-gray-400 font-medium py-8">
                Giáo viên chưa tải lên bài giảng nào cho môn này.
              </div>
            ) : currentCurriculum.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4 px-2">{section.chapter}</h4>
                <div className="space-y-3">
                  {section.lessons.map(lesson => (
                    <div 
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson)}
                      className={`group p-4 rounded-2xl border cursor-pointer transition-all ${
                        activeLesson?.id === lesson.id 
                          ? 'bg-emerald-50 border-emerald-200' 
                          : 'bg-white border-gray-100 hover:border-emerald-200 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className={`mt-1 flex-shrink-0 ${lesson.status === 'completed' ? 'text-emerald-500' : 'text-gray-300 group-hover:text-emerald-400'}`}>
                          <CheckCircle2 size={20} fill={lesson.status === 'completed' ? 'currentColor' : 'none'} className={lesson.status === 'completed' ? 'text-white' : ''}/>
                        </div>
                        <div className="flex-1">
                          <h5 className={`font-bold text-sm ${activeLesson?.id === lesson.id ? 'text-emerald-700' : 'text-gray-900'}`}>{lesson.title}</h5>
                          <div className="flex items-center gap-2 mt-2">
                            {lesson.type === 'video' ? <PlayCircle size={14} className="text-gray-400"/> : <FileText size={14} className="text-gray-400"/>}
                            <span className="text-xs font-bold text-gray-500">{lesson.duration || lesson.pages}</span>
                          </div>
                          
                          {/* Progress Bar for in-progress */}
                          {lesson.status === 'in-progress' && (
                            <div className="mt-3 flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500" style={{width: `${lesson.progress}%`}}></div>
                              </div>
                              <span className="text-[10px] font-black text-emerald-600">{lesson.progress}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentLessons;
