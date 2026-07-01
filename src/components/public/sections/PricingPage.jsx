import React from 'react';
import { Check } from 'lucide-react';

const PLANS = [
  { name: "Cơ bản", price: "299k", features: ["100 học viên", "Chấm thi cơ bản", "Hỗ trợ Email"] },
  { name: "Chuyên nghiệp", price: "999k", features: ["500 học viên", "Chấm thi AI", "App phụ huynh", "Báo cáo sâu"] },
  { name: "Doanh nghiệp", price: "Liên hệ", features: ["Không giới hạn", "API Tùy chỉnh", "Support 24/7", "Setup tại chỗ"] }
];

const PricingPage = () => (
  <div className="py-24 max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16">Bảng giá tối ưu cho mọi quy mô</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {PLANS.map((p, i) => (
        <div key={i} className="p-10 border rounded-3xl hover:border-primary transition">
          <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
          <div className="text-5xl font-extrabold mb-8">{p.price}<span className="text-lg">/tháng</span></div>
          <ul className="space-y-4 mb-8">
            {p.features.map(f => <li key={f} className="flex gap-2"><Check className="text-primary"/> {f}</li>)}
          </ul>
          <button className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold">Chọn gói</button>
        </div>
      ))}
    </div>
  </div>
);
export default PricingPage;