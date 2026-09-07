import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Filter = "Tous" | "Full Stack" | "Frontend";

interface FilterState {
  active: Filter;
}

const initialState: FilterState = { active: "Tous" };

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
