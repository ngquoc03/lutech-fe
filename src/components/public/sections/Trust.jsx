import React from 'react';

const PARTNERS = [
  "Anh ngữ Quốc tế LuTech", "Hệ thống IELTS Pro", "Trung tâm ngoại ngữ Alpha", 
  "Academy of English", "Global Learning Center"
];

const Trust = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
          Được tin dùng bởi các đơn vị đào tạo hàng đầu
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {PARTNERS.map((partner, index) => (
            <div 
              key={index} 
              className="text-center font-bold text-gray-400 hover:text-primary transition duration-300 cursor-pointer text-lg"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Trust;