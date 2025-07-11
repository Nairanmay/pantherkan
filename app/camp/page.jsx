'use client';

import { useState,useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const campData = [
  {
    year: '2018',
    title: 'Black Pantherkan Winter Camp',
    images: [
      '/camp/winter2018/img7.JPG',
       '/camp/winter2018/img1.jpg',
      '/camp/winter2018/img2.jpg',
      '/camp/winter2018/img3.jpg',
      '/camp/winter2018/img4.jpg',
       '/camp/winter2018/img5.jpg',
        '/camp/winter2018/img6.jpg',
    ],
  },
  {
    year: '2021',
    title: 'Black Pantherkan Winter Camp ',
    images: [
        '/camp/img10.jpg',
      '/camp/img1.JPG',
      '/camp/img2.JPG',
      '/camp/img3.JPG',
      '/camp/img4.JPG',
      '/camp/img5.JPG',
      '/camp/img6.JPG',
      '/camp/img7.JPG',
      '/camp/img8.JPG',
      '/camp/img9.JPG',
      '/camp/img11.jpg',
      '/camp/img12.jpg',
      '/camp/img13.jpg',
      '/camp/img14.jpg',
      '/camp/img15.jpg',
      '/camp/img16.jpg',
      '/camp/img17.jpg',
      '/camp/img18.jpg',
      '/camp/img19.jpg',
    ],
  },
  {
    year: '2022',
    title: 'Black Pantherkan Winter Camp',
    images: [
      '/camp/winter2022/img4.jpg',
      '/camp/winter2022/img3.jpg',
      '/camp/winter2022/img2.jpg',
       '/camp/winter2022/img1.jpg',
    ],
  },
  {
    year: '2023',
    title: 'Black Pantherkan Summer Camp',
    images: [
      '/camp/summer2023/img5.jpg',
     '/camp/summer2023/img1.jpg',
     '/camp/summer2023/img2.jpg',
     '/camp/summer2023/img3.jpg',
     '/camp/summer2023/img4.jpg',
     '/camp/summer2023/img6.jpg',
     '/camp/summer2023/img7.jpg',
     '/camp/summer2023/img8.jpg',
    ],
    },
     {
    year: '2024',
    title: 'Black Pantherkan Summer Camp',
    images: [
      '/camp/summer2024/img13.JPG',
     '/camp/summer2024/img1.JPG',
      '/camp/summer2024/img2.JPG',
      '/camp/summer2024/img3.JPG',
      '/camp/summer2024/img4.JPG',
      '/camp/summer2024/img5.JPG',
      '/camp/summer2024/img6.JPG',
      '/camp/summer2024/img7.JPG',
      '/camp/summer2024/img8.JPG',
      '/camp/summer2024/img9.JPG',
      '/camp/summer2024/img10.JPG',
      '/camp/summer2024/img11.JPG',
      '/camp/summer2024/img12.JPG',
      '/camp/summer2024/img14.JPG',
      '/camp/summer2024/img15.JPG',
      '/camp/summer2024/img16.JPG', 
      '/camp/summer2024/img17.JPG',
      '/camp/summer2024/img18.JPG',
      '/camp/summer2024/img19.JPG',
    ],
     },
       {
    year: '2025',
    title: 'Black Pantherkan Summer Camp',
    images: [
      '/camp/summer2025/img1.jpg',
      '/camp/summer2025/img2.jpg',
       '/camp/summer2025/img3.jpg',
        '/camp/summer2025/img4.jpg',
         '/camp/summer2025/img5.JPG',
          '/camp/summer2025/img6.JPG',
           '/camp/summer2025/img7.JPG',
            '/camp/summer2025/img8.JPG',
             '/camp/summer2025/img9.JPG',
              '/camp/summer2025/img10.JPG',
               '/camp/summer2025/img11.JPG',
                '/camp/summer2025/img12.JPG',
                 '/camp/summer2025/img13.JPG',
                  

    ],
  },
];

export default function CampGalleryPage() {
   const pathname = usePathname();
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showAnimations, setShowAnimations] = useState(false);

   useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimations(true); // Trigger animations after slight delay
    }, 1000); // 100ms is enough for most paint/render

    return () => clearTimeout(timeout);
  }, [pathname]);
      return (
    <div className=" bg-[#F2F0EF] ">
      {!selectedCamp ? (
        <>
        <section className="w-full h-[200px] bg-[#807E7E] pt-24 pb-6 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
              Camp<span className="text-red-600"> Gallery</span>
            </h1>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-6 px-4 py-8 sm:px-6">
            {campData.map((camp, index) => (
           <div
  key={index}
  onClick={() => setSelectedCamp(camp)}
  className={`bg-[#EBEBEB] shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-105 duration-700 ease-out
    ${showAnimations ? 'fade-in' : ''}
  `}
  style={{
    transitionDelay: `${index * 100}ms`, // 100ms stagger
  }}
>
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={camp.images[0]}
                    alt={camp.title}
                    fill
                    className="object-cover rounded-t-xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index < 2}
                  />
                </div>
               <div className="p-4">
                  <h3
                    className={`text-base sm:text-lg font-semibold text-gray-800 ${
                      showAnimations ? 'slide-in-text slide-in-delay-1' : ''
                    }`}
                  >
                    {camp.title}
                  </h3>
                  <p
                    className={`text-sm text-gray-600 mt-1 ${
                      showAnimations ? 'slide-in-text slide-in-delay-2' : ''
                    }`}
                  >
                    {camp.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          {/* Back Button */}
         <div className="fixed top-24 left-4 z-50">
  <button
    onClick={() =>setSelectedCamp(null)}
    className="relative group overflow-hidden px-5 py-2 rounded shadow-lg bg-black text-white text-sm sm:text-base"
  >
    <span className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out z-0" />
    <span className="relative z-10">← Back</span>
  </button>
</div>

           <section className="w-full h-[200px] bg-[#807E7E] pt-24 pb-2 rounded-xl" >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
            {selectedCamp.title} ({selectedCamp.year})
          </h2>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-4 px-4 py-8 sm:px-6">
            {selectedCamp.images.map((src, index) => (
              <div
                key={index}
                onClick={() => setModalImage(src)}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow cursor-pointer transition hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Camp ${selectedCamp.year} - ${index + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Zoomed Image"
              width={1200}
              height={800}
              className="rounded-xl w-full h-auto object-contain"
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-3 right-3 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
