"use client";

import IPhoneFrame from "./IphoneFrame";

const IPhoneDealRedeem = () => {
  return (
    <IPhoneFrame>
      {/* App Background */}
      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* Status Bar */}
      {/* <div className="relative z-10 flex justify-between items-center px-8 pt-4">
        <span className="text-gray-800">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-[22px] h-[11px] border border-gray-800 rounded-[3px] p-px">
            <div className="w-[80%] h-full bg-gray-800 rounded-[1px]" />
          </div>
        </div>
      </div> */}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col pt-16 px-5 z-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 font-(family-name:--font-caudex)">Bullseye</h2>
            <p className="text-xs text-gray-500">200m away • Fast Food</p>
          </div>
        </div>

        {/* Deal Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
          {/* Food Image */}
          <div className="h-32 relative overflow-hidden">
            <img
              src="/imageAssets/burgerDeal.jpg"
              alt="Angus Steak Burger Combo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Discount Badge */}
            <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-(family-name:--font-caudex)">
              15% OFF
            </div>
          </div>

          {/* Deal Details */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1 font-(family-name:--font-caudex)">
              Angus Steak Burger Combo
            </h3>
            <p className="text-gray-500 text-sm mb-3 font-(family-name:--font-caudex)">
              Premium angus patty, cheese, fries & drink
            </p>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 line-through text-sm font-(family-name:--font-caudex)">$18.99</span>
              <span className="text-2xl font-bold text-[#abc4ff] font-(family-name:--font-caudex)">$16.14</span>
              <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full font-(family-name:--font-caudex)">
                Save $2.85
              </span>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-2 mb-4 bg-orange-50 rounded-lg px-3 py-2">
              <span className="text-sm text-orange-700 font-medium font-(family-name:--font-caudex)">
                Expires in 23:45
              </span>
            </div>

            {/* Take Me There Button */}
            <button className="w-full h-12 bg-gradient-to-r from-[#b6ccfe] to-[#c1d3fe] text-gray-800 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-100 active:scale-95 transition-transform font-(family-name:--font-caudex)">
              Take me there
            </button>
            <button className="w-full h-12 mt-3 bg-gradient-to-r from-[#b6ccfe] to-[#c1d3fe] text-gray-800 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-100 active:scale-95 transition-transform font-(family-name:--font-caudex)">
                Redeem Deal
            </button>
          </div>
        </div>

        {/* Bottom hint
        <p className="text-center text-xs text-gray-400 mt-4 font-(family-name:--font-caudex)">
          Show this screen at checkout to redeem
        </p> */}
      </div>
    </IPhoneFrame>
  );
};

export default IPhoneDealRedeem;
