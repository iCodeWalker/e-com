import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../actions/actionTypes";

// reducers contain raw data that needs to be stored inside the store.

// no operation is done on data inside reducer.

// state is returned from the reducers to redux-store.

export const cartDataReducer = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.log("Reducer called", action);
  //     return action.payload;
  //   }
  // else {
  //     return "no action matched";
  //   }
  // when we have multiple conditions (more than 3-4) using if/else conditions would not be good and not be treated
  // as standardized. In such condtions it is good to switch instead of if/else.

  switch (action.type) {
    case ADD_TO_CART:
      return [...data, action.payload];
    case REMOVE_FROM_CART:
      // data.length = data.length ? data.length - 1 : 0;
      const remainingProduct = data.filter(
        (item) => item.id !== action.payload
      );
      return [...remainingProduct];
    case CLEAR_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};
