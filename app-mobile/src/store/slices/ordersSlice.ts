/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice, SerializedError} from '@reduxjs/toolkit';
import {LoadingStatus} from '../../entities/LoadingStatus';
import {Order} from '../../entities/Order';
import { getOrders } from '../../services/getOrders';

export const LoadOrders = createAsyncThunk(
  'orders/loadingOrders',
  async (userId: string) => {
    const orders = await getOrders(userId);
    return orders;
  },
);

type OrdersState = {
  orders: Order[];
  status: LoadingStatus;
  error: SerializedError | null;
};

const initialState: OrdersState = {
  orders: [],
  status: LoadingStatus.idle,
  error: null,
};

const slice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(LoadOrders.pending, state => {
        state.status = LoadingStatus.loading;
        state.error = null;
      });
      builder.addCase(LoadOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.status = LoadingStatus.succeeded;
      });
      builder.addCase(LoadOrders.rejected, (state, action) => {
        state.status = LoadingStatus.failed;
        state.error = action.error;
      });
    },
});

export default slice.reducer;
