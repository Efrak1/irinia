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
        <div className="flex flex-col items-center h-full p-4">
            <div className="flex flex-wrap justify-center space-x-2 mb-6">
                {galleries.map((gallery) => {
                    const buttonClasses =
                        activeGallery === gallery.id
                            ? 'flex items-center justify-center text-[16px] sm:text-[20px] text-white bg-red-900 rounded-2xl mt-2 mr-2 p-3 duration-300' // Активная кнопка
                            : 'flex items-center justify-center text-[16px] sm:text-[20px] text-black rounded-2xl mt-2 mr-2 p-3'; // Неактивные кнопки

                    return (
                        <button
                            key={gallery.id}
                            onClick={() => setActiveGallery(gallery.id)}
                            className={buttonClasses + ' flex flex-col sm:flex-row w-full sm:w-auto justify-center'}
                        >
                            {gallery.title}
                        </button>
                    );
                })}
            </div>

            {activeGallery && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
                    {galleries
                        .find((gallery) => gallery.id === activeGallery)
                        ?.images.map((image, index) => (
                            <div key={index} className="w-full h-auto flex justify-center items-center duration-500">
                                <Image
                                    src={image}
                                    alt='хз'
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