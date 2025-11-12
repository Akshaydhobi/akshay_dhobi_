
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 animate-gradient-xy"></div>
      <style>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 15s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
        .animate-slide-in-up-1 { animation: slideInUp 1s ease-out 0.5s forwards; opacity: 0; }
        .animate-slide-in-up-2 { animation: slideInUp 1s ease-out 0.8s forwards; opacity: 0; }
      `}</style>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight animate-slide-in-up-1">
          Akshay Lalabhai Dhobi
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 animate-slide-in-up-2">
          A Passionate BCA Student & Aspiring Developer
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
