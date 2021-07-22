import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../redux-store/actions/postActions";

const PostForm = (props) => {
  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // call createPost action
    props.createPost(post);
    setPost({
      title: "",
      body: ""
    });
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const { title, body } = post;

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="body">Post Body</label>
          <input
            id="body"
            name="body"
            type="text"
            value={body}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(null, { createPost })(PostForm);
