"use client";

import { FC, ReactNode, useEffect, useReducer } from "react";
import { smViewport } from "@/consts";
import { uiReducer } from "./uiReducer";
import { UIContext } from "./UIContext";


export interface UIState {
  isSideMenuOpen: boolean;
  isSmallScreen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
  isSmallScreen: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= smViewport) {
      dispatch({ type: "UI-Is small screen" });
      return;
    }
  }, []);

  const toggleSideMenu = () => {
    dispatch({ type: "UI-ToggleMenu" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        toggleSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
