import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice of state for new employee data and actions to add user data
const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employee: [],
  },
  reducers: {
    addEmployee(state, action) {
      state.employee.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
});
