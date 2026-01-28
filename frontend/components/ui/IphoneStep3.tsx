"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import IPhoneFrame from "./IphoneFrame";
import Notification from "./Notification";

const IPhoneStep3 = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <IPhoneFrame>
      {/* Wallpaper */}
      <Image
        src="/phoneMockup/phonewallpaper.jpg"
        alt="Phone wallpaper"
        fill
        className="object-cover"
      />

      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center px-8 pt-4">
        <span className="text-white">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-5.5 h-2.75 border border-white rounded-[3px] p-px">
            <div className="w-[80%] h-full bg-white rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Time Display */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10">
        <div className="text-white/70 text-lg mb-1 whitespace-nowrap">
          Saturday, January 25
        </div>
        <div className="text-white/90 text-[72px] font-light leading-none tracking-tight">
          9:41
        </div>
      </div>

      {/* Notification */}
      <Notification
        isVisible={showNotification}
      />
    </IPhoneFrame>
  );
};

export default IPhoneStep3;
