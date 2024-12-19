import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const galleries = [
  {
    id: 1,
    title: 'Галерея 1',
    images: [
      '/images/photo1.jpg',
      '/images/photo2.jpg',
      '/images/photo3.jpg',
    ],
  },
  {
    id: 2,
    title: 'Галерея 2',
    images: [
      '/images/photo4.jpg',
      '/images/photo5.jpg',
      '/images/photo6.jpg',
    ],
  },
  {
    id: 3,
    title: 'Галерея 3',
    images: [
      '/images/photo7.jpg',
      '/images/photo8.jpg',
      '/images/photo9.jpg',
    ],
  },
  {
    id: 4,
    title: 'Галерея 4',
    images: [
      '/images/photo10.jpg',
      '/images/photo11.jpg',
      '/images/photo12.jpg',
    ],
  },
];

export const GalleryButtons = () => {
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 mb-6">
        {galleries.map((gallery, index) => {
          const buttonClasses =
            activeGallery === gallery.id
              ? 'flex items-center justify-center text-[20px] text-white bg-red-900 rounded-2xl mt-4 mr-2 p-4' // Активная кнопка
              : 'flex items-center justify-center text-[20px] text-black rounded-2xl mt-4 mr-2 p-4'; // Неактивные кнопки

          return (
            <button
              key={gallery.id}
              onClick={() => setActiveGallery(gallery.id)}
              className={buttonClasses}
            >
              {gallery.title}
            </button>
          );
        })}
      </div>

      {activeGallery && (
        <div className="grid grid-cols-3 gap-4">
          {galleries
            .find((gallery) => gallery.id === activeGallery)
            ?.images.map((image, index) => (
              <div key={index} className="relative w-full h-48">
                <Image
                  src={image}
                  alt={'Image ${index + 1}'}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};