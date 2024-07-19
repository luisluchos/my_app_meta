import imgLitteLemon from '../assets/restauranfood.jpg'

export const Hero = () => {
  return (
    <article className='bg-primary' style={{ position: 'relative' }}>
      <section className='row container'>
        <header className='col-6' style={{ textAlign: 'left' }}>
          <h1 className='color-primary-light'>Little Lemon</h1>
          <h2 className='color-gray'>Chicago</h2>
          <p className='color-gray'>
            We are a family owned Mediterranean restaurant, focussed on traditional recipes served
            with a modern twist. We are a family owned Mediterranean restaurant, focussed on
            traditional recipes served with a modern twist. We are a family owned Mediterranean
            restaurant, focussed on traditional recipes served with a modern twist. We are a family
            owned Mediterranean restaurant, focussed on traditional recipes served with a modern
            twist.
          </p>
          <a href=''>Reserve a table</a>
        </header>

        <figure className='col-6'>
          <img src={imgLitteLemon} alt='' className='img-hero' />
        </figure>
      </section>
    </article>
  )
}
