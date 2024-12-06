import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  month: dayjs().month(),
  year: dayjs().year(),
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    updateMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
    },
    updateYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
  },
});

export const { updateMonth, updateYear } = calendarSlice.actions;

export default calendarSlice.reducer;
