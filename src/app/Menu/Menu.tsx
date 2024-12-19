import React from 'react'
import Image from 'next/image'
import { ButtonLogo1, ButtonLogo2 } from '../../components/ButtonLogo'

export const Menu = () => {
    return (
        <section className='flex justify-between h-[80vh] items-center'>
            <div className='w-full block gap-x-6'>
                <h1 className='border-right-8 text-[64px]'>Вкус вашего <br />праздника</h1>
                <p className='border-right-8 text-[24px]'>Авторская работа и индивидуальный подход<br />к каждому торту в Барнауле</p>
                <span className='flex gap-5'>
                    <ButtonLogo1/>
                    <ButtonLogo2/>
                </span>
            </div>
            <Image
                className='block'
                src="/img/cake.png"
                width={792}
                height={665}
                alt="не робит епта"
            />
        </section>
    )
}