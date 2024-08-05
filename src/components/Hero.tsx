import { Link } from 'react-router-dom'
import imgLitteLemon from '../assets/restauranfood.jpg'
import './hero.css'

export const Hero = ({ cta = true }) => {
  return (
    <article className='bg-primary' style={{ position: 'relative', marginTop: '80px' }}>
      <section className='row container'>
        <header className='col-6' style={{ textAlign: 'left' }}>
          <div style={{ maxWidth: '400px' }}>
            <h1 className='color-primary-light'>Little Lemon</h1>
            <h2 className='color-gray'>Chicago</h2>
            <p className='color-gray'>
              We are a family owned Mediterranean restaurant, focussed on traditional recipes served
              with a modern twist.
            </p>
            <button className={`${cta ? 'show' : 'hidden'}`}>
              <Link to='/booking'>Booking</Link>
            </button>
          </div>
        </header>

        <figure className='col-6 '>
          <img src={imgLitteLemon} alt='' className='img-hero' />
        </figure>
      </section>
    </article>
  )
}
