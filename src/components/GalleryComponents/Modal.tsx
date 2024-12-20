import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Modal: React.FC<{ isModalOpen: boolean; onClose: () => void }> = ({ isModalOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.section
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-lg p-6 shadow-lg w-[850px]"
                        initial={{ scale: 0.7 }} // Начальный масштаб
                        animate={{ scale: 1 }} // Конечный масштаб
                        exit={{ scale: 0.8 }} // Масштаб при выходе
                        transition={{ duration: 0.4 }} // Время анимации
                    >
                        <div className='flex flex-row justify-between'>
                            <h3 className='flex justify-start text-[32px]'>Быстрая заявка</h3>
                            <button className="flex justify-end p-3 bg-stone-700 text-white rounded hover:bg-stone-800" onClick={onClose}>
                                <svg className='flex justify-end p-3 relative' height="0.8em" viewBox="0 0 384 512">
                                    <path d="M378.4 71.4c8.5-10.1 7.2-25.3-2.9-33.8s-25.3-7.2-33.8 2.9L192 218.7 42.4 40.6C33.9 30.4 18.7 29.1 8.6 37.6S-2.9 61.3 5.6 71.4L160.7 256 5.6 440.6c-8.5 10.2-7.2 25.3 2.9 33.8s25.3 7.2 33.8-2.9L192 293.3 341.6 471.4c8.5 10.1 23.7 11.5 33.8 2.9s11.5-23.7 2.9-33.8L223.3 256l155-184.6z" fill="#FFFEE6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className='flex flex-col w-full mt-5'>
                            <div className='flex-row'>
                                <div className='flex'>
                                    <p className='text-[18px] text-gray-600'>Ваше имя*</p>
                                </div>
                                <input className='border-collapse border-[1px] p-[24px] rounded-xl w-full mt-5' type="text" placeholder="Введите ваше имя" name="text"></input>
                            </div>
                            <div className='flex-row'>
                                <div className='flex'>
                                    <p className='text-[18px] text-gray-600'>Номер телефона*</p>
                                </div>
                                <input className='border-collapse border-[1px] p-[24px] rounded-xl w-full mt-5' type="text" placeholder="Введите номер телефона" name="text"></input>
                            </div>
                            <div className='flex-row'>
                                <div className='flex'>
                                    <p className='text-[18px] text-gray-600'>Электронная почта</p>
                                </div>
                                <input className='border-collapse border-[1px] p-[24px] rounded-xl w-full mt-5' type="text" placeholder="Введите электронную почту" name="text"></input>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-[18px] w-full text-gray-600'>Комментарии</h3>
                                <p className='text-[16px] text-gray-400'>Опишите что вас интересует*</p>
                                <input className='border-collapse border-[1px] p-[24px] rounded-xl w-full pb-24 mt-5' type="text" placeholder="Так же хочу добавить..." name="text"></input>
                            </div>
                        </div>
                        <button className='flex-warp bg-red-700 p-5 w-[270px] mt-5 rounded-[40px] text-white text-[24px] items-center transition ease-in-out delay-50 hover:bg-slate-700 duration-300'>Заказать звонок</button>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};