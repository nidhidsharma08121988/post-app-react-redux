import { combineReducers } from "redux";
import postReducer from "./postReducer";

// exports rootReducer which is combination of all reducers
export default combineReducers({
  posts_reducer: postReducer
});
