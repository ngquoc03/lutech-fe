import React, { useState } from 'react';
import { 
  Search, Filter, MoreVertical, Edit2, ShieldBan, ShieldCheck, Mail, Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const USERS = [
    { id: 'GV001', name: 'Hoàng Lê', subject: 'Toán học', email: 'hoangle@lutech.edu', status: 'active', joinDate: '01/05/2026' },
    { id: 'GV002', name: 'Mai Phương', subject: 'Vật lý', email: 'maiphuong@lutech.edu', status: 'active', joinDate: '10/06/2026' },
    { id: 'GV003', name: 'David Smith', subject: 'Tiếng Anh', email: 'david@lutech.edu', status: 'active', joinDate: '15/07/2026' },
    { id: 'GV004', name: 'Nguyễn Văn Tâm', subject: 'Hóa học', email: 'tam.nguyen@lutech.edu', status: 'inactive', joinDate: '20/08/2026' },
    { id: 'GV005', name: 'Lê Cường', subject: 'Sinh học', email: 'cuongle@lutech.edu', status: 'banned', joinDate: '01/09/2026' },
  ];

  const filteredUsers = activeTab === 'all' ? USERS : USERS.filter(u => u.status === activeTab);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active': return <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase rounded-full border border-emerald-100">Đang hoạt động</span>;
      case 'inactive': return <span className="px-2.5 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-black uppercase rounded-full border border-zinc-200">Tạm nghỉ</span>;
      case 'banned': return <span className="px-2.5 py-1 bg-rose-50 text-rose-600 text-[10px] font-black uppercase rounded-full border border-rose-100">Đã khóa</span>;
      default: return null;
    }
  };

  const renderAddModal = () => (
    <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
      >
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
          <h2 className="text-xl font-extrabold text-zinc-900">Cấp tài khoản Giáo viên</h2>
          <button onClick={() => setIsAddModalOpen(false)} className="text-zinc-400 hover:text-zinc-600">
            <MoreVertical className="rotate-90" size={24}/>
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-2 block">Họ và tên</label>
            <input type="text" placeholder="Nhập tên giáo viên..." className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-zinc-900"/>
          </div>
          <div>
            <label className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-2 block">Bộ môn giảng dạy</label>
            <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-zinc-900">
              <option>Toán học</option>
              <option>Vật lý</option>
              <option>Hóa học</option>
              <option>Tiếng Anh</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-2 block">Email liên hệ</label>
            <input type="email" placeholder="Ví dụ: teacher@lutech.edu" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-zinc-900"/>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <p className="text-xs font-medium text-amber-800">
              Mật khẩu mặc định sẽ được gửi qua Email của giáo viên. Họ sẽ được yêu cầu đổi mật khẩu ở lần đăng nhập đầu tiên.
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex gap-4">
          <button onClick={() => setIsAddModalOpen(false)} className="flex-1 py-3 text-zinc-600 font-bold hover:bg-zinc-200 rounded-xl transition-colors">Hủy</button>
          <button onClick={() => setIsAddModalOpen(false)} className="flex-1 py-3 bg-zinc-900 text-white font-bold hover:bg-zinc-800 rounded-xl transition-colors shadow-lg">Tạo tài khoản</button>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Quản lý Giáo viên</h1>
          <p className="text-zinc-500 mt-1 font-medium">Hệ thống cấp phát tài khoản và phân quyền cho Giáo viên.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-colors flex items-center gap-2"
        >
          <Plus size={20}/> Cấp tài khoản mới
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-zinc-200 shadow-sm overflow-hidden flex flex-col">
        
        {/* Toolbar */}
        <div className="p-6 border-b border-zinc-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-zinc-50/50">
          
          <div className="flex bg-zinc-100 p-1 rounded-xl w-full md:w-auto">
            {['all', 'active', 'inactive', 'banned'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-zinc-900 shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                {tab === 'all' ? 'Tất cả' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm giáo viên..." 
                className="w-full pl-10 pr-4 py-2 bg-white border border-zinc-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-100 text-xs font-black text-zinc-400 uppercase tracking-wider">
                <th className="p-4 pl-6">Mã GV / Họ Tên</th>
                <th className="p-4">Bộ môn</th>
                <th className="p-4">Liên hệ</th>
                <th className="p-4">Ngày tham gia</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4 text-right pr-6">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, idx) => (
                <tr key={user.id} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900">{user.name}</p>
                        <p className="text-xs font-medium text-zinc-400">{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-zinc-600 bg-white border border-zinc-200 px-2 py-0.5 rounded text-xs font-bold">{user.subject}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-600">
                      <Mail size={14} className="text-zinc-400"/> {user.email}
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-zinc-600">{user.joinDate}</td>
                  <td className="p-4">{getStatusBadge(user.status)}</td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Chỉnh sửa">
                        <Edit2 size={16} />
                      </button>
                      {user.status === 'banned' ? (
                        <button className="p-2 text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Mở khóa">
                          <ShieldCheck size={16} />
                        </button>
                      ) : (
                        <button className="p-2 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Khóa tài khoản">
                          <ShieldBan size={16} />
                        </button>
                      )}
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

export default AdminUsers;
