import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CarouselState {
  index: number;
  length: number;
  /** Le défilement s'arrête au survol, au focus clavier, ou si l'utilisateur
   *  a demandé à réduire les animations. */
  paused: boolean;
  /** Sens du dernier déplacement : sert à orienter la transition. */
  direction: 1 | -1;
}

const initialState: CarouselState = {
  index: 0,
  length: 0,
  paused: false,
  direction: 1,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setLength(state, action: PayloadAction<number>) {
      state.length = action.payload;
      if (state.index >= action.payload) state.index = 0;
    },
    next(state) {
      if (state.length === 0) return;
      state.index = (state.index + 1) % state.length;
      state.direction = 1;
    },
    prev(state) {
      if (state.length === 0) return;
      state.index = (state.index - 1 + state.length) % state.length;
      state.direction = -1;
    },
    goTo(state, action: PayloadAction<number>) {
      if (action.payload === state.index) return;
      state.direction = action.payload > state.index ? 1 : -1;
      state.index = action.payload;
    },
    setPaused(state, action: PayloadAction<boolean>) {
      state.paused = action.payload;
    },
  },
});

export const { setLength, next, prev, goTo, setPaused } = carouselSlice.actions;
export default carouselSlice.reducer;
