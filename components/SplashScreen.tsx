'use client';

import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out px-4">
      <div className="animate-spin-slow rounded-full p-4 bg-white shadow-md">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
          style={{ animation: 'spin 3s linear infinite' }}
        />
      </div>
      <h1 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide text-center">
         BLACK PANTHERKAN
      </h1>
    </div>
  );
}
