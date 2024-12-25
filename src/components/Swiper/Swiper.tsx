import React from 'react'
import { SwiperBody } from './SwiperBody';
import { SwiperLogo } from './SwiperLogo';
import { MobileSwiperBody } from './MobileSwiperBody';

export const Swiper = () => {
    return (
        <>
            <SwiperLogo />
            <div className='sm:flex hidden'>
                <SwiperBody />
            </div>
            <div className='sm:hidden'>
                <MobileSwiperBody/>
            </div>
        </>
    )
}
