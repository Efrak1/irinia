'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import React from 'react';

export const CircularMotion = () => {
    const controls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            while (true) {
                for (let angle = 0; angle < 360; angle += 10) {
                    const radians = (angle * Math.PI) / 180;
                    const x = Math.cos(radians) * 5; // радиус 5px
                    const y = Math.sin(radians) * 5; // радиус 5px

                    await controls.start({ x, y });
                }
            }
        };

        animate();
    }, [controls]);

    return (
        <div>
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className='absolute top-[80%] left-[20%] w-[200px] h-[200px]'
                style={{
                    backgroundColor: '#B06300',
                    borderRadius: '50%',
                    opacity: .2,
                    zIndex: -1,
                }}
            />

            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className='absolute top-[5%] left-[5%] w-[50px] h-[50px]'
                style={{
                    backgroundColor: 'darkcyan',
                    borderRadius: '50%',
                    opacity: .2,
                    zIndex: -1,
                }}
            /> {/* + */}
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className='absolute top-[13%] left-[90%] w-[50px] h-[50px]'
                style={{
                    backgroundColor: 'darkcyan',
                    borderRadius: '50%',
                    opacity: .2,
                    zIndex: -1,
                }}
            /> {/* + */}
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className='absolute top-[93%] left-[65%] w-[50px] h-[50px]'
                style={{
                    backgroundColor: 'darkcyan',
                    borderRadius: '50%',
                    opacity: .2,
                    zIndex: -1,
                }}
            /> {/* + */}
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className='absolute top-[80%] left-[70%] w-[100px] h-[100px]'
                style={{
                    backgroundColor: '#B06300',
                    borderRadius: '50%',
                    opacity: .2,
                    zIndex: -1,
                }}
            /> {/* + */}
        </div>
    );
};
export const CircularMotion1 = () => {
    const controls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            while (true) {
                for (let angle = 0; angle < 360; angle += 10) {
                    const radians = (angle * Math.PI) / 180;
                    const x = Math.cos(radians) * 5; // радиус 5px
                    const y = -Math.sin(radians) * 5; // Изменяем знак для вращения в другую сторону

                    await controls.start({ x, y });
                }
            }
        };

        animate();
    }, [controls]);

    return (
        <div>
            <motion.svg
                initial={{ x: 0, y: 0 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className='absolute top-[12%] right-[93%]'
                width="200"
                height="200"
                style={{ zIndex: -1 }}
            >
                <defs>
                    <mask id="mask1">
                        <rect width="100%" height="100%" fill="white" />
                        <circle cx="100" cy="100" r="50" fill="black" /> {/* Внутренний круг */}
                    </mask>
                </defs>
                <circle cx="100" cy="100" r="100" fill="#B06300" mask="url(#mask1)" opacity={0.2} />
            </motion.svg> {/* + */}
            <motion.svg
                initial={{ x: 0, y: 0 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className='absolute top-[15%] right-[8%]'
                width="200"
                height="200"
                style={{ zIndex: -1 }}
            >
                <defs>
                    <mask id="mask1">
                        <rect width="100%" height="100%" fill="white" />
                        <circle cx="100" cy="100" r="50" fill="black" /> {/* Внутренний круг */}
                    </mask>
                </defs>
                <circle cx="100" cy="100" r="100" fill="#B06300" mask="url(#mask1)" opacity={0.2} />
            </motion.svg>
            <motion.svg
                initial={{ x: 0, y: 0 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className='absolute top-[77%] left-[35%]'
                width="50"
                height="50"
                style={{ zIndex: -1 }}
            >
                <defs>
                    <mask id="mask2">
                        <rect width="100%" height="100%" fill="white" />
                        <circle cx="25" cy="25" r="12.5" fill="black" /> {/* Внутренний круг */}
                    </mask>
                </defs>
                <circle cx="25" cy="25" r="25" fill="darkcyan" mask="url(#mask2)" opacity={0.2} />
            </motion.svg> {/* + */}
        </div>
    );
};