'use client';

import { useState,useEffect} from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const compData = [
  {
    year: '2016',
    title: 'self defence seminar - Rangaon',
    images: [
       '/self_defence/2016/img4.JPG',
     '/self_defence/2016/img1.JPG',
        '/self_defence/2016/img2.JPG',
        '/self_defence/2016/img3.JPG',
        '/self_defence/2016/img9.jpg',
        '/self_defence/2016/img10.jpg', 
        '/self_defence/2016/img11.jpg',
    
    ],
  },
    {
    year: '2016',
    title: 'self defence seminar - Andheri',
    images: [
       '/self_defence/2016/img5.jpg',
     '/self_defence/2016/img6.JPG',
        '/self_defence/2016/img7.JPG',
        '/self_defence/2016/img8.JPG',
    
    ],
  },
  {
    year: '2017',
    title: 'self defence seminar - Kaman',
    images: [
     '/self_defence/2017/img1.jpg',
        '/self_defence/2017/img2.jpg',
        '/self_defence/2017/img3.jpg',
        '/self_defence/2017/img4.jpg',
        '/self_defence/2017/img5.jpg',
    ],
  },
  {
    year: '2019',
    title: 'self defence seminar - Naigoan(E)',
    images: [
      '/self_defence/2019/img2.jpg',
        '/self_defence/2019/img1.jpg',
        '/self_defence/2019/img3.jpg',
        '/self_defence/2019/img4.jpg',
        '/self_defence/2019/img5.jpg',
        '/self_defence/2019/img6.jpg',
    ],
  },
  {
    year: '2019',
    title: 'self defence seminar - Don Bosco School',
    images: [
      '/self_defence/2019.1/img1.JPG',
        '/self_defence/2019.1/img2.JPG',
        '/self_defence/2019.1/img3.JPG',
        '/self_defence/2019.1/img4.JPG',
        '/self_defence/2019.1/img5.JPG',
        '/self_defence/2019.1/img6.JPG',
        '/self_defence/2019.1/img7.JPG',
        '/self_defence/2019.1/img8.JPG',
        '/self_defence/2019.1/img9.JPG',
        '/self_defence/2019.1/img10.JPG',
        '/self_defence/2019.1/img11.JPG',

    ],
    },
    {
    year: '2019',
    title: 'self defence seminar - vasai',
    images: [
      '/self_defence/2019.2/img1.jpg',
       '/self_defence/2019.2/img2.jpg',
        '/self_defence/2019.2/img3.jpg',
        '/self_defence/2019.2/img4.jpg',
        '/self_defence/2019.2/img5.jpg',
        '/self_defence/2019.2/img6.jpg',
        '/self_defence/2019.2/img7.jpg',
        '/self_defence/2019.2/img8.jpg',
    ],
    },
     {
    year: '2019',
    title: 'self defence seminar - St. Annes School, Vasai',
    images: [
      '/self_defence/2019.3/img2.jpg',
       '/self_defence/2019.2/img1.jpg',
        '/self_defence/2019.2/img3.jpg',
        '/self_defence/2019.2/img4.jpg',
        '/self_defence/2019.2/img5.jpg',
        '/self_defence/2019.2/img6.jpg',
        '/self_defence/2019.2/img7.jpg',
    ],
    },
    {
    year: '2019',
    title: 'self defence seminar - vasai',
    images: [
      '/self_defence/2019.2/img1.jpg',
       '/self_defence/2019.2/img2.jpg',
        '/self_defence/2019.2/img3.jpg',
        '/self_defence/2019.2/img4.jpg',
        '/self_defence/2019.2/img5.jpg',
        '/self_defence/2019.2/img6.jpg',
        '/self_defence/2019.2/img7.jpg',
        '/self_defence/2019.2/img8.jpg',
          '/self_defence/2019.2/img9.jpg',
    ],
    },
    {
    year: '2019',
    title: 'self defence seminar - Womens day',
    images: [
      '/self_defence/2019.4/img1.jpg',
       '/self_defence/2019.4/img2.jpg',
        '/self_defence/2019.4/img3.jpg',
        '/self_defence/2019.4/img4.jpg',
        '/self_defence/2019.4/img5.jpg',
        '/self_defence/2019.4/img6.jpg',
        '/self_defence/2019.4/img7.jpg',
        '/self_defence/2019.4/img8.jpg',
    ],
    },
     {
    year: '2019',
    title: 'self defence seminar - Rishi Valmiki School, Naigoan',
    images: [
      '/self_defence/2019.5/img1.jpg',
      '/self_defence/2019.5/img2.jpg',
      '/self_defence/2019.5/img3.jpg',
        '/self_defence/2019.5/img4.jpg',
        '/self_defence/2019.5/img5.jpg',
    ],
    },
     {
    year: '2020',
    title: 'self defence seminar - Black Pantherkan x Amchi Vasai',
    images: [
      '/self_defence/2020/img1.jpg',
     '/self_defence/2020/img2.jpg',
        '/self_defence/2020/img3.jpg',
        '/self_defence/2020/img4.jpg',
    ],
    },
       {
    year: '2023',
    title: 'self defence seminar - Vartak College',
    images: [
      '/self_defence/2023/img1.jpg',
      '/self_defence/2023/img2.jpg',
      '/self_defence/2023/img3.jpg',
      '/self_defence/2023/img4.jpg',
      '/self_defence/2023/img5.jpg',
      '/self_defence/2023/img6.jpg',
      '/self_defence/2023/img7.jpg',
      '/self_defence/2023/img8.jpg',
      '/self_defence/2023/img9.jpg',
      '/self_defence/2023/img10.jpg',
      '/self_defence/2023/img11.jpg',
      '/self_defence/2023/img12.jpg',
      '/self_defence/2023/img13.jpg',
      '/self_defence/2023/img14.jpg',
      '/self_defence/2023/img15.jpg',
      '/self_defence/2023/img16.jpg',
      '/self_defence/2023/img17.jpg',
      '/self_defence/2023/img18.jpg',
      '/self_defence/2023/img19.jpg',
      '/self_defence/2023/img20.jpg',
      '/self_defence/2023/img21.jpg',
      '/self_defence/2023/img22.jpg',
      '/self_defence/2023/img23.jpg',
      '/self_defence/2023/img24.jpg',
      '/self_defence/2023/img25.jpg',
      '/self_defence/2023/img26.jpg',
      '/self_defence/2023/img27.jpg',
      '/self_defence/2023/img28.jpg',
      '/self_defence/2023/img29.jpg',
      '/self_defence/2023/img30.jpg',
      '/self_defence/2023/img31.jpg',
      '/self_defence/2023/img32.jpg',   

    ],
    },
//      {
//     year: '2025',
//     title: 'Interschool Karate Competition',
//     images: [
//       '/camp/summer2024/img13.JPG',
//      '/camp/summer2024/img1.JPG',
//       '/camp/summer2024/img2.JPG',
//       '/camp/summer2024/img3.JPG',
//       '/camp/summer2024/img4.JPG',
//       '/camp/summer2024/img5.JPG',
//       '/camp/summer2024/img6.JPG',
//       '/camp/summer2024/img7.JPG',
//       '/camp/summer2024/img8.JPG',
//       '/camp/summer2024/img9.JPG',
//       '/camp/summer2024/img10.JPG',
//       '/camp/summer2024/img11.JPG',
//       '/camp/summer2024/img12.JPG',
//       '/camp/summer2024/img14.JPG',
//       '/camp/summer2024/img15.JPG',
//       '/camp/summer2024/img16.JPG', 
//       '/camp/summer2024/img17.JPG',
//       '/camp/summer2024/img18.JPG',
//       '/camp/summer2024/img19.JPG',
//     ],
//      },
//        {
//     year: '2026',
//     title: 'Interschool Karate Competition',
//     images: [
//       '/camp/summer2025/img1.jpg',
//       '/camp/summer2025/img2.jpg',
//        '/camp/summer2025/img3.jpg',
//         '/camp/summer2025/img4.jpg',
//          '/camp/summer2025/img5.JPG',
//           '/camp/summer2025/img6.JPG',
//            '/camp/summer2025/img7.JPG',
//             '/camp/summer2025/img8.JPG',
//              '/camp/summer2025/img9.JPG',
//               '/camp/summer2025/img10.JPG',
//                '/camp/summer2025/img11.JPG',
//                 '/camp/summer2025/img12.JPG',
//                  '/camp/summer2025/img13.JPG',
                  

//     ],
//   },
];

