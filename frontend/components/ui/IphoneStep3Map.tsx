"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import IPhoneFrame from "./IphoneFrame";

const NotificationMap = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`absolute bottom-16 left-3 right-3 z-30 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <div
        className="backdrop-blur-xl rounded-2xl py-2 px-3 shadow-lg border border-black/10 cursor-pointer hover:opacity-90 transition-colors"
        style={{ backgroundColor: "#d7e3fc" }}
      >
        <div className="flex items-center gap-2.5">
          {/* App Icon */}
          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-md overflow-hidden bg-white">
            <Image
              src="/phoneMockup/chirp-removebg-preview.png"
              alt="Chirp"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-black/90 text-sm font-semibold">Chirp</span>
              <span className="text-black/50 text-xs">now</span>
            </div>
            <p className="text-black font-medium text-sm text-left">Chirp just found a new deal!</p>
            <p className="text-black/70 text-sm truncate">
              10% off poutine @ Poots (100m away)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IPhoneStep3Map = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <IPhoneFrame>
      {/* Content wrapper with clip-path to properly clip blur effects */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[42px]"
        style={{
          clipPath: "inset(0 round 42px)",
          transform: "translateZ(0)"
        }}
      >
        {/* Blurred Map Background */}
        <Image
          src="/imageAssets/mapMockupEmpty.png"
          alt="Map background"
          fill
          className="object-cover blur-sm"
          style={{ transform: "scale(1.05)" }}
        />
      </div>

      {/* Notification */}
      <NotificationMap isVisible={showNotification} />
    </IPhoneFrame>
  );
};

export default IPhoneStep3Map;
