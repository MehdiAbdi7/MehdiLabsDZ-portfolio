import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/features/theme/themeSlice";
import carouselReducer from "@/features/carousel/carouselSlice";
import uiReducer from "@/features/ui/uiSlice";
import projectFilterReducer from "@/features/projects/filterSlice";

// Rappel : chaque nouveau slice doit être déclaré ici, sinon
// useAppSelector renvoie undefined et le composant plante au rendu.
export const makeStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
      carousel: carouselReducer,
      ui: uiReducer,
      projectFilter: projectFilterReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
