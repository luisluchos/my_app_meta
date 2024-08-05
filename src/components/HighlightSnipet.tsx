import React from 'react'

export const HighlightSnipet = ({ img, title, description, price }) => {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <figure style={{ flexShrink: 0 }}>
        <img src={img} alt={title} className='img-highLight' />
      </figure>
      <div style={{ flex: '1 0 auto' }}>
        <header style={{ padding: '15px', display: 'flex' }}>
          <h3 style={{ textAlign: 'left' }} className='col-6'>
            {title}
          </h3>
          <p style={{ textAlign: 'right', color: 'orange' }} className='col-6'>
            {price}
          </p>
        </header>
        <section>
          <p style={{ textAlign: 'left', padding: '15px' }}>{description}</p>
        </section>
      </div>
      <footer style={{ marginTop: 'auto', padding: '15px' }}>
        <p>Order delivery</p>
      </footer>
    </article>
  )
}
