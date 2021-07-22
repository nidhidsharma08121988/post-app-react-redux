import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// because the file is index.js we don't even need to specify the file from which to import only directory is fine
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

// to get redux extension
/*
import {compose} from 'redux'
replace applyMiddleware(...middleware) with
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
*/
export default store;
