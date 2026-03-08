
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Bosh Sahifa", href: "#home" },
    { name: "Xizmatlar", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Bog'lanish", href: "#contact" }
  ];

  // Yumshoq skroll qilish funksiyasi
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Navbar balandligini hisobga olgan holda skroll qilish
      const offset = 80; // index.html dagi scroll-margin-top ga mos keladi
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-[200] shadow-md border-b border-green-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 relative">
          
          {/* Logo Container - Mobil uchun markazlashtirilgan, Desktop uchun chapda */}
          <div 
            className="flex items-center cursor-pointer group z-10 md:static absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 transition-all duration-300" 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}
          >
            <div className="flex flex-col items-center md:items-start">
               <div className="flex items-center">
                 <span className="text-2xl md:text-4xl font-black text-green-700 tracking-tighter leading-none">RIVOJ</span>
               </div>
               {/* Slogan yozuvi - 2 qatorga bo'lingan va tartibga keltirilgan */}
               <span className="text-[7px] md:text-[10px] uppercase font-extrabold text-green-900 tracking-[0.08em] text-center md:text-left mt-1.5 leading-[1.3] max-w-[150px] md:max-w-[210px] opacity-90">
                 Poyabzal ishlab chiqaruvchilarga<br/>xizmat ko'rsatish markazi
               </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="flex items-center">
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-900 hover:text-green-600 font-black transition-all relative group text-[10px] lg:text-xs uppercase tracking-widest whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </a>
                {link.name === "Bog'lanish" && (
                  <a 
                    href="tel:+998941357010"
                    className="ml-3 flex items-center bg-green-600 text-white px-3 py-2 rounded-full text-[10px] font-bold tracking-normal hover:bg-green-700 transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <i className="fas fa-phone-alt mr-1.5 text-[8px]"></i>
                    +998 94 135 70 10
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center ml-auto z-10">
            <button 
              onClick={toggleMenu}
              className="text-green-700 focus:outline-none p-2 bg-green-50 rounded-lg active:scale-90 transition-transform"
              aria-label="Menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-20 bg-white z-[190] md:hidden transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex flex-col items-center">
              <a 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ transitionDelay: `${index * 75}ms` }}
                className={`text-2xl font-black text-gray-900 hover:text-green-600 uppercase tracking-widest transition-all transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
              >
                {link.name}
              </a>
              {link.name === "Bog'lanish" && (
                <a 
                  href="tel:+998941357010"
                  style={{ transitionDelay: `${(index + 1) * 75}ms` }}
                  className={`mt-4 flex items-center bg-green-600 text-white px-6 py-3 rounded-2xl text-lg font-bold transition-all transform shadow-xl ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                >
                  <i className="fas fa-phone-alt mr-3"></i>
                  +998 94 135 70 10
                </a>
              )}
            </div>
          ))}
          
          {/* Social Icons in Mobile Menu */}
          <div className={`flex space-x-8 pt-4 transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="https://t.me/Rivoj_Lazer" target="_blank" rel="noreferrer" className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
              <i className="fab fa-telegram-plane text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/rivoj_lazer?igsh=MWg0MGo0bG51NDR0ZQ==" target="_blank" rel="noreferrer" className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
