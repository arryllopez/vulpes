import Image from "next/image";

interface NotificationProps {
  isVisible: boolean;
}

const Notification = ({ isVisible }: NotificationProps) => {
  return (
    <div
      className={`absolute bottom-16 left-3 right-3 z-30 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <div
        className="backdrop-blur-xl bg-white/20 rounded-2xl py-2 px-3 shadow-lg border border-white/10 cursor-pointer hover:bg-white/25 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          {/* App Icon */}
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
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
              <span className="text-white/90 text-sm font-semibold">Trivvi</span>
              <span className="text-white/50 text-xs">now</span>
            </div>
            <p className="text-white font-medium text-sm">Chirp just found a new deal!</p>
            <p className="text-white/70 text-sm truncate">
              10% off poutine @ Poots (100m away)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
