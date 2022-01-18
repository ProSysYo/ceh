import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './slices/orderSlice';
import authSlice from './slices/authSlice';


export const store = configureStore({
  reducer: {
    order: orderSlice,
    auth: authSlice, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch