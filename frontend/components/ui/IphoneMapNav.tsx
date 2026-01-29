"use client";

import IPhoneFrame from "./IphoneFrame";

const IPhoneMapNav = () => {
  return (
    <IPhoneFrame>
      {/* Full screen map navigation image */}
      <img
        src="/imageAssets/InAppNavigationMockup.png"
        alt="In-App Navigation"
        className="absolute inset-0 w-full h-full object-cover object-[100%_center] rounded-[42px] blur-[2px]"
      />
      {/* Directions Overlay  */}
      <div> 
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-xl shadow-lg p-4 w-11/12 max-w-md">
            <h2 className="text-lg font-bold text-gray-900 mb-2 font-(family-name:--font-caudex)">Directions to Bullseye</h2>
            <p className="text-sm text-gray-600 mb-4 font-(family-name:--font-caudex)">Head north on Main St toward 2nd Ave</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-800 font-(family-name:--font-caudex)">0.3 miles • 5 mins</span>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    Start
                </button>
            </div>
        </div>
      </div>
    </IPhoneFrame>
    
  );
};

export default IPhoneMapNav;
