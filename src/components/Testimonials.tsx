import React from 'react'
import { TestimonialSnipet } from './TestimonialSnipet'

export const Testimonials = () => {
  return (
    <>
      <section className='row container'>
        <article className='col-3'>
          <TestimonialSnipet />
        </article>
        <article className='col-3'>
          <TestimonialSnipet />
        </article>
        <article className='col-3'>
          <TestimonialSnipet />
        </article>
        <article className='col-3'>
          <TestimonialSnipet />
        </article>
      </section>
    </>
  )
}
