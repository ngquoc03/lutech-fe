import React from 'react';

const PARTNERS = [
  "Trường THPT Chuyên", "Hệ thống IELTS Pro", "Hội Sinh Viên ĐH", 
  "Cộng đồng Giáo viên Anh ngữ", "Global Learning"
];

const Trust = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
          Được tin dùng bởi hơn 10,000 học sinh & giáo viên tại các đơn vị
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {PARTNERS.map((partner, index) => (
            <div 
              key={index} 
              className="text-center font-bold text-gray-400 hover:text-primary transition duration-300 cursor-pointer text-lg md:text-xl"
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