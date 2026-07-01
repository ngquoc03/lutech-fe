import React from 'react';
import LandingNavbar from '../../components/public/LandingNavbar';
import LandingFooter from '../../components/public/LandingFooter';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNavbar />
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Thông tin liên hệ */}
        <div>
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Hỗ trợ 24/7</span>
          <h1 className="text-5xl font-extrabold mb-8 leading-tight">Hãy để chúng tôi <br/><span className="text-primary">lắng nghe bạn</span></h1>
          <p className="text-gray-600 text-lg mb-12">Dù bạn có thắc mắc về tính năng, bảng giá hay cần tư vấn giải pháp triển khai riêng biệt, đội ngũ LuTech luôn sẵn sàng đồng hành.</p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm text-primary"><MapPin size={28}/></div>
              <div>
                <h4 className="font-bold text-xl mb-1">Trụ sở chính</h4>
                <p className="text-gray-600">Tòa nhà LuTech, Quận 1, TP. Hồ Chí Minh</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm text-primary"><Phone size={28}/></div>
              <div>
                <h4 className="font-bold text-xl mb-1">Hotline</h4>
                <p className="text-gray-600">1900 8888 (Phím 1 để hỗ trợ kỹ thuật)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm text-primary"><Mail size={28}/></div>
              <div>
                <h4 className="font-bold text-xl mb-1">Email liên hệ</h4>
                <p className="text-gray-600">hello@lutech.vn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form gửi tin nhắn */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold mb-8">Gửi yêu cầu tư vấn</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên *</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại *</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
              <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung yêu cầu</label>
              <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"></textarea>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition flex justify-center items-center gap-2">
              Gửi yêu cầu <Send size={20} />
            </button>
          </form>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
};
export default ContactPage;