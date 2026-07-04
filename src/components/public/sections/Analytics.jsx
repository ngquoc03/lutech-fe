import React from 'react';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';

const METRICS = [
  { title: "Cải thiện Band điểm", value: "98%", icon: <TrendingUp />, desc: "Học sinh tăng ít nhất 0.5 Band sau 2 tháng" },
  { title: "Truy cập mọi lúc", value: "24/7", icon: <Clock />, desc: "Học tập không giới hạn thời gian" },
  { title: "Giáo viên tin dùng", value: "500+", icon: <Users />, desc: "Đã sử dụng EduTech để quản lý lớp" },
  { title: "Tốc độ chấm bài", value: "0.5s", icon: <BarChart2 />, desc: "AI trả kết quả ngay tức thì" }
];

const Analytics = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Những con số biết nói</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {METRICS.map((m, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="text-primary mb-4 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">{m.icon}</div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900">{m.value}</div>
              <h4 className="font-bold text-lg mb-1 text-gray-800">{m.title}</h4>
              <p className="text-sm text-gray-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Analytics;