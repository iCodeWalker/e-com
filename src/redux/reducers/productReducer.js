import { SET_LIST_PRODUCTS } from "../actions/actionTypes";

export const productReducer = (data = [], action) => {
  switch (action.type) {
    // case LIST_PRODUCTS:
    //   console.log("list product reducer called");
    //   return [action.paylaod];
    case SET_LIST_PRODUCTS:
      console.log("set product list reducer called");
      return [...action.data];
    default:
      return data;
  }
};
