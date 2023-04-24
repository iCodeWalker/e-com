import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";

// actions are used to take data from react side of the application and give it to reducer.
// all operations and processing on the data is done in the action.

// actions are required to return an object with the required type property.

export const addToCart = (data) => {
  console.warn("add to cart action called", data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeFromCart = (data) => {
  console.warn("remove from cart action called", data);
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};

export const clearCart = () => {
  console.warn("clear cart action called");
  return {
    type: CLEAR_CART,
  };
};
