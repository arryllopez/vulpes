"use client";

import Image from "next/image";
import IPhoneFrame from "./IphoneFrame";

const IPhoneRecentChirps = () => {
  return (
    <div className="scale-110 origin-center">
      <IPhoneFrame>
        <Image
          src="/imageAssets/uiApp.png"
          alt="iPhone Recent Chirps UI"
          fill
          sizes="320px"
          quality={100}
          unoptimized
          className="object-cover"
          loading="lazy"
        />
      </IPhoneFrame>
    </div>
  );
};

export default IPhoneRecentChirps;
