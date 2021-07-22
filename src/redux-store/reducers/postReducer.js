import { FETCH_POSTS, NEW_POST } from "../actions/types";

// initial state
const initialState = {
  // posts coming in from action
  items: [],
  // new post item
  item: {}
};

// reducer definition with action
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: [...action.payload]
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
export default postReducer;
