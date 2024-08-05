import React from 'react'
import logo from '../assets/logo.svg'
import './footer.css'

export const Footer = () => {
  return (
    <footer
      className='bg-primary'
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '120px',
        alignItems: 'center',
        height: '30vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          padding: '1em 1em',
          maxWidth: '1200px'
        }}
      >
        <figure>
          <img src={logo} alt='User' />
        </figure>

        <ul style={{ flexGrow: 1 }}>
          <li style={{ fontSize: '24px' }}>Doormat navigation</li>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul style={{ flexGrow: 1 }}>
          <li style={{ fontSize: '24px' }}>Contact</li>
          <li>Adress</li>
          <li>Phone number</li>
          <li>email</li>
        </ul>

        <ul style={{ flexGrow: 1 }}>
          <li style={{ fontSize: '24px' }}>Social Media Link</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  )
}
