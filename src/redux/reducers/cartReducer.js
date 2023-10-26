import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  CART_ITEMS,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  WISHLIST_ITEMS,
} from "../../services/types";

const initialState = {
  cartItems: [],
  wishlist: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case WISHLIST_ITEMS:
      return {
        ...state,
        wishlist: action.payload,
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
