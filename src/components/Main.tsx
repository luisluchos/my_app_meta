import React, { useEffect, useReducer, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { BookingPage } from '../pages/BookingPage'
import { availableTimesReducer, initialState } from '../reducers/AvailableTimesReducer'
import { fetchAPI, submitAPI } from '../services/api'
import { ConfirmedBooking } from './ConfirmedBooking '

export const Main = () => {
  const [availableTimesState, dispatch] = useReducer(availableTimesReducer, initialState)
  const [bookingData, setBookingData] = useState({})

  const [date, setDate] = useState(new Date())

  const navigate = useNavigate()

  /**
   * @description Update the available times
   * @param times
   */
  const updateTimes = (availableTimes: string[]) => {
    dispatch({ type: 'UPDATE_AVAILABLE_TIMES', payload: availableTimes })
  }

  /**
   * @description Initialize the available times
   * @param times
   */
  const initializeTimes = (times: string[]) => {
    dispatch({ type: 'AVAILABLE_TIMES', payload: times })
  }

  useEffect(() => {
    console.log('useEffect')
    fetchAvailableTimes(date)
  }, [])

  /**
   * @description Fetch available times
   * @param date
   */

  const fetchAvailableTimes = (date: Date) => {
    const result = fetchAPI(date)
    console.log(result)
    updateTimes(result)
  }

  const submitForm = async (formData: any) => {
    const result = await submitAPI(formData)
    console.log('submitForm', result)

    if (result) {
      setBookingData(formData)
      navigate('/confirmed')
    } else {
      alert('Booking failed')
    }
  }

  console.log('reload', availableTimesState.availableTimes)

  return (
    <main className=''>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/confirmed' element={<ConfirmedBooking bookingData={bookingData} />} />
        <Route
          path='/booking'
          element={
            <BookingPage
              availableTimes={availableTimesState.availableTimes}
              fetchAvailableTimes={fetchAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
      </Routes>
    </main>
  )
}
