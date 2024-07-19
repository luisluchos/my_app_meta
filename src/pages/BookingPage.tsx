import React from 'react'
import { BookingForm } from '../components/BookingForm'
import { Hero } from '../components/Hero'

interface Props {
  availableTimes: string[]
}

export const BookingPage = ({ availableTimes }: Props) => {
  return (
    <div>
      <Hero />
      <BookingForm availableTimes={availableTimes} />
    </div>
  )
}
