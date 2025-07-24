"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function AOSProvider({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  // Re-initialize AOS on route change
  useEffect(() => {
    AOS.refresh(); // Recalculate positions and replay animations
  }, [pathname]);

  return <>{children}</>;
}
