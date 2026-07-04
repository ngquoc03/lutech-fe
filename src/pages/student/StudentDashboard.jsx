import React from 'react';
import {
  BookOpen, Calendar, Clock, Trophy,
  ChevronRight, PlayCircle, CheckCircle2, AlertCircle
} from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-lg relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 right-32 w-48 h-48 bg-teal-300/20 rounded-full blur-2xl translate-y-1/3"></div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Sẵn sàng chinh phục mục tiêu mới, An ơi! 🎯</h2>
          <p className="text-emerald-50 text-lg font-medium leading-relaxed mb-8 opacity-90">
            Tuần này bạn có 2 bài tập sắp đến hạn và 3 bài giảng mới được thầy Hoàng thêm vào. Hãy duy trì nhịp độ học tập tuyệt vời này nhé!
          </p>
          <button className="px-6 py-3 bg-white text-emerald-600 font-extrabold rounded-xl shadow-md hover:scale-105 transition-transform flex items-center gap-2">
            <PlayCircle size={20} /> Bắt đầu bài học tiếp theo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cột trái: Stats & Tiến độ */}
        <div className="lg:col-span-2 space-y-8">

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-3">
                <BookOpen size={24} />
              </div>
              <p className="text-2xl font-black text-gray-900">12</p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-1">Bài học đã xem</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-3">
                <Clock size={24} />
              </div>
              <p className="text-2xl font-black text-gray-900">45<span className="text-base text-gray-500">h</span></p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-1">Thời gian học</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-3">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-2xl font-black text-gray-900">8</p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-1">Bài tập hoàn thành</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-3">
                <Trophy size={24} />
              </div>
              <p className="text-2xl font-black text-gray-900">9.2</p>
              <p className="text-xs font-bold text-gray-400 uppercase mt-1">Điểm trung bình</p>
            </div>
          </div>

          {/* Bài giảng tiếp theo */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-gray-900">Bài giảng tiếp theo</h3>
              <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700">Xem tất cả</button>
            </div>

            <div className="space-y-4">
              <div className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80" alt="Toán học" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <PlayCircle className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Toán Đại số 12</p>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">Bài 3: Giá trị lớn nhất, giá trị nhỏ nhất của hàm số</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[60%]"></div>
                    </div>
                    <span className="text-xs font-bold text-gray-500">60%</span>
                  </div>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1546410531-bea4edad646a?w=500&q=80" alt="Vật lý" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <PlayCircle className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Vật lý 12</p>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">Bài 1: Dao động điều hòa (Phần 1)</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[0%]"></div>
                    </div>
                    <span className="text-xs font-bold text-gray-500">Chưa bắt đầu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Cột phải: Tasks & Lịch */}
        <div className="space-y-8">

          {/* Cần làm ngay (To-Do) */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0"></div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 relative z-10 flex items-center gap-2">
              <AlertCircle className="text-amber-500" size={24} /> Việc cần làm
            </h3>

            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-2xl hover:border-amber-200 hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase rounded-full">Sắp hết hạn</span>
                  <span className="text-xs font-bold text-gray-400">Còn 2 ngày</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Bài tập trắc nghiệm Cực trị</h4>
                <p className="text-sm text-gray-500 font-medium">Toán Đại số 12 • Thầy Hoàng Lê</p>
              </div>

              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-2xl hover:border-primary/20 hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-full">Bài mới</span>
                  <span className="text-xs font-bold text-gray-400">Còn 5 ngày</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Thi thử Giữa kỳ (Kết hợp)</h4>
                <p className="text-sm text-gray-500 font-medium">Toán Đại số 12 • Thầy Hoàng Lê</p>
              </div>
            </div>
          </div>

          {/* Lịch học sắp tới */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="text-primary" size={24} /> Lịch học tuần này
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-14 h-14 bg-gray-50 rounded-2xl flex-shrink-0 border border-gray-100">
                  <span className="text-xs font-black text-gray-400 uppercase">Thứ 3</span>
                  <span className="text-lg font-black text-gray-900 leading-none mt-1">15</span>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900">Toán Đại số 12</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">14:00 - 15:30 • Phòng Học Live 1</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-14 h-14 bg-gray-50 rounded-2xl flex-shrink-0 border border-gray-100">
                  <span className="text-xs font-black text-gray-400 uppercase">Thứ 5</span>
                  <span className="text-lg font-black text-gray-900 leading-none mt-1">17</span>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-900">Vật lý 12</h4>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">08:00 - 09:30 • Lớp Offline</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
