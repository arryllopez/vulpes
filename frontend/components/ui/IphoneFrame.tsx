import { useState, useEffect } from "react";
import Image from "next/image";
import Notification from "./Notification";

const IPhoneFrame = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Phone Shadow */}
      <div className="absolute inset-0 rounded-[55px] bg-black/20 blur-2xl translate-y-4 scale-95" />

      {/* Phone Frame*/}
      <div className="relative w-[320px] h-[660px] bg-gradient-to-b from-[#8a8a8f] via-[#a5a5aa] to-[#7a7a7f] rounded-[55px] p-[3px] shadow-xl">
        
        {/* Inner Frame */}
        <div className="relative w-full h-full bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] rounded-[52px] p-[10px]">
          
          {/* Screen */}
          <div className="relative w-full h-full rounded-[42px] overflow-hidden">
            
            <div className = "absolute-inset"> 
                {/* iOS Wallpaper */}
            <Image
              src="/background/phonewallpaper.jpg"
              alt="Phone wallpaper"
              fill
              className="object-cover"
            />
            </div>

            {/* Status Bar */}
            <div className="relative z-10 flex justify-between items-center px-8 pt-4">
              <span className="text-white ">9:41</span>
              <div className="flex items-center gap-1.5">
               
                {/* Battery */}
                <div className="flex items-center gap-1">
                  <div className="w-[22px] h-[11px] border border-white rounded-[3px] p-[1px]">
                    <div className="w-[80%] h-full bg-white rounded-[1px]" />
                  </div>
                  <div className="w-[1px] h-[4px] bg-white rounded-r-sm" />
                </div>
              </div>
            </div>

           
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-20" />

             {/* Time Display */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10">
              <div className="text-white/70 text-lg mb-1 whitespace-nowrap">
                Saturday, January 25
              </div>
              <div className="text-white/90 text-[72px] font-light leading-none tracking-tight">
                9:41
              </div>
            </div>

            {/* Bottom Indicator Line */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/80 rounded-full z-10" />

            {/* Notification */}
            <Notification isVisible={showNotification} onDismiss={() => setShowNotification(false)} />
          </div>
        </div>
      </div>

      {/* Side Buttons */}
      {/* Volume Up */}
      <div className="absolute left-[-3px] top-[140px] w-[3px] h-[35px] bg-gradient-to-r from-[#6a6a6f] to-[#8a8a8f] rounded-l-sm" />
      {/* Volume Down */}
      <div className="absolute left-[-3px] top-[185px] w-[3px] h-[35px] bg-gradient-to-r from-[#6a6a6f] to-[#8a8a8f] rounded-l-sm" />
      {/* Silent Switch */}
      <div className="absolute left-[-3px] top-[100px] w-[3px] h-[22px] bg-gradient-to-r from-[#6a6a6f] to-[#8a8a8f] rounded-l-sm" />
      {/* Power Button */}
      <div className="absolute right-[-3px] top-[160px] w-[3px] h-[65px] bg-gradient-to-l from-[#6a6a6f] to-[#8a8a8f] rounded-r-sm" />
    </div>
  );
};

export default IPhoneFrame;
