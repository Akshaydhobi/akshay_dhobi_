import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 animate-gradient-xy"></div>
      {/* Animated Shapes Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
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

        /* Animated shapes */
        .shape {
          position: absolute;
          border-radius: 50%;
          animation: float 20s infinite ease-in-out;
        }
        .shape-1 {
          width: 200px; height: 200px;
          background-color: #67e8f9; /* cyan-300 */
          top: 10%; left: 15%;
          animation-duration: 25s;
        }
        .shape-2 {
          width: 150px; height: 150px;
          background-color: #818cf8; /* indigo-400 */
          bottom: 15%; right: 10%;
          animation-duration: 22s;
          animation-delay: 3s;
        }
        .shape-3 {
          width: 80px; height: 80px;
          background-color: #a5b4fc; /* indigo-300 */
          top: 25%; right: 25%;
          animation-duration: 18s;
          animation-delay: 1s;
        }
        .shape-4 {
          width: 120px; height: 120px;
          background-color: #22d3ee; /* cyan-400 */
          bottom: 20%; left: 20%;
          animation-duration: 20s;
          animation-delay: 5s;
        }

        @keyframes float {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(20px) rotate(90deg); }
          100% { transform: translateY(0) translateX(0) rotate(0deg); }
        }
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