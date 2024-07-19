import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { BookingPage } from '../pages/BookingPage'
import { availableTimesReducer, initialState } from '../reducers/AvailableTimesReducer';

export const Main = () => {
  const [availableTimesState, dispatch] = useReducer(availableTimesReducer, initialState)

  const times = ['14:00', '18:00', '19:00', '20:00', '21:00', '23:00']

  const updateSelectedTimes =['12:00', '13:00', '23:00']

  /**
   * @description Update the available times
   * @param times
   */
  const updateTimes = (selectedDate: string[]) => {
    dispatch({ type: 'UPDATE_AVAILABLE_TIMES', payload: updateSelectedTimes })
  }

  /**
   * @description Initialize the available times
   * @param times
   */
  const initializeTimes = (times: string[]) => {
    dispatch({ type: 'AVAILABLE_TIMES', payload: times })
  }

  useEffect(() => {
    initializeTimes(times)
  }, [])

  return (
    <main className=''>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/booking'
          element={<BookingPage availableTimes={availableTimesState.availableTimes} />}
        />
      </Routes>
    </main>
  )
}
