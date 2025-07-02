// components/SplashScreen.tsx
'use client';

import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999] transition-opacity duration-500 ease-in-out">
      <Image src="/logo.jpeg" alt="Logo" width={120} height={120} className="animate-spin mb-4" />
      <h1 className="text-xl font-semibold text-gray-800 tracking-wide">Blackpantherkan</h1>
    </div>
  );
}
