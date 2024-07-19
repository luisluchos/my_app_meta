// En tu archivo de prueba, por ejemplo Main.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Main'; // Asegúrate de importar Main y availableTimesReducer desde el archivo correcto
import { availableTimesReducer, initialState } from '../reducers/AvailableTimesReducer';

// Mockear los componentes HomePage y BookingPage para evitar errores de importación de imágenes
jest.mock('../pages/HomePage', () => ({
  HomePage: () => <div data-testid="mocked-homepage">Mocked HomePage</div>,
}));

jest.mock('../pages/BookingPage', () => ({
  BookingPage: () => <div data-testid="mocked-bookingpage">Mocked BookingPage</div>,
}));

describe('Main Component', () => {
  const renderWithRouter = (ui, { route = '/test' } = {}) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/*" element={ui} />
        </Routes>
      </MemoryRouter>
    );
  };

  const initialState = {
    availableTimes: [],
    availableTimeSelected: '',
    selectedDate: '',
  };

  const times = ['14:00', '18:00', '19:00'];
  const updateAvailableTimes = ['13:00', '15:00', '16:00'];

  test('initializeTimes initializes availableTimes correctly', () => {
    const { container } = renderWithRouter(<Main />);

    // Verificar que el componente Main se haya renderizado correctamente
    const mainComponent = container.querySelector('main');
    expect(mainComponent).toBeInTheDocument();

    // Simular la acción de dispatch que se usa en Main
    const stateAfterAction = availableTimesReducer(initialState, {
      type: 'AVAILABLE_TIMES',
      payload: times,
    });

    // Verificar que availableTimes en el estado se haya actualizado correctamente
    expect(stateAfterAction.availableTimes).toEqual(times);
  });

  test('update availableTimes correctly', () => {
    const { container } = renderWithRouter(<Main />);

    // Verificar que el componente Main se haya renderizado correctamente
    const mainComponent = container.querySelector('main');
    expect(mainComponent).toBeInTheDocument();

    // Simular la acción de dispatch que se usa en Main
    const stateAfterAction = availableTimesReducer(initialState, {
      type: 'UPDATE_AVAILABLE_TIMES',
      payload: updateAvailableTimes,
    });

    // Verificar que availableTimes en el estado se haya actualizado correctamente
    expect(stateAfterAction.availableTimes).toEqual(updateAvailableTimes);
  });
});
