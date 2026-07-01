import React, { useState } from 'react';
import { 
  FileText, Edit3, Image as ImageIcon, Plus, 
  Trash2, Globe, EyeOff, Save, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminBlog = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const BLOGS = [
    { id: 1, title: 'Bí quyết đạt điểm 10 môn Toán Đại số', author: 'Hoàng Lê', date: '20/10/2026', status: 'published', views: 1250 },
    { id: 2, title: 'Cập nhật tính năng mới: Trí tuệ nhân tạo chấm điểm', author: 'System Admin', date: '15/10/2026', status: 'published', views: 3400 },
    { id: 3, title: 'Kế hoạch tuyển sinh Khóa Hè 2027', author: 'Ban Giám Đốc', date: '01/11/2026', status: 'draft', views: 0 },
  ];

  const renderEditor = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsEditorOpen(false)} className="text-zinc-500 hover:text-zinc-900 font-bold px-4 py-2 hover:bg-zinc-100 rounded-xl transition-colors">
            Hủy bỏ
          </button>
          <span className="text-sm font-bold text-zinc-400">Đang viết bài mới...</span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-xl font-bold transition-colors">
            <Save size={18}/> Lưu nháp
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold shadow-md transition-colors">
            <Globe size={18}/> Xuất bản
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-zinc-200 shadow-sm p-8 flex gap-8 flex-col lg:flex-row">
        {/* Vùng viết bài */}
        <div className="flex-1 space-y-6">
          <input 
            type="text" 
            placeholder="Tiêu đề bài viết..." 
            className="w-full text-4xl font-black text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-transparent focus:border-zinc-200 pb-2 transition-colors"
          />
          <div className="flex gap-4">
            <button className="p-3 bg-zinc-50 text-zinc-500 rounded-xl hover:bg-zinc-100 hover:text-zinc-900 transition-colors" title="Thêm ảnh bìa">
              <ImageIcon size={20}/>
            </button>
            <button className="p-3 bg-zinc-50 text-zinc-500 rounded-xl hover:bg-zinc-100 hover:text-zinc-900 transition-colors" title="Định dạng Text">
              <Edit3 size={20}/>
            </button>
          </div>
          <textarea 
            placeholder="Nội dung bài viết bắt đầu tại đây..." 
            className="w-full h-[500px] text-lg font-medium text-zinc-700 placeholder:text-zinc-400 focus:outline-none resize-none custom-scrollbar"
          ></textarea>
        </div>

        {/* Khung cấu hình SEO */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100">
            <h3 className="text-sm font-black text-zinc-500 uppercase tracking-wider mb-4">Cấu hình bài viết</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-zinc-600 mb-2 block">Tác giả</label>
                <input type="text" value="System Admin" disabled className="w-full px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-xl text-zinc-500 font-bold"/>
              </div>
              <div>
                <label className="text-xs font-bold text-zinc-600 mb-2 block">Danh mục</label>
                <select className="w-full px-4 py-2 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 font-medium text-zinc-700">
                  <option>Tin tức & Thông báo</option>
                  <option>Bí quyết học tập</option>
                  <option>Tuyển sinh</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-zinc-600 mb-2 block">Mô tả ngắn (SEO)</label>
                <textarea rows="3" className="w-full px-4 py-2 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 font-medium text-zinc-700 resize-none"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderList = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Quản lý Blog</h1>
          <p className="text-zinc-500 mt-1 font-medium">Hệ thống Đăng bài viết, Tin tức lên Trang chủ (Landing Page).</p>
        </div>
        <button 
          onClick={() => setIsEditorOpen(true)}
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-colors flex items-center gap-2"
        >
          <Plus size={20}/> Viết bài mới
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-zinc-200 shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-100 text-xs font-black text-zinc-400 uppercase tracking-wider">
                <th className="p-4 pl-6">Tiêu đề</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4">Tác giả</th>
                <th className="p-4">Ngày đăng</th>
                <th className="p-4">Lượt xem</th>
                <th className="p-4 text-right pr-6">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {BLOGS.map((blog) => (
                <tr key={blog.id} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400">
                        <FileText size={20} />
                      </div>
                      <p className="font-bold text-zinc-900 group-hover:text-amber-600 transition-colors cursor-pointer">{blog.title}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    {blog.status === 'published' ? (
                      <span className="flex items-center gap-1 w-fit px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase rounded-full border border-emerald-100">
                        <Globe size={12}/> Đã xuất bản
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 w-fit px-2.5 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-black uppercase rounded-full border border-zinc-200">
                        <EyeOff size={12}/> Bản nháp
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-sm font-bold text-zinc-700">{blog.author}</td>
                  <td className="p-4 text-sm font-medium text-zinc-500">{blog.date}</td>
                  <td className="p-4 text-sm font-black text-zinc-400">{blog.views.toLocaleString()}</td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Chỉnh sửa">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Xóa bài">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      {isEditorOpen ? renderEditor() : renderList()}
    </AnimatePresence>
  );
};

export default AdminBlog;
