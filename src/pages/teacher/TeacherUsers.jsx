import React, { useState } from 'react';
import { 
  Search, Filter, MoreVertical, Edit2, UserPlus, 
  Mail, Users, GraduationCap, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherUsers = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isNewParent, setIsNewParent] = useState(false);
  const [parentSearchTerm, setParentSearchTerm] = useState('');
  const [showParentDropdown, setShowParentDropdown] = useState(false);
  const [selectedParentId, setSelectedParentId] = useState('');

  const STUDENTS = [
    { id: 'HS001', name: 'Nguyễn Văn An', class: '12A1', parentName: 'Nguyễn Tuấn', parentEmail: 'tuan.nguyen@gmail.com', status: 'active' },
    { id: 'HS002', name: 'Trần Thị Bình', class: '9A4', parentName: 'Trần Bình Trọng', parentEmail: 'trong.tran@gmail.com', status: 'active' },
    { id: 'HS003', name: 'Lê Hoàng Cường', class: '12A1', parentName: 'Lê Văn Đại', parentEmail: 'dai.le@gmail.com', status: 'active' },
  ];

  const PARENTS = [
    { id: 'PH001', name: 'Nguyễn Tuấn', children: ['Nguyễn Văn An (12A1)'], email: 'tuan.nguyen@gmail.com', status: 'active' },
    { id: 'PH002', name: 'Trần Bình Trọng', children: ['Trần Thị Bình (9A4)'], email: 'trong.tran@gmail.com', status: 'active' },
  ];

  const renderAddModal = () => (
    <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl"
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-xl font-extrabold text-gray-900">
            {activeTab === 'student' ? 'Cấp tài khoản Học viên mới' : 'Tạo tài khoản Phụ huynh mới'}
          </h2>
          <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="rotate-90" size={24}/>
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {activeTab === 'student' ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2 block">Tên Học viên</label>
                  <input type="text" placeholder="Nhập tên học viên..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"/>
                </div>
                <div>
                  <label className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2 block">Gán vào Lớp</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium">
                    <option>Toán Đại số 12A1</option>
                    <option>Tiếng Anh IELTS</option>
                  </select>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-emerald-500"/>
                    <h3 className="font-bold text-gray-900">Liên kết Phụ huynh</h3>
                  </div>
                </div>

                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      checked={!isNewParent} 
                      onChange={() => setIsNewParent(false)}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="text-sm font-bold text-gray-700">Chọn Phụ huynh đã có</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      checked={isNewParent} 
                      onChange={() => setIsNewParent(true)}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="text-sm font-bold text-gray-700">Tạo Phụ huynh mới</span>
                  </label>
                </div>

                {isNewParent ? (
                  <div className="space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div>
                      <label className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2 block">Tên Phụ huynh mới</label>
                      <input type="text" placeholder="Nhập tên phụ huynh..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"/>
                    </div>
                    <div>
                      <label className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2 block">Email / SĐT Phụ huynh</label>
                      <input type="text" placeholder="Để gửi tài khoản..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"/>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2 block">Tìm và Chọn Phụ huynh</label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                      <input 
                        type="text" 
                        value={parentSearchTerm}
                        onChange={(e) => {
                          setParentSearchTerm(e.target.value);
                          setShowParentDropdown(true);
                          setSelectedParentId('');
                        }}
                        onFocus={() => setShowParentDropdown(true)}
                        placeholder="Nhập tên hoặc số điện thoại..." 
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                      />
                    </div>
                    
                    {showParentDropdown && (
                      <div className="absolute left-4 right-4 mt-2 bg-white border border-gray-100 shadow-xl rounded-xl max-h-48 overflow-y-auto z-10">
                        {PARENTS.filter(p => p.name.toLowerCase().includes(parentSearchTerm.toLowerCase()) || p.email.includes(parentSearchTerm))
                          .map(p => (
                            <div 
                              key={p.id} 
                              onClick={() => {
                                setSelectedParentId(p.id);
                                setParentSearchTerm(`${p.name} (${p.email})`);
                                setShowParentDropdown(false);
                              }}
                              className="px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex flex-shrink-0 items-center justify-center text-xs">
                                {p.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-gray-900">{p.name}</p>
                                <p className="text-xs font-medium text-gray-500">{p.email}</p>
                              </div>
                            </div>
                        ))}
                        {PARENTS.filter(p => p.name.toLowerCase().includes(parentSearchTerm.toLowerCase()) || p.email.includes(parentSearchTerm)).length === 0 && (
                          <div className="p-4 text-center text-sm text-gray-500 font-medium">Không tìm thấy phụ huynh. Vui lòng tạo mới.</div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2 block">Tên Phụ huynh</label>
                  <input type="text" placeholder="Nhập tên phụ huynh..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"/>
                </div>
                <div>
                  <label className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2 block">Email / SĐT Đăng nhập</label>
                  <input type="text" placeholder="Nhập email hoặc SĐT..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"/>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-6">
                <p className="text-xs font-medium text-blue-800">
                  Hệ thống sẽ tự động gửi thông tin tài khoản đến Email/SĐT vừa nhập. Sau khi tạo xong, bạn có thể gán phụ huynh này cho các học viên tương ứng.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 flex gap-4">
          <button onClick={() => setIsAddModalOpen(false)} className="flex-1 py-3 text-gray-600 font-bold hover:bg-gray-200 rounded-xl transition-colors">Hủy</button>
          <button onClick={() => setIsAddModalOpen(false)} className="flex-1 py-3 bg-primary text-white font-bold hover:bg-blue-700 rounded-xl transition-colors shadow-lg">Cấp tài khoản</button>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Quản lý Học viên & Phụ huynh</h1>
          <p className="text-gray-500 mt-1 font-medium">Hệ thống cấp phát tài khoản nội bộ cho các lớp bạn giảng dạy.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-colors flex items-center gap-2"
        >
          <UserPlus size={20}/> {activeTab === 'student' ? 'Thêm Học viên mới' : 'Thêm Phụ huynh mới'}
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="flex bg-gray-100 p-1 rounded-xl w-full md:w-auto">
            <button 
              onClick={() => setActiveTab('student')}
              className={`flex items-center gap-2 flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'student' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <GraduationCap size={16}/> Học viên
            </button>
            <button 
              onClick={() => setActiveTab('parent')}
              className={`flex items-center gap-2 flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'parent' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users size={16}/> Phụ huynh
            </button>
          </div>

          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder={`Tìm kiếm ${activeTab === 'student' ? 'học viên' : 'phụ huynh'}...`}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-xs font-black text-gray-400 uppercase tracking-wider">
                <th className="p-4 pl-6">ID / Họ Tên</th>
                <th className="p-4">{activeTab === 'student' ? 'Lớp học' : 'Liên kết Con cái'}</th>
                <th className="p-4">{activeTab === 'student' ? 'Phụ huynh' : 'Liên hệ Email'}</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4 text-right pr-6">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === 'student' ? STUDENTS : PARENTS).map((user, idx) => (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{user.name}</p>
                        <p className="text-xs font-medium text-gray-400">{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    {activeTab === 'student' ? (
                      <span className="text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md text-xs font-bold">{user.class}</span>
                    ) : (
                      <div className="flex flex-col gap-1">
                        {user.children.map(c => <span key={c} className="text-sm font-medium text-gray-600">{c}</span>)}
                      </div>
                    )}
                  </td>
                  <td className="p-4">
                    {activeTab === 'student' ? (
                      <div>
                        <p className="text-sm font-bold text-gray-700">{user.parentName}</p>
                        <p className="text-xs font-medium text-gray-500 flex items-center gap-1 mt-0.5"><Mail size={12}/> {user.parentEmail}</p>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                        <Mail size={14} className="text-gray-400"/> {user.email}
                      </div>
                    )}
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase rounded-full border border-emerald-100">
                      Đang học
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Chỉnh sửa">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <AnimatePresence>
        {isAddModalOpen && renderAddModal()}
      </AnimatePresence>
    </div>
  );
};

export default TeacherUsers;
