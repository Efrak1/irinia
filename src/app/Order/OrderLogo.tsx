import React from 'react'
import { ButtonOrderLogo } from '@/components/ButtonOrder'

export const OrderLogo = () => {
    return (
        <section className='p-[48px]'>
            <h2 className='flex-row text-[56px]'>Оставить заявку</h2>
            <div className='flex justify-start'>
                <ButtonOrderLogo/>
            </div>
        </section>
    )
}
