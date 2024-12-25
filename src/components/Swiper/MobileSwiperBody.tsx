import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules';

export const MobileSwiperBody = () => {

    return (
        <section className='flex flex-col justify-center items-center relative'>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                className='w-[80vw] relative'
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='p-1'>
                    <nav className='flex flex-col justify-center bg-white border-solid border-black border-0 rounded-2xl p-[40px] w-[290px] h-[600px]'>
                        <div className='flex-col'>
                            <h3 className='text-[24px]'>Детские торты</h3>
                            <p className='text-[16px]'>Детские торты - не просто сладости, а <br />источники радости и вдохновения. Как выбрать <br />торт, который станет украшением праздника?</p>
                        </div>
                        <Image
                            className='flex-row items-center mt-5 mb-5'
                            src="/img/cake-kid.png"
                            width={205}
                            height={200}
                            alt="не робит епта"
                        />
                        <div className='flex justify-center'>
                            <Link href="/gallery#1"><button className='bg-red-700 w-36 h-10 rounded-xl mt-3 text-white'>Примеры работ</button></Link>
                        </div>
                    </nav>
                </SwiperSlide>
                <SwiperSlide className='p-1'>
                    <nav className='flex flex-col justify-center bg-white border-solid border-black border-0 rounded-2xl p-[40px] w-[290px] h-[600px]'>
                        <div className='flex-col'>
                            <h3 className='text-[24px]'>Праздничные торты</h3>
                            <p className='text-[16px]'>Уникальные десерты для любого торжества, которые будут долго запоминаться своей неповторимостью и изысканным вкусом.</p>
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='flex-row items-center'
                                src="/img/cake-party.png"
                                width={175}
                                height={180}
                                alt="не робит епта"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Link href="/gallery#2"><button className='bg-red-700 w-36 h-10 rounded-xl mt-[60px] text-white'>Примеры работ</button></Link>
                        </div>
                    </nav>
                </SwiperSlide>
                <SwiperSlide className='p-1'>
                    <nav className='flex flex-col justify-center bg-white border-solid border-black border-0 rounded-2xl p-[40px] w-[290px] h-[600px]'>
                        <div className='flex-row'>
                            <h3 className='text-[24px]'>Свадебные торты</h3>
                            <p className='text-[16px]'>Мы создаем свадебные торты, которые отражают вашу индивидуальность и стиль, чтобы этот день запомнился навсегда.</p>
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='flex-row items-center mt-12 mb-5'
                                src="/img/cake-wedding.png"
                                width={185}
                                height={180}
                                alt="не робит епта"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Link href="/gallery#3"><button className='bg-red-700 w-36 h-10 rounded-xl mt-5 text-white'>Примеры работ</button></Link>
                        </div>
                    </nav>
                </SwiperSlide>
                <SwiperSlide className='p-1'>
                    <nav className='flex flex-col justify-center bg-white border-solid border-black border-0 rounded-2xl p-[40px] w-[290px] h-[600px]'>
                        <div className='flex-col'>
                            <h3 className='text-[24px]'>Корпоративные торты</h3>
                            <p className='text-[16px]'>Наши десерты будут радовать вас и ваших коллег на любом мероприятии, будь то юбилей, запуск нового продукта или другое важное событие.</p>
                        </div>
                        <Image
                            className='flex-row items-center mt-5 mb-5'
                            src="/img/cake-kids.png"
                            width={205}
                            height={200}
                            alt="не робит епта"
                        />
                        <div className='flex justify-center'>
                            <Link href="/gallery#4"><button className='bg-red-700 w-36 h-10 rounded-xl text-white'>Примеры работ</button></Link>
                        </div>
                    </nav>
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-center mt-2 relative">
                <button className="custom-prev bg-black text-white rounded-[35px] w-[35px] h-[35px] text-[18px] cursor-pointer flex justify-center items-center p-[25px] mr-3">&#10094;</button>
                <button className="custom-next bg-black text-white rounded-[35px] w-[35px] h-[35px] text-[18px] cursor-pointer flex justify-center items-center p-[25px] ml-3">&#10095;</button>
            </div>
        </section>
    )
}
