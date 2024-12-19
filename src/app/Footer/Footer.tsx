import React from 'react'
import Link from 'next/link'
import { BackButton, Tel, Vk } from '../../components/ButtonFooter'

export const Footer = () => {
    return (
        <section className='grid-cols-3'>
            <div className='flex-row justify-between'>
                <Link href='/#logo' className='flex text-[32px] items-start'>Ириния</Link>
                <p className='text-[18px] flex-row text-teal-600'>© 2023. Разработано <a className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="https://niitsuru.com">NIITSURU</a>.</p>
            </div>
            <div>
                <ul className='flex-row justify-center items-center'>
                    <li>
                        <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#logo">Главная</Link>
                    </li>
                    <li>
                        <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="#about">О Нас</Link>
                    </li>
                    <li>
                        <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/dashboard">Портфолио</Link>
                    </li>
                    <li>
                        <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#order">Заказать</Link>
                    </li>
                    <li>
                        <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#footer">Контакты</Link>
                    </li>
                </ul>
                <Link href="https://translated.turbopages.org/proxy_u/en-ru.ru.7616d861-6761eb46-a9670362-74722d776562/https/en.wikipedia.org/wiki/Privacy_policy" className='text-[18px] relative text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>
                    Политика конфиденциальности
                    <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-black" />
                </Link>
            </div>
            <div>
                <ul className='items-end'>
                    <BackButton />
                </ul>
                <div className='flex-row items-end'>
                    <Vk />
                    <Tel />
                </div>
            </div>
        </section >
        // <table id="footer" className='grid-cols-2 mt-20 w-full border-none border-separate border-spacing-4'>
        //     <tbody>
        //         <tr className='align-top p-7'>
        //             <td className=''>
        //                 <Link href='/#logo' className='flex text-[32px] items-start'>Ириния</Link>
        //             </td>
        //             <td className='relative top-3'>
        //                 <ul className='items-center'>
        //                     <li className='flex-row'>
        //                         <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#logo">Главная</Link>
        //                     </li>
        //                     <li className='flex-row'>
        //                         <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="#about">О Нас</Link>
        //                     </li>
        //                     <li className='flex-row'>
        //                         <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/dashboard">Портфолио</Link>
        //                     </li>
        //                     <li className='flex-row'>
        //                         <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#order">Заказать</Link>
        //                     </li>
        //                     <li className='flex-row'>
        //                         <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#footer">Контакты</Link>
        //                     </li>
        //                 </ul>
        //             </td>
        //             <td className='items-end'>
        //                 <ul className='items-end'>
        //                     <BackButton />
        //                 </ul>
        //             </td>
        //         </tr>
        //         <tr className='align-top p-7'>
        //             <td className='relative top-3'>
        //                 <p className='text-[18px] flex-row text-teal-600'>© 2023. Разработано <a className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/NIITSURU.ru">NIITSURU</a>.</p>
        //             </td>
        //             <td className='relative items-center top-3 '>
        //                 <Link href="https://translated.turbopages.org/proxy_u/en-ru.ru.7616d861-6761eb46-a9670362-74722d776562/https/en.wikipedia.org/wiki/Privacy_policy" className='text-[18px] relative text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>
        //                     Политика конфиденциальности
        //                     <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-black" />
        //                 </Link>
        //             </td>
        //             <td className='items-end'>
        //                 <div className='flex-row items-end'>
        //                     <Vk />
        //                     <Tel />
        //                 </div>
        //             </td>
        //         </tr>
        //     </tbody>

        // </table>
    )
}
