import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomer } from '../../interfaces/ICustomer';
import { api } from '../../api/api';


interface OrderSate {
  customers: ICustomer[];
}

const initialState: OrderSate = {
  customers: [],
}

export const fetchCustomers = createAsyncThunk('order/fetchCustomers',
  async () => {
    const response = await api.getCustomers()
    return response.data
  }
)

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<ICustomer[]>) => {
      state.customers = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.customers = action.payload
    })
  },
})

//export const { } = orderSlice.actions

export default orderSlice.reducer