import React from 'react'

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
    justifyContent: 'space-between' // Align items within the snippet
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px'
  },
  star: {
    fontSize: '20px',
    color: '#f5c518', // Color for filled star
    marginRight: '4px'
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
    flex: 1 // Allows the testimonial text to grow and fill space
  }
}

export const TestimonialSnipet = ({ rating, url, testimonial, name }) => {
  const StarRating = ({ rating }) => {
    const stars = Array(5)
      .fill(false)
      .map((_, index) => index < rating)
    return (
      <div style={styles.ratingContainer}>
        {stars.map((filled, index) => (
          <span key={index} style={styles.star}>
            {filled ? '★' : '☆'}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <StarRating rating={rating} />
      <div style={styles.profile}>
        <img src={url} alt={`${name}'s profile`} style={styles.profileImg} />
        <figcaption>{name}</figcaption>
      </div>
      <p style={styles.testimonial}>{testimonial}</p>
    </div>
  )
}
