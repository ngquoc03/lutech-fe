import React from 'react';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';

const METRICS = [
  { title: "Tỉ lệ đạt Band điểm", value: "98%", icon: <TrendingUp />, desc: "Dự báo năng lực học viên" },
  { title: "Thời gian học tập", value: "24/7", icon: <Clock />, desc: "Hệ thống truy cập mọi lúc" },
  { title: "Số lượng học viên", value: "1500+", icon: <Users />, desc: "Đang tin dùng LuTech" },
  { title: "Hiệu suất chấm thi", value: "0.5s", icon: <BarChart2 />, desc: "Tốc độ xử lý AI vượt trội" }
];

const Analytics = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Trí tuệ dữ liệu cho nhà quản lý</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {METRICS.map((m, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl hover:bg-primary/5 transition">
              <div className="text-primary mb-4">{m.icon}</div>
              <div className="text-4xl font-extrabold mb-2">{m.value}</div>
              <h4 className="font-bold text-lg mb-1">{m.title}</h4>
              <p className="text-sm text-gray-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Analytics;