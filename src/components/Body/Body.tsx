'use client'
import { AboutUs } from '../AboutUs/AboutUs';
import { Swiper } from '../Swiper/Swiper';
import { Order } from '../Order/Order';
import { Application } from '../Application/Application';

export const Body = () => {
    return (
        <>
            <AboutUs />
            <Swiper/>
            <Order/>
            <Application />
        </>
    )
}