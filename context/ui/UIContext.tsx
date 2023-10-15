"use client";

import { createContext } from "react";

interface ContextProps {
  isSideMenuOpen: boolean;
  isSmallScreen: boolean;

  toggleSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
