'use client';

import { useState } from 'react';
import Image from 'next/image';

const compData = [
  {
    year: '2021',
    title: 'Interschool Karate Competition',
    images: [
      '/competition/2021/img5.JPG',
     '/competition/2021/img1.JPG',
     '/competition/2021/img2.JPG',
     '/competition/2021/img3.JPG',
     '/competition/2021/img4.JPG',
     '/competition/2021/img6.JPG',
     '/competition/2021/img7.JPG',
     '/competition/2021/img8.JPG',
     '/competition/2021/img9.JPG',
    ],
  },
  {
    year: '2022',
    title: 'Interschool Karate Competition',
    images: [
       '/competition/2022/img4.JPG',
    
    '/competition/2022/img1.JPG',
    '/competition/2022/img3.JPG',
    '/competition/2022/img14.JPG',
    '/competition/2022/img5.JPG',
    '/competition/2022/img6.JPG',
    '/competition/2022/img7.JPG',
    '/competition/2022/img8.JPG',
    '/competition/2022/img9.JPG',
    '/competition/2022/img10.JPG',
    '/competition/2022/img11.JPG',
    '/competition/2022/img12.JPG',
    '/competition/2022/img13.JPG',  

    ],
  },
  {
    year: '2023',
    title: 'Interschool Karate Competition',
    images: [
      '/competition/2023/img13.JPG',
        '/competition/2023/img1.JPG',
        '/competition/2023/img2.JPG',
        '/competition/2023/img3.JPG',
        '/competition/2023/img4.JPG',   
        '/competition/2023/img5.JPG',
        '/competition/2023/img6.JPG',
        '/competition/2023/img7.JPG',
        '/competition/2023/img8.JPG',
        '/competition/2023/img9.JPG',
        '/competition/2023/img10.JPG',
        '/competition/2023/img11.JPG',
        '/competition/2023/img12.JPG',
        '/competition/2023/img14.JPG',
        '/competition/2023/img15.JPG',  
    ],
  },
  {
    year: '2024',
    title: 'Interschool Karate Competition',
    images: [
    '/competition/2024/img8.jpeg', 
    '/competition/2024/img1.JPG',
    '/competition/2024/img2.JPG',
    '/competition/2024/img3.JPG',
    '/competition/2024/img4.JPG',
    '/competition/2024/img5.JPG',
    '/competition/2024/img6.JPG',
    '/competition/2024/img7.JPG',
    '/competition/2024/img9.JPG',
    '/competition/2024/img10.JPG',
    '/competition/2024/img11.JPG',
    '/competition/2024/img12.JPG',
    '/competition/2024/img13.JPG',
    '/competition/2024/img14.JPG',
    '/competition/2024/img15.JPG',
    '/competition/2024/img16.JPG',
    '/competition/2024/img17.JPG',
        

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
  const [selectedComp, setSelectedComp] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6">
      {!selectedComp ? (
        <>
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
            Competition<span className="text-red-600">Gallery</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {compData.map((comp, index) => (
              <div
                key={index}
                onClick={() => setSelectedComp(comp)}
                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105"
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
                  <h3 className="text-1xl font-semibold text-gray-800">{comp.title}</h3>
                  <p className="text-sm text-gray-500">{comp.year}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          {/* Back Button */}
          <button
            className="mb-6 bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
            onClick={() => setSelectedComp(null)}
          >
            ← Back
          </button>

          <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">
            {selectedComp.title} ({selectedComp.year})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
