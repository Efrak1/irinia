import { Footer } from '@/app/Footer/Footer';
import { Logo } from '@/app/Head/Logo';
import { Gallery } from '@/components/Gallery';
import React from 'react'

const Portfolio = () => {
  return (
    <>
      <Logo />
      <section id='portfolio' className=''>
        <h2 className='text-[32px] flex justify-center items-center w-full h-[32px] mb-4'>Галерея</h2>
        <Gallery />
      </section>
      <Footer />
    </>
  )
}

export default Portfolio;