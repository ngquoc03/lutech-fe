import React from 'react';
import { ShieldCheck, Lock, Database, Server } from 'lucide-react';

const TechnicalSecurity = () => {
  return (
    <section className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Bảo mật chuẩn ngân hàng</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Tại EduTech, chúng tôi hiểu dữ liệu học sinh là tài sản quý giá nhất. Hệ thống được xây dựng trên nền tảng Cloud tiên tiến với các tiêu chuẩn bảo mật khắt khe nhất hiện nay.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><ShieldCheck className="text-primary"/> Mã hóa SSL 256-bit toàn diện.</li>
            <li className="flex items-center gap-3"><Database className="text-primary"/> Sao lưu dữ liệu tự động hàng ngày.</li>
            <li className="flex items-center gap-3"><Server className="text-primary"/> Hệ thống Server dự phòng 99.9% uptime.</li>
          </ul>
        </div>
        <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <Lock size={64} className="text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Cam kết quyền riêng tư</h3>
            <p className="text-gray-400">EduTech cam kết không chia sẻ dữ liệu học viên của bạn cho bên thứ ba dưới mọi hình thức. Bạn là chủ sở hữu duy nhất của dữ liệu.</p>
        </div>
      </div>
    </section>
  );
};
export default TechnicalSecurity;