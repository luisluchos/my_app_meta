import React from 'react'

interface Props {
  bookingData: {
    date: string
    time: string
    guests: number
    occasion: string
    name: string
  }
}

export const ConfirmedBooking = ({ bookingData }: Props) => {
  const bookingId = Math.floor(Math.random() * 1000000000)

  return (
    <div
      style={{
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5em'
      }}
    >
      <h1
        style={{
          fontSize: '2.5em',
          marginBottom: '0.5em'
        }}
        className='color-primary'
      >
        Booking has been confirmed
      </h1>

      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '2em',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'left',
          width: '300px'
        }}
      >
        <h2
          style={{
            fontSize: '1.5em',
            borderBottom: '2px solid #333',
            paddingBottom: '0.5em',
            marginBottom: '1em'
          }}
        >
          Booking details {bookingData.name}
        </h2>
        <p>
          {' '}
          <strong>BookingID: </strong>
          {bookingId}
        </p>
        <p>
          <strong>Date:</strong> {bookingData.date}
        </p>
        <p>
          <strong>Time:</strong> {bookingData.time}
        </p>
        <p>
          <strong>Guests:</strong> {bookingData.guests}
        </p>
        <p>
          <strong>Occasion:</strong> {bookingData.occasion}
        </p>
      </div>
    </div>
  )
}
