import React from 'react'
import imgA from '../assets/image_a.jpg'
import imgB from '../assets/image_b.jpg'

import './About.css' // Import the CSS file

export const About = () => {
  return (
    <>
      <section className='color-primary'>
        <section className='row container'>
          <article className='col-6' style={{ textAlign: 'left' }}>
            <h1 className='color-primary-light'>Little Lemon</h1>
            <h2 className='color-gray'>Chicago</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
            <a href=''>Learn more</a>
          </article>
          <figure className='col-6 image-container'>
            <img src={imgA} alt='Little Lemon' className='image-first' />
            <img src={imgB} alt='Little Lemon' className='image-second' />
          </figure>
        </section>
      </section>
    </>
  )
}
