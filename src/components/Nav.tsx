import littleLemonLogo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import '../NavBar.css'

export const Nav = () => {
  return (
    <nav className='row'>
      <div className='col-11'>
        <figure className='' style={{ padding: '1rem' }}>
          <img src={littleLemonLogo} alt='' />
        </figure>
      </div>

      <div className='col-1'>
        <ul
          className=' '
          style={{ display: 'flex', gap: '1rem', textAlign: 'right', padding: '1rem' }}
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
    </nav>
  )
}
