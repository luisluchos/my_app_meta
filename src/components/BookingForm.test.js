import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BookingForm } from './BookingForm';

const mockFetchAvailableTimes = jest.fn();
const mockSubmitForm = jest.fn();

run ('BookingForm', () => {
  const availableTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        fetchAvailableTimes={mockFetchAvailableTimes}
        submitForm={mockSubmitForm}
      />
    );
  });

  it('renders form elements correctly', () => {
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/make your reservation/i)).toBeInTheDocument();
  });


  it('submits the form when all fields are valid', () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-01' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '10:00 AM' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Anniversary' } });

    fireEvent.submit(screen.getByText(/make your reservation/i));
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2024-08-01',
      guests: 3,
      occasion: 'Anniversary',
      time: '10:00 AM'
    });
  });
});
