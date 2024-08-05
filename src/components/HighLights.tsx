import React from 'react'
import { HighlightSnipet } from './HighlightSnipet'
import greekSalad from '../assets/greek_salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon_dessert.jpg'

const highlights = [
  {
    img: greekSalad,
    title: 'Greek Salad',
    description:
      'A fresh and vibrant salad featuring ripe tomatoes, crisp cucumbers, Kalamata olives, and creamy feta cheese, tossed in a light olive oil and lemon dressing.',
    price: '$10.00'
  },
  {
    img: bruchetta,
    title: 'Bruschetta',
    description:
      'Toasted bread slices topped with a flavorful mixture of diced tomatoes, garlic, basil, and a drizzle of balsamic reduction.',
    price: '$12.00'
  },
  {
    img: lemonDessert,
    title: 'Lemon Dessert',
    description:
      'A tangy and refreshing dessert made with zesty lemon, creamy filling, and a buttery crust, perfect for a light and satisfying finish to your meal.',
    price: '$7.00'
  }
]

export const HighLights = () => {
  return (
    <section className='container'>
      <section className='row' style={{ marginTop: '60px' }}>
        <h1 className='col-6 color-primary' style={{ textAlign: 'left' }}>
          This weeks specials!
        </h1>
        <p></p>
      </section>
      <section className='row container'>
        {highlights.map((highlight, index) => (
          <article className='col-4 card' key={index}>
            <HighlightSnipet {...highlight} />
          </article>
        ))}
      </section>
    </section>
  )
}
