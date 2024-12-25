'use client'
import React from 'react';
import Link from 'next/link';

export const Navigation: React.FC = () => {
    return (
        <section className='flex justify-between items-center w-full mt-10 p-10'>
            <Link href="/#logo" className='text-black text-[32px]'>Ириния</Link>
            <nav className='flex justify-between items-center gap-6'>
                <Link href="/#logo" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>Главная</Link>
                <Link href="/#about" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>О нас</Link>
                <Link href="/gallery" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>Портфолио</Link>
                <Link href="/#order" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>Заказать</Link>
                <Link href="/#footer" className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>Контакты</Link>
                <button className='bg-red-700 rounded-xl p-3'><Link href="/tel:+79831710387" className='text-white text-[18px] w-[167px] p-4'>+7 983 171-03-87</Link></button>
            </nav>
        </section>
    );
};