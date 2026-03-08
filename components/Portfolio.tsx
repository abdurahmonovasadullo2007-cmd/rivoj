
import React from 'react';

const stats = [
  { label: "Yakunlagan loyihalar", value: "100 +" },
  { label: "Hamkor mijozlar", value: "30 +" },
  { label: "Tajribamiz", value: "2 yil +" }
];

const Portfolio: React.FC = () => {
  return (
    <div className="py-32 bg-green-950 text-white relative overflow-hidden">
      {/* Moving Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600 rounded-full blur-[150px] opacity-20 -mr-64 -mt-64 float-bg"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-800 rounded-full blur-[150px] opacity-20 -ml-64 -mb-64 float-bg" style={{animationDelay: '-3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 reveal-on-scroll">
          <div className="inline-block px-6 py-2 rounded-full bg-green-900/50 border border-green-700/50 text-green-400 text-xs font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-sm">
            Muvaffaqiyat ko'rsatkichlari
          </div>
          <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
            Shu kungacha biz bilan ishlagan <br className="hidden md:block" /> mijozlar va hamkorlar
          </h3>
          <div className="w-32 h-1.5 bg-green-500 mx-auto rounded-full shadow-[0_0_20px_#22c55e]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              style={{ animationDelay: `${index * 0.2}s` }}
              className="reveal-on-scroll group flex flex-col items-center p-10 rounded-[50px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(34,197,94,0.3)] backdrop-blur-md"
            >
              <div className="text-7xl md:text-8xl font-black text-green-400 mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 group-hover:text-white">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-green-200 uppercase tracking-[0.3em] text-center opacity-70 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
