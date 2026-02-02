import { ReactNode } from "react";

interface IPhoneFrameProps {
  children?: ReactNode;
}

const IPhoneFrame = ({ children }: IPhoneFrameProps) => {
  return (
    <div className="relative">
      {/* Phone Shadow */}
      <div className="absolute inset-0 rounded-[55px] bg-black/20 blur-2xl translate-y-4 scale-95" />

      {/* Phone Frame */}
      <div className="relative w-[336px] h-[693px] bg-gradient-to-b from-[#8a8a8f] via-[#a5a5aa] to-[#7a7a7f] rounded-[55px] p-[3px] shadow-xl">
        {/* Inner Frame */}
        <div className="relative w-full h-full bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] rounded-[52px] p-[10px]">
          {/* Screen */}
          <div className="relative w-full h-full rounded-[42px] overflow-hidden isolate">

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-20" />

            {/* Bottom Indicator Line */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/80 rounded-full z-10" />

            {/* Screen Content - customizable */}
            {children}
          </div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="absolute left-[-3px] top-[140px] w-[3px] h-[35px] bg-gradient-to-r from-[#6a6a6f] to-[#8a8a8f] rounded-l-sm" />
      <div className="absolute left-[-3px] top-[185px] w-[3px] h-[35px] bg-gradient-to-r from-[#6a6a6f] to-[#8a8a8f] rounded-l-sm" />
      <div className="absolute left-[-3px] top-[100px] w-[3px] h-[22px] bg-gradient-to-r from-[#6a6a6f] to-[#8a8a8f] rounded-l-sm" />
      <div className="absolute right-[-3px] top-[160px] w-[3px] h-[65px] bg-gradient-to-l from-[#6a6a6f] to-[#8a8a8f] rounded-r-sm" />
    </div>
  );
};

export default IPhoneFrame;
