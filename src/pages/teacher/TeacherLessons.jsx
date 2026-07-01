import React, { useState } from 'react';
import {
  Plus, Search, Filter, BookOpen, Calculator, Beaker,
  MonitorPlay, FileText, Cloud, X, UploadCloud, Link as LinkIcon, Image as ImageIcon, Video, File
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherLessons = () => {
  const [filter, setFilter] = useState('Tất cả');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null); // Trạng thái xem bài giảng
  const [uploadType, setUploadType] = useState('file'); // 'file' | 'youtube' | 'drive'

  // MOCK DATA: Danh sách bài giảng
  const LESSONS_DATA = [
    {
      id: 1,
      title: "Giải tích 12: Ứng dụng đạo hàm",
      subject: "Toán",
      type: "pdf",
      date: "01/07/2026",
      views: 124,
      icon: <FileText size={24} className="text-rose-500" />,
      color: "bg-rose-50 border-rose-100",
      subjectIcon: <Calculator size={16} className="text-blue-500" />
    },
    {
      id: 2,
      title: "Bài giảng Truyện Kiều (Phần 1)",
      subject: "Văn",
      type: "youtube",
      date: "28/06/2026",
      views: 56,
      icon: <MonitorPlay size={24} className="text-red-600"/>,
      color: "bg-red-50 border-red-100",
      subjectIcon: <BookOpen size={16} className="text-amber-500" />
    },
    {
      id: 3,
      title: "Thực hành Khúc xạ ánh sáng",
      subject: "Lý",
      type: "drive",
      date: "25/06/2026",
      views: 89,
      icon: <Cloud size={24} className="text-blue-600" />,
      color: "bg-blue-50 border-blue-100",
      subjectIcon: <Beaker size={16} className="text-cyan-500" />
    },
    {
      id: 4,
      title: "Slide Ôn tập Hình không gian",
      subject: "Toán",
      type: "file",
      date: "20/06/2026",
      views: 210,
      icon: <File size={24} className="text-amber-500" />,
      color: "bg-amber-50 border-amber-100",
      subjectIcon: <Calculator size={16} className="text-blue-500" />
    },
  ];

  const filteredLessons = LESSONS_DATA.filter(lesson => filter === 'Tất cả' || lesson.subject === filter);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">

      {/* Header & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Kho Bài giảng</h1>
          <p className="text-gray-500 mt-1 font-medium">Lưu trữ và quản lý tài liệu học tập đa định dạng (PDF, Video, Drive).</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            <input
              type="text"
              placeholder="Tìm bài giảng..."
              className="pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all w-64 font-medium"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            <Plus size={20} /> Thêm bài giảng
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-gray-200 w-fit shadow-sm">
        {['Tất cả', 'Toán', 'Văn', 'Lý'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all ${filter === type
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Grid Bài giảng */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredLessons.map((lesson) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={lesson.id}
            onClick={() => setSelectedLesson(lesson)}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${lesson.color}`}>
              {lesson.icon}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-2 bg-gray-50 w-fit px-2 py-1 rounded-lg border border-gray-100">
                {lesson.subjectIcon}
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{lesson.subject}</span>
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {lesson.title}
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-sm font-medium text-gray-500">
              <span>{lesson.date}</span>
              <span>{lesson.views} lượt xem</span>
            </div>
          </motion.div>
        ))}

        {/* Nút thêm nhanh (Ghost card) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsModalOpen(true)}
          className="p-6 rounded-[2rem] border-2 border-dashed border-gray-200 hover:border-primary bg-gray-50 hover:bg-primary/5 transition-all cursor-pointer flex flex-col items-center justify-center text-center min-h-[280px]"
        >
          <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 text-gray-400 group-hover:text-primary transition-colors">
            <Plus size={32} />
          </div>
          <h3 className="text-lg font-extrabold text-gray-700">Tải lên bài giảng mới</h3>
          <p className="text-sm font-medium text-gray-500 mt-2">Hỗ trợ PDF, MP4, Link Youtube</p>
        </motion.div>
      </div>

      {/* Modal Thêm Bài Giảng (Glassmorphism & Dynamic Form) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900">Tải lên Bài giảng</h2>
                  <p className="text-sm font-medium text-gray-500 mt-1">Chọn định dạng tài liệu bạn muốn chia sẻ với học sinh.</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-white hover:bg-gray-100 rounded-full text-gray-500 shadow-sm transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-8 overflow-y-auto custom-scrollbar flex-1 space-y-6">

                {/* Tiêu đề & Môn học */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Tiêu đề bài giảng</label>
                    <input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" placeholder="VD: Khảo sát hàm số bậc 3" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Môn học</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none">
                      <option>Toán học</option>
                      <option>Vật lý</option>
                      <option>Ngữ văn</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mô tả (Không bắt buộc)</label>
                  <textarea className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium resize-none" rows="2" placeholder="Ghi chú thêm về bài giảng này..."></textarea>
                </div>

                <hr className="border-gray-100" />

                {/* Phân loại Upload (Dynamic Toggle) */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Nguồn tài liệu</label>
                  <div className="flex bg-gray-100 p-1.5 rounded-2xl w-full">
                    <button
                      onClick={() => setUploadType('file')}
                      className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold flex justify-center items-center gap-2 transition-all ${uploadType === 'file' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <UploadCloud size={18} /> Tải File
                    </button>
                    <button 
                      onClick={() => setUploadType('youtube')}
                      className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold flex justify-center items-center gap-2 transition-all ${uploadType === 'youtube' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <MonitorPlay size={18}/> Youtube
                    </button>
                    <button
                      onClick={() => setUploadType('drive')}
                      className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold flex justify-center items-center gap-2 transition-all ${uploadType === 'drive' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <Cloud size={18} /> Google Drive
                    </button>
                  </div>
                </div>

                {/* Dynamic Input Area */}
                <div className="mt-4">
                  <AnimatePresence mode="wait">

                    {/* Mode: FILE */}
                    {uploadType === 'file' && (
                      <motion.div key="file" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <div className="w-full border-2 border-dashed border-gray-300 rounded-3xl p-10 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-primary/5 hover:border-primary transition-all cursor-pointer">
                          <div className="flex gap-4 mb-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-500"><FileText size={24} /></div>
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500"><ImageIcon size={24} /></div>
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-500"><Video size={24} /></div>
                          </div>
                          <p className="font-extrabold text-gray-900 text-lg">Kéo thả file vào đây</p>
                          <p className="text-gray-500 text-sm font-medium mt-1">hoặc nhấn để duyệt file từ máy tính</p>
                          <p className="text-gray-400 text-xs mt-4">Hỗ trợ: PDF, MP4, JPG, PNG (Tối đa 50MB)</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Mode: YOUTUBE */}
                    {uploadType === 'youtube' && (
                      <motion.div key="youtube" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex gap-4 items-start">
                          <div className="p-3 bg-red-100 text-red-600 rounded-xl"><MonitorPlay size={24}/></div>
                          <div className="flex-1 space-y-3">
                            <div>
                              <label className="block text-sm font-bold text-red-900 mb-2">Đường dẫn Video Youtube</label>
                              <input className="w-full px-5 py-4 bg-white border border-red-200 rounded-2xl focus:ring-4 focus:ring-red-200 focus:border-red-400 outline-none transition-all font-medium" placeholder="VD: https://www.youtube.com/watch?v=..." />
                            </div>
                            <p className="text-xs font-medium text-red-600">Video sẽ được nhúng trực tiếp vào nền tảng để học sinh xem không bị quảng cáo.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Mode: DRIVE */}
                    {uploadType === 'drive' && (
                      <motion.div key="drive" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex gap-4 items-start">
                          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Cloud size={24} /></div>
                          <div className="flex-1 space-y-3">
                            <div>
                              <label className="block text-sm font-bold text-blue-900 mb-2">Link chia sẻ Google Drive</label>
                              <input className="w-full px-5 py-4 bg-white border border-blue-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all font-medium" placeholder="VD: https://drive.google.com/file/d/..." />
                            </div>
                            <p className="text-xs font-medium text-blue-600">Đảm bảo bạn đã cấp quyền "Bất kỳ ai có liên kết đều có thể xem" (Anyone with the link).</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-3.5 bg-primary text-white rounded-2xl font-extrabold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Lưu bài giảng
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Xem Bài Giảng (View Modal) */}
      <AnimatePresence>
        {selectedLesson && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-4xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${selectedLesson.color}`}>
                    {selectedLesson.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900">{selectedLesson.title}</h2>
                    <p className="text-sm font-medium text-gray-500 mt-1 flex items-center gap-2">
                      <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-lg border border-gray-100 shadow-sm">
                        {selectedLesson.subjectIcon} {selectedLesson.subject}
                      </span>
                      <span>• Đã đăng: {selectedLesson.date}</span>
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedLesson(null)}
                  className="p-2 bg-white hover:bg-gray-100 rounded-full text-gray-500 shadow-sm transition-colors"
                >
                  <X size={20}/>
                </button>
              </div>

              {/* Body (Hiển thị nội dung dựa trên type) */}
              <div className="flex-1 bg-gray-100 p-8 flex items-center justify-center overflow-y-auto min-h-[400px]">
                {selectedLesson.type === 'youtube' && (
                  <div className="w-full max-w-3xl aspect-video bg-black rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden group">
                    <MonitorPlay size={64} className="text-white/50 group-hover:scale-110 transition-transform"/>
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold">Mock Youtube Player</div>
                  </div>
                )}

                {selectedLesson.type === 'pdf' && (
                  <div className="w-full max-w-2xl bg-white h-[600px] rounded-2xl shadow-lg flex flex-col items-center justify-center border border-gray-200">
                    <FileText size={64} className="text-gray-300 mb-4"/>
                    <p className="font-bold text-gray-400">Trình xem PDF giả lập (Mock PDF Viewer)</p>
                  </div>
                )}

                {selectedLesson.type === 'file' && (
                  <div className="w-full max-w-2xl bg-white p-12 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center border border-gray-200">
                    <div className="w-24 h-24 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
                      <File size={48}/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tài liệu đã sẵn sàng</h3>
                    <p className="text-gray-500 font-medium mb-6">Học sinh có thể xem hoặc tải xuống tài liệu này.</p>
                    <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-colors flex items-center gap-2">
                      Tải xuống file gốc
                    </button>
                  </div>
                )}

                {selectedLesson.type === 'drive' && (
                  <div className="w-full max-w-3xl aspect-video bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center border border-gray-200">
                    <Cloud size={64} className="text-blue-500 mb-4"/>
                    <p className="font-bold text-gray-600">Đã nhúng Google Drive iframe thành công.</p>
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default TeacherLessons;
