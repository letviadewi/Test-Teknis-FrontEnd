import {thunk} from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";

let middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
}

export default function configStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return { store };
}
