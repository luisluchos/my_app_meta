// reducers/availableTimesReducer.ts
type StateType = {
  availableTimes: string[]
  availableTimeSelected: string
  selectedDate: string
}

type ActionType = {
  type: 'SELECT_TIME_AVAILABLE' | 'AVAILABLE_TIMES' | 'UPDATE_AVAILABLE_TIMES'
  payload: string | string[]
}

export const initialState: StateType = {
  availableTimes: ['12:00', '21:00'],
  availableTimeSelected: '',
  selectedDate: ''
}

export const availableTimesReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'SELECT_TIME_AVAILABLE':
      return { ...state, availableTimeSelected: action.payload as string }
    case 'AVAILABLE_TIMES':
      return { ...state, availableTimes: action.payload as string[] }
    case 'UPDATE_AVAILABLE_TIMES':
      return { ...state, availableTimes: action.payload as string[] }
    default:
      return state
  }
}
