"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { hydrateTheme, toggleTheme, type Theme } from "./themeSlice";

export const THEME_KEY = "mehdilabsdz-theme";

export function useTheme() {
  const dispatch = useAppDispatch();
  const { mode, hydrated } = useAppSelector((state) => state.theme);

  // 1) Au montage : on récupère la valeur déjà posée sur <html> par le
  //    script anti-flash du layout, et on la fait entrer dans le store.
  useEffect(() => {
    const current =
      (document.documentElement.dataset.theme as Theme | undefined) ?? "light";
    dispatch(hydrateTheme(current));
  }, [dispatch]);

  // 2) Ensuite seulement : le store devient la source de vérité.
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = mode;
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch {
      // Navigation privée : on ignore, le thème reste valable pour la session.
    }
  }, [mode, hydrated]);

  return { mode, toggle: () => dispatch(toggleTheme()) };
}
