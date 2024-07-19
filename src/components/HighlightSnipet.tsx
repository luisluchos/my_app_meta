import React from 'react'

export const HighlightSnipet = ({ img, title, description, price }) => {
  return (
    <>
      <figure>
        <img src={img} alt='imgHighlight' className='img-highLight' />
        <figcaption>{title}</figcaption>
      </figure>
      <p>{description}</p>
      <p>{price}</p>
    </>
  )
}
