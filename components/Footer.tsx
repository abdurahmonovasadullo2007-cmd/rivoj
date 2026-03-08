
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
          <div className="text-center md:text-left">
             <div className="flex flex-col items-center md:items-start">
               <span className="text-4xl font-black text-green-500 tracking-tighter leading-none mb-2">RIVOJ</span>
               <p className="text-gray-400 text-sm max-w-[250px] leading-relaxed">
                 Poyabzal ishlab chiqaruvchilarga yuqori sifatli lazer xizmatlarini ko'rsatish markazi.
               </p>
             </div>
          </div>
          
          <div className="flex flex-col items-center">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-green-500 mb-6">Biz ijtimoiy tarmoqlarda</h5>
            <div className="flex space-x-6">
              <a 
                href="https://t.me/Rivoj_Lazer" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram-plane text-2xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/rivoj_lazer?igsh=MWg0MGo0bG51NDR0ZQ==" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-green-500 mb-6">Aloqa uchun</h5>
            <a href="tel:+998941357010" className="text-xl font-bold text-white hover:text-green-400 transition-colors">
              +998 94 135 70 10
            </a>
            <p className="text-gray-500 text-xs mt-2">Dushanba - Shanba: 09:00 - 18:00</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-600 text-xs font-medium tracking-wide mb-2">
            &copy; {new Date().getFullYear()} RIVOJ LAZER MARKAZI. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
            Saytni <a href="https://autix.uz" target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-400 transition-colors">autix.uz</a> jamoasi tayyorladi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
