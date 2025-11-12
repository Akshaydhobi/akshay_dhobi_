
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Akshay Lalabhai Dhobi. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed with ❤️ and React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
