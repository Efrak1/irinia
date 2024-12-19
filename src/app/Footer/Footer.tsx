import React from 'react'
import Link from 'next/link'
import { BackButton, Tel, Vk } from '../../components/ButtonFooter'

export const Footer = () => {
    return (
        <table id="footer" className='mt-20 w-full border-none border-separate border-spacing-4'>
            <tbody>
                <tr className='align-top p-7'>
                    <td className='w-[400px]'>
                        <Link href='/#logo' className='flex text-[32px] items-start'>Ириния</Link>
                    </td>
                    <td className='w-[464px] relative top-3'>
                        <ul className='flex justify-between items-center'>
                            <li className='flex-row'>
                                <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#logo">Главная</Link>
                            </li>
                            <li className='flex-row'>
                                <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="#about">О Нас</Link>
                            </li>
                            <li className='flex-row'>
                                <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/dashboard">Портфолио</Link>
                            </li>
                            <li className='flex-row'>
                                <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#order">Заказать</Link>
                            </li>
                            <li className='flex-row'>
                                <Link className='text-[18px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#footer">Контакты</Link>
                            </li>
                        </ul>
                    </td>
                    <td className='flex items-end justify-end w-[400px]'>
                        <ul className='flex items-end'>
                            <BackButton />
                        </ul>
                    </td>
                </tr>
                <tr className='align-top p-7'>
                    <td className='relative w-[400px] top-3'>
                        <p className='text-[18px] flex-row text-teal-600'>© 2023. Разработано <a className='text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/NIITSURU.ru">NIITSURU</a>.</p>
                    </td>
                    {/* <td className='relative w-[464px] flex items-center justify-center top-3'>
                    <Link href="/dashboard" className='text-[18px] underline'>Политика конфиденциальности</Link>
                </td> */}
                    <td className='relative w-[464px] flex items-center justify-center top-3 '>
                        <Link href="https://translated.turbopages.org/proxy_u/en-ru.ru.7616d861-6761eb46-a9670362-74722d776562/https/en.wikipedia.org/wiki/Privacy_policy" className='text-[18px] relative text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>
                            Политика конфиденциальности
                            <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-black" />
                        </Link>
                    </td>
                    <td className='w-[400px] items-end'>
                        <div className='flex justify-end items-end'>
                            <Vk />
                            <Tel />
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>
    )
}
