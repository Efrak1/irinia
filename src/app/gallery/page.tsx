'use client'
import React from 'react'
import { Footer } from '@/components/Footer/Footer';
import { Logo } from '@/components/Head/Logo';
import { GalleryButtons } from '../../components/GalleryComponents/GalleryButtons';
import { Fast } from '@/components/GalleryComponents/Fast';
import { motion } from "framer-motion";

export const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Logo />
      <section id='portfolio' className='mt-16'>
        <h2 className='text-[32px] flex justify-center items-center w-full h-[32px] mb-4'>Галерея</h2>
        <GalleryButtons />
      </section>
      <Fast />
      <hr className='mt-[40px] p-5' />
      <Footer />
    </motion.div>
  );
};

export default Portfolio;