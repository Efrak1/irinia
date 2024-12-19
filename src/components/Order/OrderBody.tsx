import React from 'react'
import { Range } from './Range'
import { ButtonOrder1, ButtonOrder2, ButtonOrder3 } from '@/components/Order/ButtonOrder'

export const OrderBody = () => {

    return (
        <>
            <hr className='p-5 mt-10' />
            <section id='order'>
                <h3 className='text-[24px]'>Рассчитать размер торта</h3>
                <p className='text-[20px] text-slate-400'>Дополнительные ярусы можно выбрать только в случае, если ваш торт планируется более чем на 18 персон</p>
                <p className='text-[20px] text-slate-400'>Минимальный вес торта - 2 кг</p>
            </section>
            <Range/>
            <hr className='p-5 mt-10' />
            <section className='flex-col'>
                <h3 className='text-[24px] flex-row min-w-full'>Переключения между слоями</h3>
                <ButtonOrder1/>
            </section>
            <hr className='p-5 mt-10' />
            <section className='flex-col'>
                <h3 className='text-[24px] flex-row min-w-full'>Переключения между слоями</h3>
                <ButtonOrder2/>
            </section>
            <hr className='p-5 mt-10' />
            <section>
                <h3 className='text-[24px] flex-row min-w-full'>Дополнительные декорации</h3>
                <ButtonOrder3/>
            </section>
            <hr className='p-5 mt-10' />
            <section>
                <h3 className='text-[24px]'>Надпись</h3>
                <p className='text-[20px]'>Мы можем разместить на торте любую надпись, например: «С днем рождения!»</p>
                <input className='p-[24px] rounded-xl w-full mt-5' type="text" placeholder="С днём рождения!" name="text"></input>
                <h3 className='text-[24px]'>Комментарии</h3>
                <p className='text-[20px]'>Дополнительные пожелания по украшению, начинке, декору и прочее</p>
                <input className='p-[24px] rounded-xl w-full pb-32 mt-5' type="text" placeholder="Так же хочу добавить..." name="text"></input>
            </section>
            <hr className='p-5 mt-10' />
        </>
    )
}