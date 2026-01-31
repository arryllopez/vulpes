"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Checkbox } from "@/components/ui/checkbox";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPinWarning, setShowPinWarning] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleLocationSelect = (lat: number, lng: number) => {
    setLocation({ lat, lng });
    setShowPinWarning(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!location.lat || !location.lng) {
      setShowPinWarning(true);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          lat: location.lat,
          lng: location.lng,
          optInUpdates,
          website: honeypot,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setIsSubmitted(true);
      onSubmit?.({
        email,
        lat: location.lat,
        lng: location.lng,
        optInUpdates,
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Waitlist signup error:', err);
    } finally {
      setIsLoading(false);
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

                  {/* Honeypot field - hidden from humans, bots will fill it */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute -left-[9999px] opacity-0 h-0 w-0 pointer-events-none"
                  />

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="opt-in"
                      checked={optInUpdates}
                      onCheckedChange={(checked) => setOptInUpdates(checked === true)}
                      className="mt-0.5"
                    />
                    <label
                      htmlFor="opt-in"
                      className="text-sm text-gray-600 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Opt in to receive updates about Trivvi&apos;s development
                    </label>
                  </div>

                  {/* Pin disclaimer */}
                  {showPinWarning && (
                    <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      Please drop a pin on the map to help us understand where to launch first!
                    </p>
                  )}

                  {/* Error message */}
                  {error && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 px-6 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 font-(family-name:--font-caudex) cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Joining...' : 'Join waitlist'}
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
                  Where would Trivvi be most useful for you?
                </p>
                <p className = "text-sm text-gray-600 mb-4 font-medium font-(family-name:--font-caudex)">
                  Think busy streets, packed food spots, late nights, and spontaneous plans.
                </p>
                <p className = "text-sm text-gray-600 mb-4 font-medium font-(family-name:--font-caudex)">
                  Drop a pin where you&apos;d actually use Trivvi.
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
              <p className="text-gray-600 text-sm mb-2">
                We&apos;ve sent a confirmation email to your inbox.
              </p>
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
