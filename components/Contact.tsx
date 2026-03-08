
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16 reveal-on-scroll">
          <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase mb-4">
            Muloqot uchun
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Biz bilan bog'laning</h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium px-4">
            Savollaringiz bormi? Mutaxassislarimiz sizga bepul maslahat berishga tayyor.
          </p>
        </div>
        
        {/* Social Links Grid: Mobile-da 2 ustun, kichikroq o'lchamda */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 px-2 md:px-0">
          <a 
            href="https://t.me/Rivoj_Lazer" 
            target="_blank" 
            rel="noreferrer"
            className="reveal-on-scroll group flex flex-col items-center bg-white p-4 md:p-12 rounded-[30px] md:rounded-[50px] shadow-sm border border-gray-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 md:w-24 md:h-24 bg-blue-50 rounded-[15px] md:rounded-[30px] flex items-center justify-center text-blue-500 mb-3 md:mb-8 group-hover:bg-blue-500 group-hover:text-white group-hover:rotate-[15deg] transition-all duration-500">
              <i className="fab fa-telegram-plane text-2xl md:text-5xl"></i>
            </div>
            <div className="text-center">
              <span className="hidden md:block text-xs font-black text-blue-400 uppercase tracking-[0.25em] mb-2">Kanalga a'zo bo'ling</span>
              <span className="block text-base md:text-3xl font-black text-gray-800">Telegram</span>
            </div>
          </a>
          
          <a 
            href="https://www.instagram.com/rivoj_lazer?igsh=MWg0MGo0bG51NDR0ZQ==" 
            target="_blank" 
            rel="noreferrer"
            className="reveal-on-scroll group flex flex-col items-center bg-white p-4 md:p-12 rounded-[30px] md:rounded-[50px] shadow-sm border border-gray-100 hover:border-pink-500/30 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-12 h-12 md:w-24 md:h-24 bg-pink-50 rounded-[15px] md:rounded-[30px] flex items-center justify-center text-pink-500 mb-3 md:mb-8 group-hover:bg-pink-500 group-hover:text-white group-hover:rotate-[-15deg] transition-all duration-500">
              <i className="fab fa-instagram text-2xl md:text-5xl"></i>
            </div>
            <div className="text-center">
              <span className="hidden md:block text-xs font-black text-pink-400 uppercase tracking-[0.25em] mb-2">Profilni kuzatib boring</span>
              <span className="block text-base md:text-3xl font-black text-gray-800">Instagram</span>
            </div>
          </a>
        </div>
        
        <div className="mt-16 md:mt-24 reveal-on-scroll relative overflow-hidden p-8 md:p-16 bg-gradient-to-br from-green-600 to-green-800 rounded-[40px] md:rounded-[60px] text-white shadow-2xl mx-2 md:mx-0">
           <div className="absolute inset-0 z-0 opacity-20">
             <div className="lazer-scan" style={{ animationDuration: '4s' }}></div>
             <div className="lazer-scan" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
           </div>
           
           <div className="relative z-10">
             <h4 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">Loyihangizni boshlaymizmi?</h4>
             <p className="text-sm md:text-xl mb-6 md:mb-12 opacity-90 font-medium max-w-xl mx-auto leading-relaxed">Sizning g'oyangizni lazer yordamida haqiqatga aylantiramiz.</p>
             <a 
               href="https://t.me/Nomonjon7010" 
               target="_blank" 
               rel="noreferrer"
               className="inline-block bg-white text-green-700 px-6 py-4 md:px-12 md:py-6 rounded-[15px] md:rounded-[25px] font-black text-sm md:text-2xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-xl group whitespace-nowrap"
             >
               Hoziroq Buyurtma Bering <i className="fas fa-arrow-right ml-2 md:ml-3 text-xs md:text-lg group-hover:translate-x-1 transition-transform"></i>
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
