// store can only connect to one reducer, so we use rootReducer for combining different reducers,
// and connecting it with store.

import { combineReducers } from "redux";
import { cartDataReducer } from "./reducer";
import { productReducer } from "./productReducer";

export default combineReducers({
  cartData: cartDataReducer,
  productData: productReducer,
});
