import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1" }),
  tagTypes: ["Count"],
  endpoints: (builder) => ({
    getCount: builder.query({
      query: ({ name }) => `/count/${name}`,
      providesTags: (result, error, arg) => [{ type: "Count", id: arg.name }],
    }),
    setCount: builder.mutation({
      query: ({ name, value }) => ({
        url: `/count/${name}?value=${value}`,
        method: "POST",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Count", id: arg.name },
      ],
    }),
  }),
});
