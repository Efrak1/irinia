import Link from 'next/link'
import React from 'react'
import style from '../style/Logo.module.css'
import { Navigation } from '@/components/Head/Navigation'

export const Logo: React.FC = () => {
  return (
      <header id='logo' className={style.flexLogo}>
        <Link href="/#logo" className={style.flexLogo1}>Ириния</Link>
        <Navigation/>
      </header>
  )
}