import React from 'react'
import { BookingForm } from '../components/BookingForm'
import { Hero } from '../components/Hero'

interface Props {
  availableTimes: string[]
  fetchAvailableTimes: (date: Date) => void
  submitForm: (data: any) => void
}

export const BookingPage = ({ availableTimes, fetchAvailableTimes, submitForm }: Props) => {
  return (
    <div>
      <Hero cta={false} />
      <BookingForm
        availableTimes={availableTimes}
        fetchAvailableTimes={fetchAvailableTimes}
        submitForm={submitForm}
      />
    </div>
  )
}
