import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  // Bắt sự kiện cuộn trang để đổi giao diện Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Đưa danh sách menu vào mảng để code sạch đẹp và dễ bảo trì hơn
  const NAV_LINKS = [
    { title: 'Giải pháp', path: '/solutions' },
    { title: 'Công nghệ', path: '/technology' },
    { title: 'Báo cáo', path: '/reports' },
    { title: 'Bảng giá', path: '/pricing' },
    { title: 'Blog', path: '/blog' },
    { title: 'Liên hệ', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      // Giao diện kính mờ (Glassmorphism) cực kỳ hiện đại khi cuộn
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2 hover:scale-105 transition-transform">
          <GraduationCap size={32} /> EduTech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 font-semibold">
          {NAV_LINKS.map((link, index) => {
            const isActive = location.pathname === link.path; // Kiểm tra trang hiện tại
            return (
              <Link
                key={index}
                to={link.path}
                className={`relative transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.title}
                {/* Dấu chấm tròn nhỏ hiển thị tinh tế dưới menu đang active */}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions (Login & CTA) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/login" className="font-bold text-gray-700 hover:text-primary transition-colors">
            Đăng nhập
          </Link>
          <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primaryDark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Dùng thử ngay
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-b border-gray-100 transition-all duration-300 origin-top ${
        // Hiệu ứng thả xuống mượt mà thay vì giật cục
        mobileMenu ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
      }`}>
        <div className="flex flex-col p-6 space-y-2">
          {NAV_LINKS.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMobileMenu(false)} // Click xong tự động đóng menu
                className={`text-lg font-bold p-4 rounded-2xl transition-colors ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.title}
              </Link>
            );
          })}
          
          <hr className="border-gray-100 my-4" />
          
          <div className="flex flex-col gap-3 pt-2">
            <Link
              to="/login"
              onClick={() => setMobileMenu(false)}
              className="w-full text-center py-4 rounded-2xl font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              Đăng nhập
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="w-full text-center py-4 rounded-2xl font-bold text-white bg-primary hover:bg-primaryDark hover:shadow-lg transition-all"
            >
              Dùng thử ngay
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;