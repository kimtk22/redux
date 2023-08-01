import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { num: 0 },
  reducers: {
    increase: (state, action) => {
      state.num = state.num + action.payload;
    },
  },
});
