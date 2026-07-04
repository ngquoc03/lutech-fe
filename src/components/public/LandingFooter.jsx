import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const LandingFooter = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        {/* Cột 1: Thông tin thương hiệu */}
        <div className="space-y-4">
          <div className="text-2xl font-bold text-primary flex items-center gap-2">
            <GraduationCap /> EduTech
          </div>
          <p className="text-textLight text-sm">
            Nền tảng quản lý giáo dục toàn diện, tối ưu hóa trải nghiệm học tập và giảng dạy cho trung tâm ngoại ngữ.
          </p>
        </div>

        {/* Cột 2: Quick Links */}
        <div>
          <h4 className="font-bold text-text mb-4">Về EduTech</h4>
          <ul className="space-y-2 text-textLight text-sm">
            <li><a href="#" className="hover:text-primary">Giới thiệu</a></li>
            <li><a href="#" className="hover:text-primary">Tuyển dụng</a></li>
            <li><a href="#" className="hover:text-primary">Điều khoản dịch vụ</a></li>
            <li><a href="#" className="hover:text-primary">Chính sách bảo mật</a></li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ */}
        <div>
          <h4 className="font-bold text-text mb-4">Hỗ trợ</h4>
          <ul className="space-y-2 text-textLight text-sm">
            <li><a href="#" className="hover:text-primary">Trung tâm trợ giúp</a></li>
            <li><a href="#" className="hover:text-primary">Hướng dẫn sử dụng</a></li>
            <li><a href="#" className="hover:text-primary">Liên hệ đối tác</a></li>
          </ul>
        </div>

        {/* Cột 4: Liên hệ */}
        <div className="space-y-4">
          <h4 className="font-bold text-text">Liên hệ</h4>
          <div className="flex items-center gap-2 text-textLight text-sm">
            <Mail size={16} /> <span>contact@edutech.vn</span>
          </div>
          <div className="flex items-center gap-2 text-textLight text-sm">
            <Phone size={16} /> <span>0900 123 456</span>
          </div>
          <div className="flex items-center gap-2 text-textLight text-sm">
            <MapPin size={16} /> <span>Quận 1, TP. Hồ Chí Minh</span>
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border text-center text-textLight text-sm">
        © 2026 EduTech Educational System. All rights reserved.
      </div>
    </footer>
  );
};

export default LandingFooter;