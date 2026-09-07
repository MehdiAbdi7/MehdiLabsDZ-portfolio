import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  menuOpen: boolean;
}

const initialState: UiState = { menuOpen: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMenu(state) {
      state.menuOpen = true;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
    setMenu(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
  },
});

export const { openMenu, closeMenu, setMenu } = uiSlice.actions;
export default uiSlice.reducer;
