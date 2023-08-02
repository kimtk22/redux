import { createAsyncThunk } from "@reduxjs/toolkit";

// "createAsyncThunk"는 비동기함수를 처리하는 action을 만들어준다
export const asyncUpFetch = createAsyncThunk(
  "counterSlice/asyncUpFetch",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return Math.floor(Math.random() * 100);
  }
);

export const asyncUserFetch = createAsyncThunk(
  "userSlice/asyncUserFetch",
  async () => {
    const ramdom = Math.floor(Math.random() * 10) || 1;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${ramdom}`
    );
    return await res.json();
  }
);
