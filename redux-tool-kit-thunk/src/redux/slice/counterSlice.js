import { createSlice } from '@reduxjs/toolkit';
import { asyncUpFetch } from '../thunk';

const initialState = {
  count: 0,
  status: 'Welcome',
};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: initialState,
  reducers: {
    increament: (state) => {
      state.count = state.count + 1;
    },
    set: (state, action) => {
      state.count = action.payload || 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = 'Loding';
    });

    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.count = action.payload;
      state.status = 'complete';
    });

    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});
