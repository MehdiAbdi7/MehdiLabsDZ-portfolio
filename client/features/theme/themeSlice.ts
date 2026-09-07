import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

interface ThemeState {
  mode: Theme;
  /** Passe à true une fois la valeur réelle lue dans le DOM côté client.
   *  Évite d'appliquer le thème pendant l'hydratation et de provoquer
   *  une différence serveur / client. */
  hydrated: boolean;
}

const initialState: ThemeState = { mode: "light", hydrated: false };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    hydrateTheme(state, action: PayloadAction<Theme>) {
      state.mode = action.payload;
      state.hydrated = true;
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.mode = action.payload;
    },
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { hydrateTheme, setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
