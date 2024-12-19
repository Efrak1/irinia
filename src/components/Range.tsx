import React from 'react'
import { useState, useEffect } from 'react';

export const Range = () => {

    const [slider1Value, setSlider1Value] = useState(0);
    const [slider2Value, setSlider2Value] = useState(0);
    const [slider3Value, setSlider3Value] = useState(0);

    const checkConditions = () => {
        return (
            slider2Value === 18 ||
            slider3Value === 18 ||
            (slider2Value + slider3Value >= 18)
        );
    };

    useEffect(() => {
        if (!checkConditions()) {
            setSlider1Value(0);
        }
    }, [slider2Value, slider3Value]);

    const handleSlider1Change = (e: any) => {
        if (checkConditions()) {
            setSlider1Value(Number(e.target.value));
        }
    };

    const handleSlider2Change = (e: any) => {
        setSlider2Value(Number(e.target.value));
    };

    const handleSlider3Change = (e: any) => {
        setSlider3Value(Number(e.target.value));
    };

    const isSlider1Enabled = checkConditions();

    return (
        <section className='flex justify-between mt-3'>
            <div className='flex-row'>
                <div className='flex max-w-500'>
                    <p className='text-[20px] text-slate-400'>Количество ярусов (Выбрано: {slider1Value})</p>
                </div>
                <input className='flex w-[400px] h-5' type="range" name="range" min="1" max="3" value={slider1Value} onChange={handleSlider1Change} disabled={!isSlider1Enabled} />
            </div>
            <div className='flex-row'>
                <div className='flex max-w-500'>
                    <p className='text-[20px] text-slate-400'>Дети (Выбрано: {slider2Value})</p>
                </div>
                <input className='flex w-[400px] h-5' type="range" name="range" min="0" max="30" value={slider2Value} onChange={handleSlider2Change} />
            </div>
            <div className='flex-row'>
                <div className='flex max-w-500'>
                    <p className='text-[20px] text-slate-400'>Взрослые (Выбрано: {slider3Value})</p>
                </div>
                <input className='flex w-[400px] h-5' type="range" name="range" min="0" max="30" value={slider3Value} onChange={handleSlider3Change} />
            </div>
        </section >
    )
}
