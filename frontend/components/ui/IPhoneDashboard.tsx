"use client";

import IPhoneFrame from "./IphoneFrame";

const IPhoneDashboard = () => {
  return (
    <IPhoneFrame>
      {/* App Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center px-8 pt-4">
        <span className="text-gray-800 text-xs">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-[22px] h-[11px] border border-gray-800 rounded-[3px] p-px">
            <div className="w-[80%] h-full bg-gray-800 rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="absolute inset-0 flex flex-col pt-16 px-4 z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#abc4ff] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-base font-(family-name:--font-caudex)">L</span>
            </div>
            <div>
              <span className="text-base font-bold text-gray-900 font-(family-name:--font-caudex)">
                Lawrence&apos;s
              </span>
              <p className="text-[10px] text-gray-500 font-(family-name:--font-caudex)">Dashboard</p>
            </div>
          </div>
          <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-full font-(family-name:--font-caudex)">
            This Week
          </span>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-green-50 rounded-xl p-3 text-center w-">
            <div className="text-lg font-bold text-green-600 font-(family-name:--font-caudex)">2</div>
            <div className="text-[9px] text-gray-600 font-(family-name:--font-caudex)">Chirps Sent</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-blue-600 font-(family-name:--font-caudex)">2,139</div>
            <div className="text-[9px] text-gray-600 font-(family-name:--font-caudex)">Total Views</div>
          </div>
          
        </div>

        {/* Active Alerts */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-800 mb-3 font-(family-name:--font-caudex)">
            All Alerts
          </h3>

          {/* Alert 1 — Deal */}
          <div className="bg-gray-50 rounded-xl p-4 mb-3">
            <div className="flex items-start justify-between mb-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="bg-[#abc4ff]/20 text-black text-[10px] font-semibold px-2 py-1 rounded w-fit font-(family-name:--font-caudex)">
                    Trivvi Exclusive
                  </span>
                  <span className="text-green-600 text-[10px] font-semibold font-(family-name:--font-caudex)">
                    89 redeemed
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-800 font-(family-name:--font-caudex)">
                  20% Off
                  <br/>
                  Any large handcrafted pizza
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex flex-col">
                <span className="text-gray-500 font-(family-name:--font-caudex)">Views</span>
                <span className="font-semibold text-gray-800 font-(family-name:--font-caudex)">1,247</span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 font-(family-name:--font-caudex)">Visit Rate</span>
                <span className="font-semibold text-[#abc4ff] font-(family-name:--font-caudex)">7.1%</span>
              </div>
            </div>

          
          </div>
          

          {/* Alert 2 — Non-deal / Signal */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="bg-green-100 text-black text-[10px] font-semibold px-2 py-1 rounded w-fit font-(family-name:--font-caudex)">
                    House Special
                  </span>
                  <span className="text-green-600 text-[10px] font-semibold font-(family-name:--font-caudex)">
                    64 visits confirmed
                  </span>
                </div>
                <span className="text-sm font-semibold text-black font-(family-name:--font-caudex)">
                  Friday Lunch Special
                  <br/>
                  $15.99 Chicken Alfredo Meal
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex flex-col">
                <span className="text-gray-500 font-(family-name:--font-caudex)">Views</span>
                <span className="font-semibold text-gray-800 font-(family-name:--font-caudex)">892</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 font-(family-name:--font-caudex)">Visit Rate</span>
                <span className="font-semibold text-[#abc4ff] font-(family-name:--font-caudex)">7.2%</span>
              </div>
            </div>

         
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 text-sm">↑</span>
            </div>
            <div>
              <p className="text-[10px] text-gray-600 font-(family-name:--font-caudex)">
                Weekly Performance
              </p>
              <p className="text-xs font-bold text-green-600 font-(family-name:--font-caudex)">
                +23% vs last week
              </p>
            </div>
          </div>
        </div>
      </div>
    </IPhoneFrame>
  );
};

export default IPhoneDashboard;
