import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/store";

interface DataState {
  value: number;
}

const initialState: DataState = {
  value: 0,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = dataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.data.value;

export default dataSlice.reducer;
