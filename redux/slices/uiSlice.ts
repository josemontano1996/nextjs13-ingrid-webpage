import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUiState {
  isSideMenuOpen: boolean;
  isSmallScreen: boolean;
}

const initialState: IUiState = {
  isSideMenuOpen: false,
  isSmallScreen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideMenu } = uiSlice.actions;

export default uiSlice.reducer;
