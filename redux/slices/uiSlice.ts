import { createSlice } from "@reduxjs/toolkit";

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
    onToggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onToggleSideMenu } = uiSlice.actions;

export default uiSlice.reducer;
