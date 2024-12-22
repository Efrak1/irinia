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
                            <button className="flex justify-end p-3  max-h-10 rounded" onClick={onClose}>
                                <p className='relative bottom-[8px] text-black text-[30px] hover:text-stone-700'>X</p>
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