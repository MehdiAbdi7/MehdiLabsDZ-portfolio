"use client";

import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/store";
import { useTheme } from "@/features/theme/useTheme";

/** Monté une seule fois dans le layout : c'est lui qui applique le thème
 *  au <html> et le persiste. Il ne rend rien. */
function ThemeSync() {
  useTheme();
  return null;
}

export default function Providers({ children }: { children: ReactNode }) {
  // Le store est créé une fois par instance du navigateur, pas à chaque rendu.
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <ThemeSync />
      {children}
    </Provider>
  );
}
