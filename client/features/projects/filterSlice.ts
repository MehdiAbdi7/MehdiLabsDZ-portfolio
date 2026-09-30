import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Filter = "All" | "Full Stack" | "Frontend";

interface FilterState {
  active: Filter;
}

const initialState: FilterState = { active: "All" };

const filterSlice = createSlice({
  name: "projectFilter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Filter>) {
      state.active = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
