import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});
