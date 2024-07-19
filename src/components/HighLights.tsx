import React from 'react'
import { HighlightSnipet } from './HighlightSnipet'
import greekSalad from '../assets/greek_salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon_dessert.jpg'

const highlights = [
  {
    img: greekSalad,
    title: 'Greek Salad',
    description: 'Fresh salad with tomatoes, cucumbers, olives, and feta cheese.',
    price: '$10.00'
  },
  {
    img: bruchetta,
    title: 'Greek Salad',
    description: 'Fresh salad with tomatoes, cucumbers, olives, and feta cheese.',
    price: '$10.00'
  },
  {
    img: lemonDessert,
    title: 'Greek Salad',
    description: 'Fresh salad with tomatoes, cucumbers, olives, and feta cheese.',
    price: '$10.00'
  }
]

export const HighLights = () => {
  return (
    <section className='container'>
      <section className='row'>
        <h1 className='col-6' style={{ textAlign: 'left' }}>
          This weeks specials!
        </h1>
        <p></p>
      </section>
      <section className='row container'>
        {highlights.map((highlight, index) => (
          <article className='col-4' key={index}>
            <HighlightSnipet {...highlight} />
          </article>
        ))}
      </section>
    </section>
  )
}
