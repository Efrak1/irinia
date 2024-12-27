'use client'
import React from 'react'
import Link from 'next/link'
import { BackButton, Tel, Vk } from './ButtonFooter'
import { MobileFooter } from './MobileFooter'

import { useEffect } from 'react'
import { useState } from 'react'

// export const Footer = () => {
//     return (
//         <>
//             <div className='sm:flex hidden p-10'>
//                 <section id='footer' className='grid-cols-3 grid mt-12 relative'>
//                     <div className='flex-row justify-between'>
//                         <Link href='/#logo' className='flex text-[32px] items-start'>Ириния</Link>
//                         <p className='text-[18px] flex-row text-teal-600 mt-[32px]'>© 2023. Разработано <a className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="https://niitsuru.com">NIITSURU</a>.</p>
//                     </div>
//                     <div>
//                         <ul className='flex flex-row justify-between items-center'>
//                             <li>
//                                 <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#logo">Главная</Link>
//                             </li>
//                             <li>
//                                 <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="#about">О Нас</Link>
//                             </li>
//                             <li>
//                                 <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/gallery">Портфолио</Link>
//                             </li>
//                             <li>
//                                 <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#order">Заказать</Link>
//                             </li>
//                             <li>
//                                 <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#footer">Контакты</Link>
//                             </li>
//                         </ul>
//                         <Link href="https://translated.turbopages.org/proxy_u/en-ru.ru.7616d861-6761eb46-a9670362-74722d776562/https/en.wikipedia.org/wiki/Privacy_policy" className='mt-[60px] text-[18px] w-full underline flex justify-center text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>
//                             Политика конфиденциальности
//                         </Link>
//                     </div>
//                     <div>
//                         <ul className='flex justify-end items-end'>
//                             <BackButton />
//                         </ul>
//                         <div className='flex justify-end items-end gap-7 mt-7'>
//                             <Vk />
//                             <Tel />
//                         </div>
//                     </div>
//                 </section>
//             </div>
//             <div className='sm:hidden'>
//                 <MobileFooter />
//             </div>

//         </>
//     )
// }

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(window.innerWidth < 640);

    const handleResize = () => {
        setIsVisible(window.innerWidth < 640);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isVisible ? (
                <MobileFooter />
            ) : (
                <div className='p-10'>
                    <section id='footer' className='grid-cols-3 grid mt-12 relative'>
                        <div className='flex-row justify-between'>
                            <Link href='/#logo' className='flex text-[32px] items-start'>Ириния</Link>
                            <p className='text-[18px] flex-row text-teal-600 mt-[32px]'>© 2023. Разработано <a className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="https://niitsuru.com">NIITSURU</a>.</p>
                        </div>
                        <div>
                            <ul className='flex flex-row justify-between items-center'>
                                <li>
                                    <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#logo">Главная</Link>
                                </li>
                                <li>
                                    <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="#about">О Нас</Link>
                                </li>
                                <li>
                                    <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/gallery">Портфолио</Link>
                                </li>
                                <li>
                                    <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#order">Заказать</Link>
                                </li>
                                <li>
                                    <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#footer">Контакты</Link>
                                </li>
                            </ul>
                            <Link href="https://translated.turbopages.org/proxy_u/en-ru.ru.7616d861-6761eb46-a9670362-74722d776562/https/en.wikipedia.org/wiki/Privacy_policy" className='mt-[60px] text-[18px] w-full underline flex justify-center text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>
                                Политика конфиденциальности
                            </Link>
                        </div>
                        <div>
                            <ul className='flex justify-end items-end'>
                                <BackButton />
                            </ul>
                            <div className='flex justify-end items-end gap-7 mt-7'>
                                <Vk />
                                <Tel />
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
};