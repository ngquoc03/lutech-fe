import React from 'react';

const Integrations = () => {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Hệ sinh thái tích hợp mở</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            LuTech không chỉ là một phần mềm đơn lẻ. Chúng tôi kết nối với tất cả các công cụ bạn đang dùng hàng ngày để tạo ra quy trình làm việc không gián đoạn.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['Zoom / Google Meet', 'VNPay / MoMo', 'Zalo / Email API', 'Google Calendar'].map(item => (
              <div key={item} className="p-4 border border-white/10 rounded-xl bg-white/5 font-semibold text-center">{item}</div>
            ))}
          </div>
        </div>
        <div className="h-80 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20">
          <p className="text-xl font-bold italic opacity-70">Sơ đồ tích hợp API</p>
        </div>
      </div>
    </section>
  );
};
export default Integrations;