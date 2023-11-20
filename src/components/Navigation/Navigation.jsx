import React from 'react'
import { Logo } from '../Logo'
import { NavLink } from 'react-router-dom'
import NavigationStyles from './NavigationStyles.module.css'

export const Navigation = () => {
  return (
    <header className='grid grid-cols-2 px-20 py-5'>
      <Logo />
      <nav className='place-self-end'>
        <ul className={`flex text-[1.2rem] text-primary ${NavigationStyles.nav_list}`}>
          <NavLink to="/" className={NavigationStyles.nav_link}><li>Home</li></NavLink>
          <NavLink to="/characters" className={NavigationStyles.nav_link}><li>Characters</li></NavLink>
          <NavLink to="/create" className={NavigationStyles.nav_link}><li>Create</li></NavLink>
          <NavLink to="/campaigns" className={NavigationStyles.nav_link}><li>Campaigns</li></NavLink>
        </ul>
      </nav>
    </header>
  )
}
