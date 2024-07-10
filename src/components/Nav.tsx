import React from 'react'
import littleLemonLogo from '../assets/logo.svg'

export const Nav = () => {
  return (
    <nav>
      <img src={littleLemonLogo} alt='' />
      <ul>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
