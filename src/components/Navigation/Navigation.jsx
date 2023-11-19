import React from 'react'
import { Logo } from '../Logo'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <header className='grid grid-cols-2 px-20 py-8 mb-5'>
      <Logo />
      <nav className='place-self-end'>
        <ul className='flex gap-10 text-[1.4rem] text-primary'>
          <NavLink to="/" className={`hover:text-neutral`}><li>Home</li></NavLink>
          <NavLink to="/characters" className={`hover:text-neutral`}><li>Characters</li></NavLink>
        </ul>
      </nav>
    </header>
  )
}
