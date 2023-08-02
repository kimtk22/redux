import { createSlice } from "@reduxjs/toolkit";
import { asyncUserFetch } from "../thunk";

const initialState = {};
export const userSlice = createSlice({
  name: "userSlice",
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
  extraReducers: (builder) => {
    builder.addCase(asyncUserFetch.pending, (state, action) => {});

    builder.addCase(asyncUserFetch.fulfilled, (state, action) => {
      const { username, email, address, phone, company } = action.payload;
      state.name = username;
      state.email = email;
      state.address = address.street;
      state.phone = phone;
      state.company = company.name;
    });

    builder.addCase(asyncUserFetch.rejected, (state, action) => {});
  },
});
