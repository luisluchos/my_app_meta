import React from 'react'
import { TestimonialSnipet } from './TestimonialSnipet'

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#f9f9f9',
    flex: 1, // Ensures that all testimonials expand to fill the same height
    display: 'flex',
    justifyContent: 'space-between', // Align items within the snippet
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px'
  },
  star: {
    fontSize: '20px',
    color: '#f5c518', // Color for filled star
    marginRight: '4px',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px'
  },
  profileImg: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '8px'
  },
  testimonial: {
    fontSize: '16px',
    color: '#333',
    flex: 1, // Allows the testimonial text to grow and fill space
  }
};

const testimonials = [
  {
    rating: 5,
    url: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
    testimonial:
      'The ambiance and food quality at this restaurant are unmatched. The service was outstanding, and the attention to detail in every dish was remarkable. Highly recommended!',
    profileImg: 'https://randomuser.me/api/portraits/women/1.jpg', // Profile picture URL
    name: 'Jane Doe'
  },
  {
    rating: 4,
    url: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
    testimonial:
      'A wonderful dining experience with a warm and welcoming atmosphere. The flavors were well-balanced, and the staff was friendly and attentive. Will definitely come back.',
    profileImg: 'https://randomuser.me/api/portraits/men/1.jpg', // Profile picture URL
    name: 'John Smith'
  },
  {
    rating: 3,
    url: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
    testimonial:
      'Good food and decent service. However, the wait times were a bit longer than expected, and the menu had limited options. Still a pleasant experience overall.',
    profileImg: 'https://randomuser.me/api/portraits/women/2.jpg', // Profile picture URL
    name: 'Emily Jones'
  },
  {
    rating: 2,
    url: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
    testimonial:
      'The experience was underwhelming. The food was average, and the service did not meet expectations. Hopefully, it was just an off night for them.',
    profileImg: 'https://randomuser.me/api/portraits/men/2.jpg', // Profile picture URL
    name: 'Michael Brown'
  }
]

export const Testimonials = () => {
  return (
    <>
      <article
        className='bg-primary '
        style={{
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <section className='row container'>
          {testimonials.map((testimonial, index) => (
            <article className='col-3' key={index} style={{ display: 'flex' }}>
              <TestimonialSnipet {...testimonial} />
            </article>
          ))}
        </section>
      </article>
    </>
  )
}
