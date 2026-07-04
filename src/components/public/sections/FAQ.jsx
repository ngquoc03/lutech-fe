import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
  { q: "EduTech phù hợp với quy mô trung tâm nào?", a: "EduTech được thiết kế linh hoạt. Dù bạn là một giáo viên dạy kèm nhóm nhỏ, hay chuỗi trung tâm với hàng ngàn học viên, hệ thống đều đáp ứng tốt nhờ khả năng phân quyền và mở rộng linh hoạt." },
  { q: "Hệ thống có cần phần cứng đặc biệt không?", a: "EduTech là nền tảng SaaS hoàn toàn trên nền tảng đám mây. Bạn chỉ cần một chiếc máy tính hoặc máy tính bảng kết nối internet là có thể quản lý mọi hoạt động dạy và học." },
  { q: "Tôi có được hỗ trợ nhập dữ liệu cũ không?", a: "Đội ngũ kỹ thuật của chúng tôi hỗ trợ import danh sách học viên, lịch sử điểm số và ngân hàng đề thi từ Excel/Word vào hệ thống một cách nhanh chóng và chính xác." },
  { q: "Làm thế nào để giáo viên làm quen với EduTech?", a: "Chúng tôi cung cấp bộ video hướng dẫn chi tiết, tài liệu PDF và buổi đào tạo trực tuyến 1:1 cho đội ngũ giáo viên của bạn. Thông thường, giáo viên chỉ cần 2 giờ để làm chủ hệ thống." },
  { q: "Dữ liệu có được sao lưu thường xuyên không?", a: "Chúng tôi thực hiện backup dữ liệu hàng ngày (Daily Backup). Dữ liệu của bạn luôn an toàn trong trường hợp xảy ra sự cố ngoài ý muốn." },
  { q: "Tôi muốn yêu cầu tính năng riêng cho trung tâm thì sao?", a: "Chúng tôi có gói dịch vụ phát triển tính năng tùy chỉnh (Custom Dev). Hãy liên hệ với đội ngũ kỹ thuật để được tư vấn lộ trình thực hiện." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Câu hỏi thường gặp</h2>
        {FAQ_DATA.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-200 rounded-2xl overflow-hidden">
            <button 
              className="w-full p-6 flex justify-between items-center font-bold text-lg bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              {item.q}
              {openIndex === index ? <ChevronUp className="text-primary"/> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-6 text-gray-600 leading-relaxed bg-white">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQ;