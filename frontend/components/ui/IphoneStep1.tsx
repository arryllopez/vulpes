"use client";

import Image from "next/image";
import IPhoneFrame from "./IphoneFrame";

const IPhoneStep1 = () => {
  return (
    <IPhoneFrame>
      {/* App Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center px-8 pt-4">
        <span className="text-gray-800">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-5.5 h-2.75 border border-gray-800 rounded-[3px] p-px">
            <div className="w-[80%] h-full bg-gray-800 rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Uber-style Sign Up Form */}
      <div className="absolute inset-0 flex flex-col pt-20 px-6 z-10">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-(family-name:--font-caudex)">Trivvi</h1>
          <p className="text-gray-500 text-sm mt-1">Right place. Right time</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full h-12 bg-gray-100 rounded-lg px-4 text-sm text-gray-800 placeholder-gray-400 border-0 outline-none"
              readOnly
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 bg-gray-100 rounded-lg px-4 text-sm text-gray-800 placeholder-gray-400 border-0 outline-none"
              readOnly
            />
          </div>

          {/* Continue Button */}
          <button className="w-full h-12 bg-black text-white rounded-lg font-semibold text-sm">
            Continue
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Logins */}
        <div className="space-y-3">
          <button className="w-full h-12 bg-white border border-gray-200 rounded-lg font-medium text-sm flex items-center justify-center gap-3">
            <Image
              src="/imageAssets/google-icon-logo-svgrepo-com.svg"
              alt="Google"
              width={20}
              height={20}
            />
            Continue with Google
          </button>

          <button className="w-full h-12 bg-white border border-gray-200 rounded-lg font-medium text-sm flex items-center justify-center gap-3">
            <Image
              src="/imageAssets/apple-logo-svgrepo-com.svg"
              alt="Apple"
              width={20}
              height={20}
            />
            Continue with Apple
          </button>
        </div>

        {/* Terms */}
        <p className="text-[10px] text-gray-400 text-center mt-6 leading-relaxed">
          By continuing, you agree to our <span style={{ textDecoration: 'underline' }}>Terms of Service</span> and <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>
        </p>

        {/* Sign Up Link */}
        <p className="text-sm text-center mt-4">
          <span className="text-gray-500">Don&apos;t have an account?</span>{" "}
          <span className="text-black font-semibold">Sign Up</span>
        </p>
      </div>
    </IPhoneFrame>
  );
};

export default IPhoneStep1;
