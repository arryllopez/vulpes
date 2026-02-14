"use client";

import { Star } from "lucide-react";

const bullseyeTestimonial = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 max-w-md h-fit">
      {/* Restaurant Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-[#c1d3fe] rounded-2xl flex items-center justify-center">
          <span className="text-white font-bold text-xl font-(family-name:--font-caudex)">B</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-(family-name:--font-caudex)">Bullseye</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-500 font-(family-name:--font-caudex)">4.8 (234 reviews)</span>
          </div>
          <p className="text-xs text-gray-400 font-(family-name:--font-caudex)">Fast Food • Burgers • $</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 text-center">
        <p className="text-2xl font-bold text-gray-900 font-(family-name:--font-caudex)">1.2K</p>
        <p className="text-xs text-gray-500 font-(family-name:--font-caudex)">Total Trivvi Visits</p>
      </div>

      {/* See Reviews Button */}
      <button className="w-full py-3 bg-gradient-to-r from-[#b6ccfe] to-[#c1d3fe] text-gray-800 rounded-xl font-semibold text-sm shadow-lg shadow-blue-100 active:scale-95 transition-transform font-(family-name:--font-caudex)">
        See Reviews
      </button>
    </div>
  );
};

export default bullseyeTestimonial;
