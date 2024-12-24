import React from 'react'

export const Application = () => {
    return (
        <section id='application' className='flex-row'>
            <h3 className='flex-row text-[20px] sm:text-[24px]'>Данные для заявки</h3>
            <div className='flex flex-col sm:flex-row sm:justify-between w-full mt-5'>
                <div className='flex-row'>
                    <div className='flex'>
                        <p className='text-[16px] sm:text-[20px] text-gray-600'>Ваше имя*</p>
                    </div>
                    <input className='p-[24px] rounded-xl w-[280px] sm:w-[400px] mt-5' type="text" placeholder="Введите ваше имя" name="text"></input>
                </div>
                <div className='flex-row'>
                    <div className='flex'>
                        <p className='text-[16px] sm:text-[20px] text-gray-600'>Номер телефона*</p>
                    </div>
                    <input className='p-[24px] rounded-xl w-[280px] sm:w-[400px] mt-5' type="text" placeholder="Введите номер телефона" name="text"></input>
                </div>
                <div className='flex-row'>
                    <div className='flex'>
                        <p className='text-[16px] sm:text-[20px] text-gray-600'>Электронная почта</p>
                    </div>
                    <input className='p-[24px] rounded-xl w-[280px] sm:w-[400px] mt-5' type="text" placeholder="Введите электронную почту" name="text"></input>
                </div>
            </div>
            <button className='flex-warp bg-red-700 p-3 sm:p-5 mt-5 rounded-3xl text-white text-[20px] sm:text-[24px] items-center transition ease-in-out delay-50 hover:bg-slate-700 duration-300'>Оставить заявку</button>
        </section>
    )
}
