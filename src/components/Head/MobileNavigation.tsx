'use client'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { useEffect } from "react";
import { CiMenuFries } from "react-icons/ci"
import { motion } from "framer-motion";


export const MobileNavigation = () => {

    let pathname = "";

    useEffect(() => {
        pathname = window.location.href;
    }, []);
    const [basePath, anchor] = pathname.split('#');

    return (
        <div className='flex justify-between items-center p-4 fixed top-0 w-full z-10 bg-white'>
            <Link href="/#logo" className='text-black text-[32px] '>Ириния</Link>
            <Sheet>
                <SheetTrigger className="flex justify-center items-center">
                    <CiMenuFries className='text-[32px] text-accent text-black' />
                </SheetTrigger>
                
                <SheetContent side={"top"}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} // Начальное состояние
                        animate={{ opacity: 1, y: 0 }} // Конечное состояние
                        exit={{ opacity: 0, y: -20 }} // Состояние при выходе
                        transition={{ duration: 0.5 }} // Длительность анимации
                    >
                        <nav className='flex flex-col justify-start items-start'>
                            <Link href="/#logo" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300 text-[14px] p-2'>Главная</Link>
                            <Link href="/#about" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300 text-[14px] p-2'>О нас</Link>
                            <Link href="/gallery" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300 text-[14px] p-2'>Портфолио</Link>
                            <Link href="/#order" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300 text-[14px] p-2'>Заказать</Link>
                            <Link href="/#footer" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300 text-[14px] p-2'>Контакты</Link>
                        </nav>
                        <hr className='mt-[50%]' />
                        <div className='mt-10'>
                            <button className='bg-red-700 rounded-xl p-1 w-full mb-3'><Link href="/tel:+79831710387" className='text-white text-[14px] w-full p-1'>+7 983 171-03-87</Link></button>
                            <button className='bg-red-700 rounded-xl p-1 w-full text-white'>11.00 - 12.00</button>
                            <p className='text-[14px] flex-row text-teal-600 mt-3'>© 2023. Разработано <a className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="https://niitsuru.com">NIITSURU</a>.</p>
                            <Link href="https://translated.turbopages.org/proxy_u/en-ru.ru.7616d861-6761eb46-a9670362-74722d776562/https/en.wikipedia.org/wiki/Privacy_policy" className='text-[14px] w-full underline flex justify-start mt-2 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>
                                Политика конфиденциальности
                            </Link>
                        </div>
                    </motion.div>
                </SheetContent>

            </Sheet>
        </div>
    )
}
// Шалит модалка нга телефоне, навигация в лого, свайпер периудами