export default function CompetitionGalleryPage() {
  const pathname = usePathname();
  const [selectedComp, setSelectedComp] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showAnimations, setShowAnimations] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimations(true); // Trigger animations after slight delay
    }, 600); // 100ms is enough for most paint/render

    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {!selectedComp ? (
        <>
         <section className="w-full h-[200px] bg-[#807E7E] pt-24 pb-6 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
              Competition<span className="text-red-600"> Gallery</span>
            </h1>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-6 px-4 py-8 sm:px-6">
            {compData.map((comp, index) => (
               <div
  key={index}
  onClick={() => setSelectedComp(comp)}
  className={`bg-[#EBEBEB] shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105 ${
    showAnimations ? 'fade-in' : ''
  }`}
  style={showAnimations ? { animationDelay: `${index * 0.1}s` } : {}}
>
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={comp.images[0]}
                    alt={comp.title}
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
                    {comp.title}
                  </h3>
                  <p
                    className={`text-sm text-gray-600 mt-1 ${
                      showAnimations ? 'slide-in-text slide-in-delay-2' : ''
                    }`}
                  >
                    {comp.year}
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
    onClick={() => setSelectedComp(null)}
    className="relative group overflow-hidden px-5 py-2 rounded shadow-lg bg-black text-white text-sm sm:text-base"
  >
    <span className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out z-0" />
    <span className="relative z-10">← Back</span>
  </button>
</div>

          <section className="w-full h-[200px] bg-[#807E7E] pt-24 pb-6 rounded-xl" >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
            {selectedComp.title} ({selectedComp.year})
          </h2>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-4 px-4 py-8 sm:px-6">
            {selectedComp.images.map((src, index) => (
              <div
                key={index}
                onClick={() => setModalImage(src)}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow cursor-pointer transition hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Competition ${selectedComp.year} - ${index + 1}`}
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
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-2 sm:px-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-full sm:max-w-3xl md:max-w-5xl w-full max-h-[90vh] overflow-auto"
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
        {/* Footer */}
   

  {/* Footer */}
  {/* <footer className="bg-black text-white py-8 text-center">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Black Pantherkan Academy. All rights reserved.
      </p>
    </div>
  </footer> */}



    </div>
  );
}
