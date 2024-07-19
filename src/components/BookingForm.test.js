import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from 'react';
import { BookingForm } from './BookingForm'; // Asegúrate de que estás importando desde la ruta correcta

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

