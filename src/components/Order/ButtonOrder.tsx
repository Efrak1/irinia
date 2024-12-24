import React from 'react'
import { useState } from 'react';

export const ButtonOrder1 = () => {

    const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setActiveButtonIndex(index);
    };

    const buttonLabels = [
        'Слой 1',
        'Слой 2',
        'Слой 3'
    ];

    return (
        <div className='flex flex-col sm:flex-row flex-wrap w-full sm:w-auto'>
            {buttonLabels.map((label, index) => {
                // Определяем классы для кнопки в зависимости от ее состояния
                const buttonClasses = activeButtonIndex === index
                    ? 'flex items-center justify-center text-[18px] sm:text-[20px] text-white bg-red-900 rounded-2xl mt-4 mr-2 p-4' // Активная кнопка
                    : 'flex items-center justify-center text-[18px] sm:text-[20px] text-black rounded-2xl mt-4 mr-2 p-4'; // Неактивные кнопки

                return (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        className={buttonClasses} // Используем определенные классы
                    >
                        {activeButtonIndex === index}
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

export const ButtonOrder2 = () => {

    const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setActiveButtonIndex(index);
    };

    const buttonLabels = [
        'Ягодное наслаждение',
        'Сникерс',
        'Красный бархат',
        'Три шоколада',
        'Шварцвальдский стол',
        'Сластена',
        'Йогуртово-фруктовая',
        'Орео',
        'Птичье молоко',
        'Рафаэлло',
        'Свой вариант'
    ];

    return (
        <div className='flex sm:flex-row flex-col sm:flex-wrap w-full'>
            {buttonLabels.map((label, index) => {
                const buttonClasses = activeButtonIndex === index
                    ? 'flex items-center justify-center text-[18px] sm:text-[20px] text-white bg-red-900 rounded-2xl mt-4 mr-2 p-4' // Активная кнопка
                    : 'flex items-center justify-center text-[18px] sm:text-[20px] text-black rounded-2xl mt-4 mr-2 p-4'; // Неактивные кнопки

                return (
                    <div key={index}>
                        <button
                            onClick={() => handleButtonClick(index)}
                            className={buttonClasses}
                        >
                            {index < buttonLabels.length - 1 && activeButtonIndex === index && <SvgButtonOrder2 />}
                            <span className='ml-2'>{label}</span>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export const ButtonOrder3 = () => {

    const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setActiveButtonIndex(index);
    };

    const buttonLabels = [
        'Безе на палочке',
        'Леденец на палочке',
        'Ягоды и фрукты',
        'Цветы из ванильной бумаги',
        'Пластичный шоколад',
        'ВАУ-зефир'
    ];

    return (
        <div className='flex flex-col sm:flex-row sm:flex-wrap w-full'>
            {buttonLabels.map((label, index) => {
                const buttonClasses = activeButtonIndex === index
                    ? 'flex text-start sm:items-center sm:justify-center text-[18px] sm:text-[20px] text-white bg-red-900 rounded-2xl mt-4 mr-2 p-4' // Активная кнопка
                    : 'flex text-start sm:items-center sm:justify-center text-[18px] sm:text-[20px] text-black rounded-2xl mt-4 mr-2 p-4'; // Неактивные кнопки

                return (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        className={buttonClasses}
                    >
                        {activeButtonIndex === index}
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

const SvgButtonOrder2 = () => {
    return (
        <svg className='relative ml-2' width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0C5.34375 0 0 5.39062 0 12C0 18.6562 5.34375 24 12 24C18.6094 24 24 18.6562 24 12C24 5.39062 18.6094 0 12 0ZM12 21.75C6.60938 21.75 2.25 17.3906 2.25 12C2.25 6.65625 6.60938 2.25 12 2.25C17.3438 2.25 21.75 6.65625 21.75 12C21.75 17.3906 17.3438 21.75 12 21.75ZM12 15.75C11.1562 15.75 10.5 16.4062 10.5 17.25C10.5 18.0938 11.1094 18.75 12 18.75C12.7969 18.75 13.5 18.0938 13.5 17.25C13.5 16.4062 12.7969 15.75 12 15.75ZM13.5469 6H11.1562C9.32812 6 7.875 7.45312 7.875 9.28125C7.875 9.89062 8.39062 10.4062 9 10.4062C9.60938 10.4062 10.125 9.89062 10.125 9.28125C10.125 8.71875 10.5469 8.25 11.1094 8.25H13.5C14.1094 8.25 14.625 8.71875 14.625 9.28125C14.625 9.65625 14.4375 9.98438 14.1094 10.1719L11.4375 11.7656C11.0625 12 10.875 12.375 10.875 12.75V13.5C10.875 14.1094 11.3906 14.625 12 14.625C12.6094 14.625 13.125 14.1094 13.125 13.5V13.4062L15.2344 12.0938C16.2188 11.4844 16.8281 10.4062 16.8281 9.28125C16.875 7.45312 15.4219 6 13.5469 6Z" fill="#FAFAFA"></path>
        </svg>
    )
}

export const ButtonOrderLogo = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
    const [isElementVisible, setIsElementVisible] = useState<boolean>(true); // Состояние для управления видимостью элемента

    const handleButtonClick = (index: number) => {
        setActiveButtonIndex(index);

        if (index === 1) {
            setIsElementVisible(false);
        } else {
            setIsElementVisible(true);
        }
    };

    const buttonLabels = [
        'Собрать торт',
        'Заказать звонок'
    ];

    return (
        <div className='flex w-full flex-col sm:flex-row'>
            {buttonLabels.map((label, index) => {
                const buttonClasses = activeButtonIndex === index
                    ? 'items-center text-[18px] sm:text-[20px] w-full sm:w-auto text-white bg-red-900 rounded-2xl mt-4 mr-2 p-4' // Активная кнопка
                    : 'items-center text-[18px] sm:text-[20px] w-full sm:w-auto text-black rounded-2xl mt-4 mr-2 p-4'; // Неактивные кнопки

                return (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        className={buttonClasses}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};