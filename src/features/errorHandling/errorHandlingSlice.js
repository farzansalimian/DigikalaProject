import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  errorMessage: null,
};

const errorHandlingSlice = createSlice({
  name: 'errorHandling',
  initialState,
  reducers: {
    showError: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearError: (state, action) => {
      state.errorMessage = null;
    },
  },
});

export const {showError, clearError} = errorHandlingSlice.actions;

export default errorHandlingSlice.reducer;
