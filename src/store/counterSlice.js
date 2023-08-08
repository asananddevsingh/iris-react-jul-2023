import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    message: "Hello From Counter",
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    addByNumber: (state, action) => {
      state.count += Number(action.payload) || 10;
    },
  },
});

export const counterActions = { ...counterSlice.actions };
export default counterSlice;
