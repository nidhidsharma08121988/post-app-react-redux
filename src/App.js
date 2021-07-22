import "./styles.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import { Provider } from "react-redux";
import store from "./redux-store/store";

export default function App() {
  return (
    // wrap in provider which holds store
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}
