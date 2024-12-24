import React from 'react'
import { ButtonOrderLogo } from '@/components/Order/ButtonOrder'

export const OrderLogo = () => {
    return (
        <section className='flex flex-col  p-[48px]'>
            <h2 className='flex text-start flex-row text-[36px] sm:text-[56px]'>Оставить заявку</h2>
            <div className='flex justify-start'>
                <ButtonOrderLogo/>
            </div>
        </section>
    )
}
