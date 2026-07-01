import React from 'react';
import { 
  Trophy, CheckCircle2, AlertTriangle, Clock, Calendar, 
  ChevronRight, TrendingUp, BookOpen, AlertCircle
} from 'lucide-react';

const ParentDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Tổng quan tình hình học tập</h1>
          <p className="text-gray-500 mt-1 font-medium">Báo cáo tóm tắt quá trình học tập của Nguyễn Văn An.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cột trái: Stats & Tiến độ */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-0 opacity-50"></div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-3 relative z-10 group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <p className="text-2xl font-black text-gray-900 relative z-10">8.75</p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-1 relative z-10">Điểm trung bình</p>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 opacity-50"></div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-3 relative z-10 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-2xl font-black text-gray-900 relative z-10">95%</p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-1 relative z-10">Chuyên cần</p>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -z-0 opacity-50"></div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-3 relative z-10 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <p className="text-2xl font-black text-gray-900 relative z-10">12</p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-1 relative z-10">Bài tập hoàn thành</p>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full -z-0 opacity-50"></div>
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-3 relative z-10 group-hover:scale-110 transition-transform">
                <AlertTriangle size={24} />
              </div>
              <p className="text-2xl font-black text-rose-600 relative z-10">1</p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-1 relative z-10">Vắng mặt/Nộp trễ</p>
            </div>
          </div>

          {/* Lời phê mới nhất từ Giáo viên */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="text-indigo-500" size={24}/> Đánh giá gần đây
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-indigo-50/50 border border-indigo-100 rounded-3xl relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-indigo-900 text-lg">Bài kiểm tra Giữa kỳ - Toán Đại số 12</h4>
                    <p className="text-sm font-bold text-indigo-400 mt-1">Giáo viên: Thầy Hoàng Lê</p>
                  </div>
                  <div className="w-12 h-12 bg-white text-indigo-600 font-black text-xl flex items-center justify-center rounded-2xl shadow-sm">
                    8.5
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-indigo-50 shadow-sm relative">
                  <div className="absolute -top-3 left-4 bg-indigo-100 px-3 py-1 rounded-full text-[10px] font-black text-indigo-700 uppercase tracking-wider">
                    Lời phê
                  </div>
                  <p className="text-sm font-medium text-gray-700 mt-2 leading-relaxed">
                    "An làm bài rất tốt ở phần trắc nghiệm, tuy nhiên phần tự luận còn sai sót ở bước kết luận. Con cần chú ý đọc kỹ đề bài hơn nhé."
                  </p>
                </div>
                <button className="mt-4 text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors">
                  Xem chi tiết bài làm <ChevronRight size={16}/>
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Cột phải: Cảnh báo & Lịch */}
        <div className="space-y-8">
          
          {/* Cảnh báo bài tập (To-Do của con) */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 relative z-10 flex items-center gap-2">
              <AlertCircle className="text-amber-500" size={24}/> Bài tập sắp tới hạn
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-2xl hover:border-amber-200 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase rounded-full">Sắp hết hạn</span>
                  <span className="text-xs font-bold text-rose-500 animate-pulse">Còn 2 ngày</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Bài tập trắc nghiệm Cực trị</h4>
                <p className="text-sm text-gray-500 font-medium">Toán Đại số 12 • Thầy Hoàng Lê</p>
              </div>
            </div>
          </div>

          {/* Lịch học sắp tới */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <Calendar className="text-indigo-500" size={24}/> Lịch học tuần này
              </h3>
              <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800">Xem tất cả</button>
            </div>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-14 h-14 bg-emerald-50 rounded-2xl flex-shrink-0 border border-emerald-100">
                  <span className="text-xs font-black text-emerald-600 uppercase">Thứ 3</span>
                  <span className="text-lg font-black text-emerald-700 leading-none mt-1">15</span>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900">Toán Đại số 12</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">14:00 - 15:30 • Google Meet</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl flex-shrink-0 border border-blue-100">
                  <span className="text-xs font-black text-blue-600 uppercase">Thứ 5</span>
                  <span className="text-lg font-black text-blue-700 leading-none mt-1">17</span>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900">Vật lý Cơ bản 12</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">08:00 - 09:30 • Phòng 302</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
