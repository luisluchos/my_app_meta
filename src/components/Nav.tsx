import littleLemonLogo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import '../NavBar.css'
import hamburguer from '../assets/hamburguer.svg'
import { useState } from 'react'

export const Nav = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    console.log('clicked')
    setClicked(!clicked)
  }

  const redirectToHome = () => {
    window.location.href = '/'
  }

  return (
    <nav className='row' style={{ position: 'fixed', zIndex: 100, width: '100vw ' }}>
      <div className='col-10'>
        <figure onClick={() => redirectToHome()} className='' style={{ padding: '1rem' }}>
          <img src={littleLemonLogo} alt='' />
        </figure>
      </div>

      <div className='col-2 hide-on-mobile' style={{ width: '100%' }}>
        <ul
          className=' '
          style={{
            display: 'flex',
            gap: '1rem',
            textAlign: 'right',
            padding: '10px',
            fontSize: '20px'
          }}
        >
          <li className=''>
            <Link to='/'>Home</Link>
          </li>
          <li className=''>
            <Link to='/booking'>Booking</Link>
          </li>
          <li className=''>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <div onClick={() => handleClick()} className='col-2 mobile-menu'>
        <figure className='' style={{ padding: '1rem' }}>
          <img src={hamburguer} alt='' />
        </figure>
      </div>

      <ul
        className={`${clicked ? 'show-navigation' : 'hide-navigation'} animation`}
        onClick={() => { clicked ? handleClick() : null }}
      >
        <li className='' style={{ marginTop: '30px' }}>
          <Link to='/'>Home</Link>
        </li>
        <li className=''>
          <Link to='/booking'>Booking</Link>
        </li>
        <li className=''>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
