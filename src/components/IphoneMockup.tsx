import React from 'react';

export function IphoneMockup({ src, alt, className = "", children }: { src?: string, alt?: string, className?: string, children?: React.ReactNode }) {
  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] shadow-2xl shrink-0 ${className}`}>
      {/* Dynamic Island / Notch */}
      <div className="w-[120px] h-[35px] bg-black absolute top-2 rounded-full left-1/2 -translate-x-1/2 z-20 flex justify-center items-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full absolute right-4"></div>
      </div>
      
      {/* Buttons */}
      <div className="h-[32px] w-[3px] bg-gray-900 absolute -left-[17px] top-[100px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[150px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[210px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-900 absolute -right-[17px] top-[160px] rounded-r-lg"></div>
      
      {/* Screen */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
        {src ? (
          <img src={src} className="w-full h-full object-cover" alt={alt || "Screen"} referrerPolicy="no-referrer" />
        ) : children}
      </div>
    </div>
  );
}
