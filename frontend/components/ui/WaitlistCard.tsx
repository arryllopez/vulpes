"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import LocationPicker to avoid SSR issues with Leaflet
const LocationPicker = dynamic(() => import("./LocationPicker"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] bg-gray-100 rounded-xl flex items-center justify-center">
      <span className="text-gray-400">Loading map...</span>
    </div>
  ),
});

interface WaitlistCardProps {
  onSubmit?: (data: {
    email: string;
    lat: number | null;
    lng: number | null;
    optInUpdates: boolean;
  }) => void;
}

export function WaitlistCard({ onSubmit }: WaitlistCardProps) {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [optInUpdates, setOptInUpdates] = useState(false);

  const handleLocationSelect = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      onSubmit?.({
        email,
        lat: location.lat,
        lng: location.lng,
        optInUpdates,
      });
      console.log("Waitlist signup:", {
        email,
        lat: location.lat,
        lng: location.lng,
        optInUpdates,
      });
    }
  };

  return (
    <div className="relative">
      <div className="relative backdrop-blur-xl bg-[#ccdbfd]/20 border border-[#ccdbfd]/40 rounded-2xl p-12 w-full max-w-7xl shadow-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ccdbfd]/10 to-transparent pointer-events-none" />

        <div className="relative z-10">
          {!isSubmitted ? (
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left side - Form */}
              <div className="md:w-[320px] shrink-0">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3 font-(family-name:--font-caudex)">
                    Be first in line
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Join the waitlist and help us decide where to launch first!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/80 border border-[#ccdbfd]/50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 h-12 px-4 rounded-xl backdrop-blur-sm focus:outline-none focus:ring-2"
                  />

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={optInUpdates}
                      onChange={(e) => setOptInUpdates(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                    />
                    <span className="text-sm text-gray-600">
                      Opt in to receive updates about Trivvi&apos;s development
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full h-12 px-6 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 font-(family-name:--font-caudex)"
                  >
                    Join waitlist
                  </button>
                </form>

                <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                      K
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                      S
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                      A
                    </div>
                  </div>
                  <span className="text-gray-600 text-sm">
                    Join others on the waitlist
                  </span>
                </div>
              </div>

              {/* Right side - Map */}
              <div className="flex-1">
                <p className="text-sm text-black-600 mb-2 font-bold font-(family-name:--font-caudex)">
                  Bring Trivvi to your city!
                </p>
                <p className = "text-sm text-gray-600 mb-4 font-medium font-(family-name:--font-caudex)">
                  Tap the map to help Trivvi launch where demand is strongest
                </p>
                <LocationPicker onLocationSelect={handleLocationSelect} />
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400/30 to-emerald-500/30 flex items-center justify-center border border-green-400/40">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-gray-600 text-sm">
                We&apos;ll notify you when we launch
                {location.lat && " in your area"}. Thanks for joining!
              </p>
            </div>
          )}
        </div>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ccdbfd]/20 to-[#abc4ff]/20 blur-xl scale-110 -z-10" />
    </div>
  );
}

export default WaitlistCard;
