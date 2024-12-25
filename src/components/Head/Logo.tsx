'use client'
import React from 'react'
import { Navigation } from '@/components/Head/Navigation'
import { MobileNavigation } from './MobileNavigation'

export const Logo: React.FC = () => {
  return (
    <header id='logo'>
      <div className='sm:flex hidden'>
        <Navigation />
      </div>
      <div className='sm:hidden'>
        <MobileNavigation />
      </div>
    </header>
  )
}