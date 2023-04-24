import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

import createSagaMiddleware from "redux-saga";
import SagaHandler from "./actions/sagahandler";

// const dummyReducer = () => {
//   return 100;
// };

// const store = createStore(dummyReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(SagaHandler);
export default store;
