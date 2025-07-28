import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <nav className='flex justify-center items-center bg-white p-6 gap-10'>
        <NavLink className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold underline"
              : "text-green-600 hover:text-blue-500"} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold underline"
              : "text-green-600 hover:text-blue-500"
          } to={'/blog'}>Blog</NavLink>
        <NavLink className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold underline"
              : "text-green-600 hover:text-blue-500"
          } to={'/contact'}>Contact</NavLink>
        <NavLink className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold underline"
              : "text-green-600 hover:text-blue-500"
          } to={'/login'}>Login</NavLink>
    </nav>
  )
}

export default NavBar