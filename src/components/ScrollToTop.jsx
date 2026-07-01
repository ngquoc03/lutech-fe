import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuộn lên đầu trang (root window)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Xử lý cuộn lên đầu cho các container có overflow-y-auto (Ví dụ: Main content area trong các Layout)
    const mainContainers = document.querySelectorAll('main, .overflow-y-auto');
    mainContainers.forEach(container => {
      container.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
