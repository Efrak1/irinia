'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const galleries = [
    {
        id: 1,
        title: 'Детские торты',
        images: [
            '/image/cake-kid.png',
            '/image/cake-kid.png',
            '/image/cake-kid.png',
            '/image/cake-kid.png',
            '/image/cake-kid.png',
            '/image/cake-kid.png',
        ],
    },
    {
        id: 2,
        title: 'Праздничные торты',
        images: [
            '/image/cake-kids.png',
            '/image/cake-kids.png',
            '/image/cake-kids.png',
        ],
    },
    {
        id: 3,
        title: 'Свадебные торты',
        images: [
            '/image/cake-party.png',
            '/image/cake-party.png',
            '/image/cake-party.png',
        ],
    },
    {
        id: 4,
        title: 'Зефир',
        images: [
            '/image/cake.png',
            '/image/cake.png',
            '/image/cake.png',
        ],
    },
];

export const GalleryButtons = () => {
    const [activeGallery, setActiveGallery] = useState<number>(galleries[0].id);

    return (
        <div className="flex flex-col items-center h-full">
            <div className="flex space-x-4 mb-6">
                {galleries.map((gallery, index) => {
                    const buttonClasses =
                        activeGallery === gallery.id
                            ? 'flex items-center justify-center text-[20px] text-white bg-red-900 rounded-2xl mt-4 mr-2 p-4 duration-300' // Активная кнопка
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
                <div className="grid grid-cols-6 gap-4">
                    {galleries
                        .find((gallery) => gallery.id === activeGallery)
                        ?.images.map((image, index) => (
                    <div key={index} className="w-full h-auto flex flex-warp justify-center items-center duration-500">
                        <Image
                            src={image}
                            alt={'Image ${index + 1}'}
                            objectFit="cover"
                            className="rounded-lg"
                            width={300}
                            height={300}
                        />
                    </div>
            ))}
                </div>
            )}
        </div>
    );
};