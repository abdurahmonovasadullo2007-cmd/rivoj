
import React from 'react';

const servicesData = [
  {
    icon: "fa-bullseye",
    title: "Yuqori Aniqlik",
    desc: "Lazer uskunalarimiz millimetrning o'ndan bir qismigacha aniqlikda kesish imkonini beradi."
  },
  {
    icon: "fa-bolt",
    title: "Tezkor Ishlab Chiqarish",
    desc: "Buyurtmalar o'z vaqtida va sifatli bajariladi. Biz sizning vaqtingizni qadrlaymiz."
  },
  {
    icon: "fa-layer-group",
    title: "Ko'p Qirrali",
    desc: "Charm, teri, mato, yog'och va plastik kabi har xil turdagi materiallarni kesish imkoniyati."
  },
  {
    icon: "fa-gem",
    title: "Eksklyuziv Dizayn",
    desc: "Har qanday murakkablikdagi naqshlar va dizaynlarni poyabzal detallariga tushiramiz."
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-2">MUKAMMALIKKA INTILISH</h2>
          <div className="relative inline-block">
            <h3 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-6">Bizning Xizmatlar</h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1.5 w-24 bg-green-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              style={{ animationDelay: `${index * 0.15}s` }}
              className="reveal-on-scroll p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-white transition-all duration-500 group hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-green-100/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:rotate-[360deg] transition-all duration-700">
                <i className={`fas ${service.icon} text-2xl text-green-700 group-hover:text-white transition-colors`}></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">{service.title}</h4>
              <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
