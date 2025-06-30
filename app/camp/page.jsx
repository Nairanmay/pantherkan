'use client';

import { useState } from 'react';
import Image from 'next/image';

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
        '/camp/img10.JPG',
      '/camp/img1.JPG',
      '/camp/img2.JPG',
      '/camp/img3.JPG',
      '/camp/img4.JPG',
      '/camp/img5.JPG',
      '/camp/img6.JPG',
      '/camp/img7.JPG',
      '/camp/img8.JPG',
      '/camp/img9.JPG',
      '/camp/img11.JPG',
      '/camp/img12.JPG',
      '/camp/img13.JPG',
      '/camp/img14.JPG',
      '/camp/img15.JPG',
      '/camp/img16.JPG',
      '/camp/img17.JPG',
      '/camp/img18.JPG',
      '/camp/img19.JPG',
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
      '/camp/summer2024/img13.jpg',
     '/camp/summer2024/img1.jpg',
      '/camp/summer2024/img2.jpg',
      '/camp/summer2024/img3.jpg',
      '/camp/summer2024/img4.jpg',
      '/camp/summer2024/img5.jpg',
      '/camp/summer2024/img6.jpg',
      '/camp/summer2024/img7.jpg',
      '/camp/summer2024/img8.jpg',
      '/camp/summer2024/img9.jpg',
      '/camp/summer2024/img10.jpg',
      '/camp/summer2024/img11.jpg',
      '/camp/summer2024/img12.jpg',
      '/camp/summer2024/img14.jpg',
      '/camp/summer2024/img15.jpg',
      '/camp/summer2024/img16.jpg', 
      '/camp/summer2024/img17.jpg',
      '/camp/summer2024/img18.jpg',
      '/camp/summer2024/img19.jpg',
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
         '/camp/summer2025/img5.jpg',
          '/camp/summer2025/img6.jpg',
           '/camp/summer2025/img7.jpg',
            '/camp/summer2025/img8.jpg',
             '/camp/summer2025/img9.jpg',
              '/camp/summer2025/img10.jpg',
               '/camp/summer2025/img11.jpg',
                '/camp/summer2025/img12.jpg',
                 '/camp/summer2025/img13.jpg',
                  '/camp/summer2025/img14.jpg',
                   '/camp/summer2025/img15.jpg',
                    '/camp/summer2025/img16.jpg',
                      '/camp/summer2025/img17.jpg',
                        '/camp/summer2025/img18.jpg',
                        '/camp/summer2025/img19.jpg',

    ],
  },
];

export default function CampGalleryPage() {
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6">
      {!selectedCamp ? (
        <>
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
            Camp <span className="text-red-600">Gallery</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {campData.map((camp, index) => (
              <div
                key={index}
                onClick={() => setSelectedCamp(camp)}
                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105"
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
                  <h3 className="text-1xl font-semibold text-gray-800">{camp.title}</h3>
                  <p className="text-sm text-gray-500">{camp.year}</p>
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
            onClick={() => setSelectedCamp(null)}
          >
            ← Back
          </button>

          <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">
            {selectedCamp.title} ({selectedCamp.year})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
