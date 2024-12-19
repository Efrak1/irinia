import Link from 'next/link'
import React from 'react'

export const ButtonLogo1 = () => {
  return (
    <button className='transition ease-in-out delay-50 hover:bg-slate-700 duration-300 w-[200px] h-[70px] bg-stone-800 rounded-2xl'>
        <Link href='/#application' className='text-white text-[24px]'>Сделать заказ</Link>
    </button>
  )
}
//   
export const ButtonLogo2 = () => {
  return (
    <button className='transition ease-in-out delay-50 hover:bg-slate-200 duration-300 flex justify-center items-center p-3 bg-white rounded-2xl w-[380px] h-[70px]'>
            <SvgLogoButton/>
            <Link href='/#swiper' className='text-[24px] text-slate-800'>Какие торты мы делаем?</Link>
        </button>
  )
}
const SvgLogoButton = () => {
    return (
        <div className='w-[35px] h-[35px] mr-2 items-center rounded-[35px] bg-stone-900'>
            <svg className='relative left-[11px] top-[10px] max-w-[30px] max-h-[30px]'>
                <path d="M5.78125 13.7188C6.15625 14.125 6.8125 14.125 7.1875 13.7188L12.1875 8.71875C12.5938 8.34375 12.5938 7.6875 12.1875 7.3125C11.8125 6.90625 11.1562 6.90625 10.7812 7.3125L7.5 10.5938V1C7.5 0.46875 7.03125 0 6.5 0C5.9375 0 5.5 0.46875 5.5 1V10.5938L2.1875 7.3125C1.8125 6.90625 1.15625 6.90625 0.78125 7.3125C0.375 7.6875 0.375 8.34375 0.78125 8.71875L5.78125 13.7188Z" fill="#FAFAFA"></path>
            </svg>
        </div>
    )
}