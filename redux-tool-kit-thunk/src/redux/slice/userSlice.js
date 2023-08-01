import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
export const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { username, email, address, phone, company } = action.payload;
      state.name = username;
      state.email = email;
      state.address = address.street;
      state.phone = phone;
      state.company = company.name;
    },
  },
});
