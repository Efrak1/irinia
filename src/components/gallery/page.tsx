import { Footer } from '@/components/Footer/Footer';
import { Logo } from '@/components/Head/Logo';
import React from 'react'

const Portfolio = () => {
  return (
    <>
      <Logo />
      <section id='portfolio' className=''>
        <h2 className='text-[32px] flex justify-center items-center w-full h-[32px] mb-4'>Галерея</h2>
        
      </section>
      <Footer />
    </>
  )
}

export default Portfolio;