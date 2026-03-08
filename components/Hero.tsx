
import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://devel.prom.uz/upload//category_logos/july/lazernoe-oborudovanie.png",
    title: "YUQORI ANIQIK",
    subtitle: "Lazer yordamida poyabzal detallarini mukammal kesish"
  },
  {
    image: "https://devel.prom.uz/upload//category_logos/july/oborudovanie-dlya-lazernoy-rezki.png",
    title: "TEZKORLIK",
    subtitle: "Sizning buyurtmalaringizni qisqa muddatlarda tayyorlaymiz"
  },
  {
    image: "https://redshiftlaser.com/wp-content/uploads/galvo-gantry-laser-machine.png",
    title: "ZAMONAVIY TEXNOLOGIYA",
    subtitle: "Eng so'nggi rusumdagi lazer uskunalari xizmatingizda"
  }
];

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[650px] w-full overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-green-200 rounded-full blur-[120px] float-bg"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-orange-100 rounded-full blur-[120px] float-bg" style={{animationDelay: '-5s'}}></div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-start px-4 pt-28 md:pt-48 transition-all duration-1000 ease-in-out ${
            index === activeSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
          }`}
        >
          {/* Lazer Scanning Line + Image Container */}
          <div className="relative w-full max-w-lg md:max-w-5xl h-[35vh] md:h-[45vh] flex items-center justify-center md:mt-8 reveal-on-scroll">
            <div className="lazer-scan hidden md:block opacity-60"></div>
            <div 
              className="w-full h-full bg-contain bg-no-repeat bg-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-transform duration-700 hover:scale-[1.01]" 
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>

          {/* Text Content */}
          <div className="mt-8 md:mt-16 text-center px-6 max-w-4xl relative z-20 reveal-on-scroll" style={{ animationDelay: '0.4s' }}>
             <div className="inline-block px-4 py-1 rounded-full bg-green-50 border border-green-100 mb-3 md:mb-6">
                <h1 className="text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.6em] text-green-600 uppercase">
                  {slide.title}
                </h1>
             </div>
             <p className="text-xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight md:leading-[1.15] max-w-3xl mx-auto">
               {slide.subtitle}
             </p>
          </div>
        </div>
      ))}
      
      {/* Slayder Nuqtalari */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3 md:space-x-4 reveal-on-scroll" style={{ animationDelay: '0.8s' }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-700 ${
              index === activeSlide ? 'w-12 md:w-32 bg-green-600 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 'w-3 md:w-6 bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
