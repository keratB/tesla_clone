import { configureStore } from '@reduxjs/toolkit';
import carReduce from "../features/car/carSlice"

export const store = configureStore({
  reducer: {
   car: carReduce
  },
});
