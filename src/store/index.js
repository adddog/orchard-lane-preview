import "regenerator-runtime/runtime";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import rootSaga from "./sagas";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      app:reducer,
    }),
    compose(
      applyMiddleware(sagaMiddleware),
    )
  );
  sagaMiddleware.run(rootSaga);
  return store
};
