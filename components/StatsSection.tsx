'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, Users, Home, Trophy } from 'lucide-react';

const stats = [
  { icon: <CalendarDays size={32} />, label: 'Years of Experience', value: 25 },
  { icon: <Users size={32} />, label: 'Number of Students', value: 460 },
  { icon: <Home size={32} />, label: 'Training Centers', value: 20 },
  { icon: <Trophy size={32} />, label: 'Awards Won', value: 107 },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setAnimatedValues((prev) =>
          prev.map((val, i) =>
            val < stats[i].value ? val + Math.ceil(stats[i].value / 30) : stats[i].value
          )
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
   <section
  ref={ref}
  className="relative w-full min-h-[500px] flex items-center justify-center text-white overflow-hidden bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: "url('/competition/2024/img8.jpeg')",
  }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  {/* Stats content */}
{/* Stats content */}
<div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center px-6 py-20">
  {stats.map((stat, i) => (
    <div key={i} className="flex flex-col items-center space-y-4">
      {/* Icon with spinning ring */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-t-red-500 border-b-transparent animate-spin-slow" />

        {/* Icon itself */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full text-white z-10">
          {stat.icon}
        </div>
      </div>

      <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-300">Over</p>
      <p className="text-3xl sm:text-4xl font-extrabold text-white">{animatedValues[i]}</p>
      <p className="text-sm sm:text-base font-medium tracking-wide text-white">{stat.label}</p>
    </div>
  ))}
</div>

</section>

  );
}
