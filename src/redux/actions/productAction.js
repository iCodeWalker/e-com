import { LIST_PRODUCTS, SET_LIST_PRODUCTS } from "./actionTypes";

export const listProducts = () => {
  // actual problem while doing api request inside action is that the action requires an object to be
  // returned from it. One required parameter is type in it.

  // But while making an api request it returns a promise that is not allowed.
  // and by the time when the promise is resolved and have returned a value, the action is already completed
  // and have passed into reducer.

  // to resolve this problem we can use middlewares, like redux-thunk or redux-saga

  console.warn("product list action called");

  //   let data2 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   let response = data2.json();

  return {
    type: LIST_PRODUCTS,
  };
};
