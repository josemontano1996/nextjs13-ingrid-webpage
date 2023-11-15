import { onToggleSideMenu } from "@/redux/slices/uiSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isSideMenuOpen } = useSelector((state: RootState) => state.ui);

  const toggleSideMenu = () => {
    dispatch(onToggleSideMenu());
  };
  return {
    //Values
    isSideMenuOpen,

    //Methods
    toggleSideMenu,
  };
};
