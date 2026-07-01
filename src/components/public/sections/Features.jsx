import { Zap, BookOpen, Monitor, Award, BarChart2, ShieldCheck } from 'lucide-react';

const FEATURES_LIST = [
  { 
    title: "Chấm điểm AI Tự động", 
    icon: <Zap size={32}/>, 
    desc: "Hệ thống AI xử lý bài làm Reading/Listening trong tích tắc, cung cấp bảng phân tích lỗi sai chi tiết giúp học viên hiểu rõ điểm yếu." 
  },
  { 
    title: "Kho đề thi IELTS chuẩn Cambridge", 
    icon: <BookOpen size={32}/>, 
    desc: "Sở hữu kho đề thi khổng lồ được cập nhật liên tục, hỗ trợ tính năng làm đề online mô phỏng y hệt phòng thi thực tế." 
  },
  { 
    title: "Dashboard Quản lý 360 độ", 
    icon: <Monitor size={32}/>, 
    desc: "Giao diện dành riêng cho giáo viên để quản lý lớp học, giao bài tập, theo dõi chuyên cần và điểm danh tự động." 
  },
  { 
    title: "Chứng chỉ điện tử xác thực", 
    icon: <Award size={32}/>, 
    desc: "Tự động cấp phát chứng chỉ hoàn thành khóa học có tích hợp mã QR xác thực, tăng uy tín cho trung tâm của bạn." 
  },
  { 
    title: "Phân tích dự báo (Predictive Analytics)", 
    icon: <BarChart2 size={32}/>, 
    desc: "Dựa trên dữ liệu học tập, LuTech dự báo Band điểm IELTS của học viên, giúp giáo viên điều chỉnh giáo án phù hợp." 
  },
  { 
    title: "Bảo mật dữ liệu tuyệt đối", 
    icon: <ShieldCheck size={32}/>, 
    desc: "Hệ thống lưu trữ dữ liệu tập trung, sao lưu định kỳ, đảm bảo thông tin học viên không bị rò rỉ ra ngoài." 
  }
];

const Features = () => (
  <section className="py-24 bg-gray-50 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Hệ sinh thái giảng dạy toàn diện</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES_LIST.map((f, i) => (
          <div key={i} className="p-8 bg-white border rounded-3xl hover:shadow-xl transition">
            <div className="text-primary mb-6">{f.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Features;