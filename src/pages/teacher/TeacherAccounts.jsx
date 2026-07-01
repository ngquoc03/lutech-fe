import React, { useState } from 'react';
import { 
  Users, UserPlus, Search, ShieldCheck, FileSpreadsheet, 
  X, CheckCircle2, Lock, Ban, UserCog, Mail, Link as LinkIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherAccounts = () => {
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'parent'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [creationMode, setCreationMode] = useState('single'); // 'single' | 'batch'
  const [accountType, setAccountType] = useState('student'); // 'student' | 'parent' cho form tạo lẻ

  // MOCK DATA
  const ACCOUNTS = {
    students: [
      { id: "HS001", name: "Nguyễn Văn An", class: "12A1", username: "an.nguyen12a1", status: "active", parentLinked: true },
      { id: "HS002", name: "Trần Thị Bích", class: "12A1", username: "bich.tran12a1", status: "active", parentLinked: false },
      { id: "HS003", name: "Lê Hoàng Cường", class: "10C2", username: "cuong.le10c2", status: "locked", parentLinked: true },
    ],
    parents: [
      { id: "PH001", name: "Nguyễn Văn Hùng", phone: "0901234567", username: "ph.nguyenhung", status: "active", linkedStudent: "Nguyễn Văn An (12A1)" },
      { id: "PH002", name: "Lê Thị Thu", phone: "0987654321", username: "ph.lethu", status: "active", linkedStudent: "Lê Hoàng Cường (10C2)" },
    ]
  };

  const renderTopStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
          <Users size={28}/>
        </div>
        <div>
          <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">Tổng Học Sinh</p>
          <h3 className="text-3xl font-black text-gray-900 mt-1">128</h3>
        </div>
      </div>
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
          <UserCog size={28}/>
        </div>
        <div>
          <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">Tổng Phụ Huynh</p>
          <h3 className="text-3xl font-black text-gray-900 mt-1">115</h3>
        </div>
      </div>
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
          <ShieldCheck size={28}/>
        </div>
        <div>
          <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">Tài khoản Hoạt động</p>
          <h3 className="text-3xl font-black text-gray-900 mt-1">98%</h3>
        </div>
      </div>
    </div>
  );

  const renderTable = () => {
    const data = activeTab === 'student' ? ACCOUNTS.students : ACCOUNTS.parents;

    return (
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex bg-gray-200/50 p-1.5 rounded-2xl">
            <button 
              onClick={() => setActiveTab('student')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'student' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Học Sinh
            </button>
            <button 
              onClick={() => setActiveTab('parent')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'parent' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Phụ Huynh
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
            <input type="text" placeholder="Tìm kiếm tài khoản..." className="pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none w-72 font-medium"/>
          </div>
        </div>

        {/* Data Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white border-b border-gray-100">
              <tr>
                <th className="py-5 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Tài khoản</th>
                <th className="py-5 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">{activeTab === 'student' ? 'Lớp học' : 'Số điện thoại'}</th>
                <th className="py-5 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Trạng thái</th>
                <th className="py-5 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Liên kết</th>
                <th className="py-5 px-6 text-xs font-black text-gray-400 uppercase tracking-wider text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.map(item => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${activeTab === 'student' ? 'bg-blue-500' : 'bg-amber-500'}`}>
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-extrabold text-gray-900">{item.name}</p>
                        <p className="text-sm font-medium text-gray-500">@{item.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-gray-700">
                    {activeTab === 'student' ? item.class : item.phone}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${item.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {item.status === 'active' ? <CheckCircle2 size={14}/> : <Ban size={14}/>}
                      {item.status === 'active' ? 'Hoạt động' : 'Đã khóa'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {activeTab === 'student' ? (
                      item.parentLinked 
                        ? <span className="flex items-center gap-1.5 text-sm font-bold text-blue-600"><LinkIcon size={16}/> Đã liên kết PH</span>
                        : <span className="text-sm font-medium text-gray-400 italic">Chưa có liên kết</span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm font-bold text-gray-700">
                        <LinkIcon size={16} className="text-amber-500"/> {item.linkedStudent}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors tooltip" title="Cấp lại mật khẩu">
                      <Lock size={18}/>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors tooltip" title="Khóa tài khoản">
                      <Ban size={18}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderCreateModal = () => (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
            className="bg-white rounded-[2.5rem] w-full max-w-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Cấp tài khoản mới</h2>
                <p className="text-sm font-medium text-gray-500 mt-1">Phân quyền Học sinh & Phụ huynh</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 bg-white hover:bg-gray-100 rounded-full text-gray-500 shadow-sm transition-colors">
                <X size={20}/>
              </button>
            </div>

            <div className="p-8">
              {/* Creation Mode Toggle */}
              <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
                <button onClick={() => setCreationMode('single')} className={`flex-1 py-3 font-bold text-sm rounded-xl transition-all ${creationMode === 'single' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Tạo thủ công (Từng người)
                </button>
                <button onClick={() => setCreationMode('batch')} className={`flex-1 py-3 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 ${creationMode === 'batch' ? 'bg-emerald-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  <FileSpreadsheet size={18}/> Nhập từ Excel (Hàng loạt)
                </button>
              </div>

              {/* Dynamic Body */}
              <AnimatePresence mode="wait">
                {creationMode === 'single' ? (
                  <motion.div key="single" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Loại tài khoản</label>
                      <select 
                        value={accountType} 
                        onChange={(e) => setAccountType(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-gray-900 appearance-none"
                      >
                        <option value="student">Học Sinh</option>
                        <option value="parent">Phụ Huynh</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên</label>
                        <input type="text" placeholder="Nguyễn Văn A" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-medium"/>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          {accountType === 'student' ? 'Lớp học' : 'Số điện thoại'}
                        </label>
                        <input type="text" placeholder={accountType === 'student' ? "VD: 12A1" : "VD: 090..."} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-medium"/>
                      </div>
                    </div>

                    {/* Linking logic for Parent */}
                    {accountType === 'parent' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                        <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                          <label className="block text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
                            <LinkIcon size={16}/> Gắn kết với Học sinh (Bắt buộc)
                          </label>
                          <select className="w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 outline-none font-medium text-amber-900">
                            <option>-- Chọn học sinh của phụ huynh này --</option>
                            <option>Nguyễn Văn An (12A1)</option>
                            <option>Trần Thị Bích (12A1)</option>
                          </select>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div key="batch" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                    <div className="border-2 border-dashed border-emerald-200 rounded-3xl p-12 flex flex-col items-center justify-center bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-400 transition-all cursor-pointer text-center">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-500 mb-4">
                        <FileSpreadsheet size={32}/>
                      </div>
                      <p className="font-extrabold text-gray-900 text-lg">Tải lên danh sách Excel</p>
                      <p className="text-gray-500 text-sm font-medium mt-2 max-w-sm">
                        Hệ thống sẽ tự động sinh tài khoản cho Học sinh và tài khoản Phụ huynh gắn kèm (dựa trên SĐT trong file).
                      </p>
                      <button className="mt-6 px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm flex items-center gap-2 hover:bg-gray-50">
                        <Mail size={16}/> Tải file mẫu (Template)
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">Hủy bỏ</button>
              <button className="px-8 py-3 bg-primary text-white font-extrabold rounded-xl shadow-lg hover:bg-primaryDark transition-all">
                Xác nhận tạo
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Cấp tài khoản</h1>
          <p className="text-gray-500 mt-1 font-medium">Quản lý và cấp phát tài khoản truy cập cho Học sinh & Phụ huynh.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3.5 bg-gray-900 text-white rounded-2xl font-bold shadow-lg hover:bg-black hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <UserPlus size={20}/> Cấp tài khoản mới
        </button>
      </div>

      {renderTopStats()}
      {renderTable()}
      {renderCreateModal()}
    </div>
  );
};

export default TeacherAccounts;
