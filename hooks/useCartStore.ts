import { ICartProduct } from "@/interfaces/ICart";
import { onUpdateCart } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const useCartStore = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

   
  const updateCart =  (payload: ICartProduct) => {
    dispatch(onUpdateCart(payload));
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return {
    //Values
    cart,

    //Methods
    updateCart,
  };
};
