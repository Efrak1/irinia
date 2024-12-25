'use client'
import React, { useState } from 'react';
import { Modal } from './Modal';
import { motion } from "framer-motion";

export const Fast = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="flex items-center justify-end max-h-[60px] h-screen">
            <motion.button
                whileHover={{ scale: 1.1 }} // Увеличение при наведении
                whileTap={{ scale: 0.9 }} // Уменьшение при нажатии
                className="fixed px-4 py-2 bg-red-700 text-white rounded-2xl hover:bg-red-800 scale-y-105 top-[50vh] sm:top-[70vh]"
                onClick={openModal}
            >
                Быстрая заявка
            </motion.button>
            {isModalOpen && <Modal isModalOpen={isModalOpen} onClose={closeModal} />}
        </div>
    );
};
