import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../dummyData.json";

const initialState = {
  data: dummyData,
  selectedDate: null,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    selectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { selectDate } = calendarSlice.actions;
export default calendarSlice.reducer;
