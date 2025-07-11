// components/ClientLayout.tsx
'use client';

import { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import Navbar from './Navbar';
import RouteTransition from './RouteTransition';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('seenSplash');
    if (!hasSeenSplash) {
      const timeout = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('seenSplash', 'true');
      }, 2500); // show splash for 2.5s
      return () => clearTimeout(timeout);
    } else {
      setShowSplash(false);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <>
      <Navbar />
      <RouteTransition />
      {children}
    </>
  );
}
