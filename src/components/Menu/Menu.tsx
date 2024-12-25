'use client'
import React from 'react'
import Image from 'next/image'
import { ButtonLogo1, ButtonLogo2 } from './ButtonLogo'
import { CircularMotion, CircularMotion1 } from './MotionMenu'

export const Menu = () => {
    return (
        <>
            <section className='flex flex-col sm:flex-row justify-between items-center mt-24'>
                <div className='w-full block gap-x-6'>
                    <h1 className='border-right-8 text-[40px] sm:text-[64px]'>Вкус вашего <br />праздника</h1>
                    <p className='border-right-8 text-[20px] sm:text-[24px]'>Авторская работа и индивидуальный подход<br />к каждому торту в Барнауле</p>
                    <span className='flex flex-col sm:flex-row gap-5 mt-3'>
                        <ButtonLogo1 />
                        <ButtonLogo2 />
                    </span>
                </div>
                <div className=''>
                    <Image
                        className='block w-[350px] h-[300] sm:w-[792px] sm:h-[580px]'
                        src="/img/cake.png"
                        width={792}
                        height={665}
                        alt="не робит епта"
                    />
                </div>
            </section>
            <div>
                <CircularMotion />
                <CircularMotion1 />
            </div>
        </>
    )
}