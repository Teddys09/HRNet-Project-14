import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice of state for new employee data and actions to add user data
const newEmployeeSlice = createSlice({
  name: 'newEmployee',
  initialState: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  reducers: {
    addFirstName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});

export const { addFirstName } = newEmployeeSlice.actions;

export const store = configureStore({
  reducer: {
    newEmployee: newEmployeeSlice.reducer,
  },
});
