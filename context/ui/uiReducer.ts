"use client";

import { UIState } from "./UIProvider";

type UIActionType = { type: "UI-ToggleMenu" } | { type: "UI-Is small screen" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI-ToggleMenu":
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
    case "UI-Is small screen":
      return {
        ...state,
        isSmallScreen: true,
      };
    default:
      return state;
  }
};
