import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter = 90;
    },
    zero(state) {
      state.counter = 0;
    },
    loaded(state) {
      state.counter = 100;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
