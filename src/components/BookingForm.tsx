import { useState } from "react"

interface Props {
  availableTimes: string[]
}

export const BookingForm = ({ availableTimes }: Props) => {
  const [date, setDate] = useState('')

  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] =useState('')

  const HandleOnsubmit = (e: any) => {
    e.preventDefault()
    console.log(date, guests, occasion)
  }

  return (
    <div className='container'>
      <h1>Book Now</h1>
      <form className='row' style={{ textAlign: 'left' }}>
        <div className='col-6'>
          <label htmlFor='res-date'>Choose date</label>
          <input type='date' id='res-date' onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className='col-6'>
          <label htmlFor='res-time'>Choose time</label>
          <select id='res-time ' onChange={(e) => console.log(e.target.value)}>
            {availableTimes.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </select>
        </div>
        <div className='col-6'>
          <label htmlFor='guests'>Number of guests</label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            defaultValue={5}
            onChange={(e) => setGuests(+e.target.value)}
          />
        </div>
        <div className='col-6'>
          <label htmlFor='occasion'>Occasion</label>
          <select id='occasion' onChange={(e) => setOccasion(e.target.value)}>
            <option value={'Birthday'}>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>{' '}
        <input type='submit' value='Make Your reservation' onClick={HandleOnsubmit} />
      </form>
      {date} {guests} {occasion}
    </div>
  )
}
