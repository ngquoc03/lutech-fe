import React from 'react';
import { 
  Users, Activity, CreditCard, ArrowUpRight, 
  Server, Globe, Database, ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">System Status</h1>
          <p className="text-zinc-500 mt-1 font-medium">Tổng quan số liệu và tình trạng sức khỏe của nền tảng EduTech.</p>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl border border-zinc-200 shadow-sm flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <p className="text-xs font-black text-zinc-400 uppercase tracking-wider">Uptime</p>
            <p className="text-sm font-black text-zinc-700">99.99% (30 days)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric Cards */}
        <div className="bg-white p-6 rounded-[2rem] border border-zinc-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              <ArrowUpRight size={14}/> 12.5%
            </span>
          </div>
          <p className="text-3xl font-black text-zinc-900 mb-1">12,450</p>
          <p className="text-sm font-bold text-zinc-500">Người dùng Active</p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-zinc-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <CreditCard size={24} />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              <ArrowUpRight size={14}/> 8.2%
            </span>
          </div>
          <p className="text-3xl font-black text-zinc-900 mb-1">450.2M ₫</p>
          <p className="text-sm font-bold text-zinc-500">Doanh thu tháng này</p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-zinc-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Activity size={24} />
            </div>
          </div>
          <p className="text-3xl font-black text-zinc-900 mb-1">1,204</p>
          <p className="text-sm font-bold text-zinc-500">Phiên học đang diễn ra</p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-zinc-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Server size={24} />
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
              Warning
            </span>
          </div>
          <p className="text-3xl font-black text-zinc-900 mb-1">78%</p>
          <p className="text-sm font-bold text-zinc-500">Tải máy chủ (CPU Load)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* System Health */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-zinc-200 shadow-sm">
          <h3 className="text-xl font-extrabold text-zinc-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="text-emerald-500" size={24}/> Trạng thái Dịch vụ
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Globe size={20} className="text-blue-500"/>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Web App (Frontend)</h4>
                  <p className="text-xs font-medium text-zinc-500">Vercel Edge Network</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Online
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Server size={20} className="text-purple-500"/>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Core API (Node.js)</h4>
                  <p className="text-xs font-medium text-zinc-500">AWS EC2 - us-east-1</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Online
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Database size={20} className="text-amber-500"/>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">PostgreSQL Database</h4>
                  <p className="text-xs font-medium text-zinc-500">AWS RDS</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> High Load
              </div>
            </div>
          </div>
        </div>

        {/* Recent Registrations */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 shadow-sm">
          <h3 className="text-xl font-extrabold text-zinc-900 mb-6">Đăng ký mới</h3>
          <div className="space-y-4">
            {[
              { name: 'Nguyễn Văn A', role: 'Student', time: '5 phút trước' },
              { name: 'Trần Thị B', role: 'Parent', time: '12 phút trước' },
              { name: 'Hoàng Lê', role: 'Teacher', time: '1 giờ trước' },
              { name: 'Phạm C', role: 'Student', time: '3 giờ trước' }
            ].map((user, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-bold text-sm">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-zinc-900">{user.name}</p>
                  <p className="text-xs font-medium text-zinc-500">{user.role}</p>
                </div>
                <span className="text-[10px] font-black text-zinc-400">{user.time}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-zinc-50 text-zinc-600 rounded-xl font-bold hover:bg-zinc-100 transition-colors border border-zinc-200">
            Xem tất cả
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
