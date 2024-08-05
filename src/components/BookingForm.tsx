import { useState } from 'react'

import './bookingForm.css'

interface Props {
  availableTimes: string[]
  fetchAvailableTimes: (date: Date) => void
  submitForm: (data: any) => void
}

export const BookingForm = ({ availableTimes, fetchAvailableTimes, submitForm }: Props) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const [time, setTime] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (time === '') {
      // Manejo de error si no se ha seleccionado una hora
      alert('Please select a time.')
      return
    }
    const formData = {
      date,
      guests,
      occasion,
      time,
      name: e.target.name.value,
      email: e.target.email.value
    }
    submitForm(formData)
    console.log(formData)
  }

  const handleDateChange = (e: any) => {
    const date = new Date(e.target.value)
    setDate(e.target.value)
    fetchAvailableTimes(date)
  }

  return (
    <div className='container margin-mobile'>
      <h1 className='color-primary'>Book Now</h1>
      <form className='color-primary' style={{ textAlign: 'left' }} onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-6'>
            <label htmlFor='res-date' id='res-date-label'>
              Choose date
            </label>
            <input
              type='date'
              id='res-date'
              aria-labelledby='res-date-label'
              onChange={handleDateChange}
              defaultValue={date}
              aria-label='On Click'
            />
          </div>
          <div className='col-6'>
            <label htmlFor='res-time' id='res-time-label'>
              Choose time
            </label>
            <select
              id='res-time'
              aria-labelledby='res-time-label'
              onChange={(e) => setTime(e.target.value)}
              required
              aria-required='true'
              aria-label='On Click'
            >
              <option value=''>Select hour</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className='col-6'>
            <label htmlFor='guests' id='guests-label'>
              Number of guests
            </label>
            <input
              type='number'
              placeholder='1'
              min='1'
              max='10'
              id='guests'
              aria-labelledby='guests-label'
              defaultValue={2}
              onChange={(e) => setGuests(+e.target.value)}
              aria-label='On Click'
            />
          </div>
          <div className='col-6'>
            <label htmlFor='occasion' id='occasion-label'>
              Occasion
            </label>
            <select
              id='occasion'
              aria-labelledby='occasion-label'
              onChange={(e) => setOccasion(e.target.value)}
              aria-label='On Click'
            >
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
            </select>
          </div>
          <div className='col-6'>
            <label htmlFor='name' id='name-label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              aria-labelledby='name-label'
              required
              aria-required='true'
              aria-label='On Click'
            />
          </div>
          <div className='col-6'>
            <label htmlFor='email' id='name-email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              aria-labelledby='email-label'
              required
              aria-required='true'
              aria-label='On Click'
            />
          </div>
        </div>
        <div
          className=''
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '40px'
          }}
        >
          <input
            type='submit'
            value='Make Your reservation'
            aria-label='On Click'
            className='type-submit'
          />
        </div>
      </form>
    </div>
  )
}
