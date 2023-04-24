import { takeEvery, put } from "redux-saga/effects";
import { LIST_PRODUCTS, SET_LIST_PRODUCTS } from "./actionTypes";

function* getProducts() {
  //------ call api here -------

  let data = yield fetch("http://localhost:3000/product");
  data = yield data.json();
  console.log("call api data", data);

  yield put({ type: SET_LIST_PRODUCTS, data });
}

function* SagaHandler() {
  yield takeEvery(LIST_PRODUCTS, getProducts);
}

export default SagaHandler;
