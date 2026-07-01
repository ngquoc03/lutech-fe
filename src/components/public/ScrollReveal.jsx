import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }} // Thêm perspective để tạo hiệu ứng 3D
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;