// components/RouteTransition.tsx
'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RouteTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9998] flex items-center justify-center transition-opacity duration-300">
      <Image src="/logo.jpeg" alt="Loading..." width={80} height={80} className="animate-ping" />
    </div>
  );
}
