"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Checkbox } from "@/components/ui/checkbox";
import { NeighbourhoodDropdown } from "@/components/ui/neighbourhood-dropdown";
import { NEIGHBOURHOODS, Neighbourhood } from "@/lib/neighbourhoods";

// Dynamically import IsochroneMap to avoid SSR issues with Leaflet
const IsochroneMap = dynamic(() => import("./IsochroneMap"), {
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
    primaryNeighbourhood: Neighbourhood | null;
    secondaryNeighbourhood: Neighbourhood | null;
    optInUpdates: boolean;
  }) => void;
}

// Combine all neighbourhoods into a single list
const allNeighbourhoods = [...NEIGHBOURHOODS.primary, ...NEIGHBOURHOODS.secondary];

export function WaitlistCard({ onSubmit }: WaitlistCardProps) {
  const [email, setEmail] = useState("");
  const [primaryNeighbourhood, setPrimaryNeighbourhood] = useState<Neighbourhood | null>(null);
  const [secondaryNeighbourhood, setSecondaryNeighbourhood] = useState<Neighbourhood | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [optInUpdates, setOptInUpdates] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSelectionWarning, setShowSelectionWarning] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handlePrimaryChange = (selected: Neighbourhood | null) => {
    setPrimaryNeighbourhood(selected);
    setShowSelectionWarning(false);
  };

  const handleSecondaryChange = (selected: Neighbourhood | null) => {
    setSecondaryNeighbourhood(selected);
    setShowSelectionWarning(false);
  };

  // Memoize selected neighbourhoods to prevent map re-renders on typing
  const selectedNeighbourhoods = useMemo(() =>
    [primaryNeighbourhood, secondaryNeighbourhood].filter(
      (n): n is Neighbourhood => n !== null
    ),
    [primaryNeighbourhood, secondaryNeighbourhood]
  );
  const hasNeighbourhoods = selectedNeighbourhoods.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!primaryNeighbourhood || !secondaryNeighbourhood) {
      setShowSelectionWarning(true);
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
          primaryNeighbourhood: primaryNeighbourhood.name,
          secondaryNeighbourhood: secondaryNeighbourhood.name,
          primary_lat: primaryNeighbourhood.lat,
          primary_lng: primaryNeighbourhood.lng,
          secondary_lat: secondaryNeighbourhood.lat,
          secondary_lng: secondaryNeighbourhood.lng,
          optInUpdates,
          website: honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setIsSubmitted(true);
      onSubmit?.({
        email,
        primaryNeighbourhood,
        secondaryNeighbourhood,
        optInUpdates,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative px-4 md:px-0">
      <div className="relative backdrop-blur-xl bg-[#ccdbfd]/20 border border-[#ccdbfd]/40 rounded-2xl p-5 md:p-12 w-full max-w-6xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ccdbfd]/10 to-transparent pointer-events-none" />

        <div className="relative z-10">
          {!isSubmitted ? (
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left side - Form */}
              <div className="md:w-[340px] shrink-0">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3 font-(family-name:--font-caudex)">
                    Be first in line
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Join the waitlist and help us decide where to launch first!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
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

                  {/* Neighbourhood Selection */}
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700 font-medium">
                      Which Toronto neighbourhoods would you use Trivvi in?
                    </p>

                    {/* Primary Neighbourhood */}
                    <NeighbourhoodDropdown
                      label="Primary neighbourhood"
                      placeholder="Select a neighbourhood"
                      options={allNeighbourhoods}
                      value={primaryNeighbourhood}
                      onChange={handlePrimaryChange}
                    />

                    {/* Secondary Neighbourhood */}
                    <NeighbourhoodDropdown
                      label="Secondary neighbourhood"
                      placeholder="Select a neighbourhood"
                      options={allNeighbourhoods}
                      value={secondaryNeighbourhood}
                      onChange={handleSecondaryChange}
                    />
                  </div>

                  {/* Opt-in checkbox */}
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

                  {/* Selection warning */}
                  {showSelectionWarning && (
                    <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      Please select both a primary and secondary neighbourhood to help us understand where to launch first!
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

              {/* Right side - Isochrone Map */}
              <div className="flex-1 min-w-0 md:min-w-[700px] min-h-[350px] md:min-h-[520px]">
                {hasNeighbourhoods ? (
                  <div className="h-full">
                    <p className="text-sm text-gray-600 mb-2 font-medium">
                      Walking radius from selected neighbourhoods
                    </p>
                    <div className="h-[300px] md:h-[500px] rounded-xl overflow-hidden border border-[#ccdbfd]/30">
                      <IsochroneMap
                        key={selectedNeighbourhoods.map(n => n.name).join("-")}
                        neighbourhoods={selectedNeighbourhoods}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-full min-h-[300px] md:min-h-[520px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-[#ccdbfd]/30">
                    <div className="text-center px-6">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">
                        Select a neighbourhood to preview it on the map
                      </p>
                    </div>
                  </div>
                )}
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
                {primaryNeighbourhood && ` in ${primaryNeighbourhood.name}`}. Thanks for joining!
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
