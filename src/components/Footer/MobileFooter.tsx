import React from 'react'
import Link from 'next/link'

export const MobileFooter = () => {
    return (
        <div className='p-5'>
            <hr className='p-5 mt-5' />
            <section className='flex flex-col justify-start'>
                <Link href='/#logo' className='flex text-[24px] items-start'>Ириния</Link>
                <ul className='flex flex-col justify-start'>
                    <li className='mt-2'>
                        <Link className='text-[16px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#logo">Главная</Link>
                    </li>
                    <li className='mt-2'>
                        <Link className='text-[16px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="#about">О Нас</Link>
                    </li>
                    <li className='mt-2'>
                        <Link className='text-[16px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/gallery">Портфолио</Link>
                    </li>
                    <li className='mt-2'>
                        <Link className='text-[16px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#order">Заказать</Link>
                    </li>
                    <li className='mt-2'>
                        <Link className='text-[16px] p-1 text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300' href="/#footer">Контакты</Link>
                    </li>
                </ul>
            </section>
            <hr className='p-5 mt-5' />
            <section>
                <button className='flex justify-center items-center bg-red-800 p-5 w-full max-h-[48px] rounded-2xl transition ease-in-out delay-50 hover:bg-slate-700 duration-300'>
                    <Link className='flex justify-center items-center text-[18px] text-white' href="/#logo">Вернуться</Link>
                    <svg viewBox="0 0 13 7" className='relative left-5 w-4 h-4'>
                        <path d="M0.410034 5.53516L5.63269 0.53125C5.79675 0.394531 5.96082 0.3125 6.12488 0.3125C6.28894 0.3125 6.42566 0.367188 6.56238 0.476562L11.785 5.48047C12.0585 5.75391 12.0585 6.16406 11.8124 6.41016C11.5663 6.68359 11.1561 6.68359 10.8827 6.4375L6.12488 1.89844L1.31238 6.49219C1.06628 6.73828 0.628784 6.73828 0.38269 6.46484C0.136597 6.19141 0.136597 5.78125 0.410034 5.53516Z" fill="#FFFEE6"></path>
                    </svg>
                </button>
                <div className='flex flex-row justify-between w-full mt-5'>
                    <button className='flex items-center justify-center bg-white mr-2 transition ease-in-out delay-50 hover:bg-black border-[1px] border-stone-500 duration-300 w-full h-[48px] rounded-xl group'>
                        <Link className='flex items-center justify-center h-[48px] w-[48px]' href="https://vk.com/studiya_iriniya">
                            <svg className='h-[32px] w-[32px]' viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current text-black group-hover:text-white duration-300' d="M26.5947 1.08352C26.7791 0.458411 26.5947 0 25.7225 0H22.8333C22.0982 0 21.7622 0.396573 21.5778 0.83213C21.5778 0.83213 20.1088 4.48731 18.0272 6.85733C17.3553 7.54697 17.0483 7.76474 16.6821 7.76474C16.4989 7.76474 16.2328 7.54697 16.2328 6.92186V1.08352C16.2328 0.33339 16.0207 0 15.4081 0H10.8681C10.4096 0 10.1329 0.346833 10.1329 0.677533C10.1329 1.38733 11.1737 1.55134 11.2804 3.55167V7.89111C11.2804 8.84154 11.1131 9.01496 10.7442 9.01496C9.76536 9.01496 7.38337 5.34633 5.96973 1.1467C5.69438 0.330701 5.41639 0.00134486 4.67861 0.00134486H1.79072C0.964671 0.00134486 0.799988 0.397917 0.799988 0.833474C0.799988 1.61586 1.77887 5.48748 5.35974 10.608C7.74699 14.1045 11.1079 16 14.1696 16C16.0049 16 16.2315 15.5792 16.2315 14.8533V12.2104C16.2315 11.3688 16.4067 11.1995 16.9877 11.1995C17.4146 11.1995 18.1497 11.4199 19.8637 13.1044C21.8215 15.102 22.1456 15.9987 23.2457 15.9987H26.1336C26.9583 15.9987 27.3707 15.5779 27.1335 14.7471C26.874 13.9203 25.9386 12.7172 24.6975 11.2936C24.023 10.4816 23.0151 9.6078 22.7082 9.1709C22.28 8.60763 22.4038 8.35893 22.7082 7.85885C22.7095 7.86019 26.2284 2.80289 26.5947 1.08352Z" fill="currentColor"></path>
                            </svg>
                        </Link>
                    </button>
                    <button className='flex items-center justify-center bg-white ml-2 transition ease-in-out delay-50 hover:bg-black border-[1px] border-stone-500 duration-300 w-full h-[48px] rounded-xl group'>
                        <Link className='flex items-center justify-center h-[48px] w-[48px]' href="tel:+79831710387">
                            <svg className='h-[20px] w-[20px]' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-current text-black group-hover:text-white duration-300' d="M18.665 9.23273C18.6902 6.13048 16.1005 3.28675 12.8926 2.89307C12.8284 2.88556 12.7591 2.87376 12.6855 2.86089C12.5242 2.8294 12.3607 2.81146 12.1965 2.80726C11.5383 2.80726 11.3627 3.27924 11.3165 3.55922C11.2713 3.83276 11.3144 4.06339 11.4437 4.24253C11.6614 4.54396 12.0451 4.59759 12.3532 4.6405C12.4426 4.65337 12.5277 4.66517 12.5992 4.68126C15.4823 5.33883 16.4527 6.37184 16.9269 9.28851C16.9385 9.3593 16.9438 9.44727 16.9501 9.54059C16.9711 9.88922 17.0132 10.6144 17.7776 10.6144C17.8406 10.6144 17.91 10.609 17.9815 10.5983C18.6923 10.4878 18.6702 9.82486 18.6597 9.50626C18.6566 9.41616 18.6534 9.33141 18.6618 9.27456C18.6635 9.26033 18.6642 9.24599 18.6639 9.23165L18.665 9.23273Z" fill="#171717"></path>
                                <path className='fill-current text-black group-hover:text-white duration-300' d="M12.0094 1.75494C12.0956 1.76137 12.1755 1.76781 12.2428 1.77746C16.9774 2.52084 19.1549 4.80891 19.7574 9.67682C19.7679 9.75942 19.77 9.86026 19.7711 9.96645C19.7774 10.3473 19.79 11.1389 20.6227 11.155H20.648C20.9098 11.155 21.1169 11.0746 21.2662 10.9158C21.5249 10.6401 21.5081 10.2293 21.4923 9.89887C21.4891 9.81735 21.486 9.74119 21.486 9.6736C21.547 4.69628 17.3223 0.181286 12.4478 0.0139451C12.4268 0.0139451 12.4079 0.0139451 12.3889 0.0171632C12.3698 0.0196322 12.3504 0.0207076 12.3311 0.0203813C12.2817 0.0203813 12.2228 0.0160905 12.1587 0.0117997C12.083 0.0064362 11.9957 0 11.9063 0C11.1304 0 10.9832 0.563167 10.9643 0.898922C10.9211 1.67448 11.6561 1.72919 12.0094 1.75494ZM19.5293 15.9682C19.4277 15.8894 19.3271 15.8093 19.2275 15.7279C18.7102 15.3031 18.1603 14.9127 17.6293 14.534L17.2981 14.298C16.6168 13.8099 16.0048 13.5729 15.4265 13.5729C14.6464 13.5729 13.9672 14.0127 13.4057 14.8783C13.1575 15.2624 12.8558 15.449 12.4846 15.449C12.2268 15.4398 11.9739 15.3751 11.7423 15.2592C9.54481 14.2422 7.97397 12.6825 7.07604 10.624C6.6418 9.62855 6.78269 8.9785 7.54603 8.44858C7.98027 8.14823 8.78673 7.58935 8.731 6.51772C8.66581 5.30235 6.03617 1.64338 4.92795 1.22824C4.4542 1.05193 3.93489 1.05042 3.46015 1.22395C2.18686 1.66054 1.27421 2.42859 0.816837 3.44229C0.375234 4.42274 0.396262 5.57375 0.873615 6.77088C2.25625 10.2325 4.19931 13.2511 6.65021 15.7419C9.04853 18.1801 11.9968 20.1764 15.4118 21.6771C15.7199 21.8123 16.0427 21.8863 16.2793 21.9399C16.3592 21.9582 16.4286 21.9743 16.479 21.9882C16.5068 21.9958 16.5354 21.9998 16.5642 22H16.5915C18.1981 22 20.1275 20.5025 20.7195 18.7958C21.2389 17.3005 20.2905 16.5614 19.5293 15.9682ZM12.7201 5.70998C12.4457 5.71642 11.8727 5.73143 11.6719 6.32571C11.5772 6.60461 11.5888 6.8449 11.7055 7.04335C11.8758 7.33297 12.2028 7.42308 12.4993 7.47243C13.5771 7.64835 14.1312 8.2555 14.2416 9.38505C14.2931 9.91067 14.6411 10.2786 15.0859 10.2786C15.1196 10.2786 15.1533 10.2764 15.1868 10.2722C15.7231 10.2078 15.9828 9.80555 15.9596 9.07718C15.968 8.31771 15.579 7.45526 14.9155 6.76873C14.251 6.08006 13.4498 5.69174 12.7201 5.70998Z" fill="#171717"></path>
                            </svg>
                        </Link>
                    </button>
                </div>
                <Link href="https://translated.turbopages.org/proxy_u/en-ru.ru.7616d861-6761eb46-a9670362-74722d776562/https/en.wikipedia.org/wiki/Privacy_policy" className='mt-2 mb-2 text-[16px] w-full underline flex justify-start text-teal-600 transition ease-in-out delay-50 hover:text-slate-700 duration-300'>
                    Политика конфиденциальности
                </Link>
            </section>
        </div>
    )
}
