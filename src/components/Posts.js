import { useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../redux-store/actions/postActions";

const Posts = (props) => {
  // more close to component did mount
  useLayoutEffect(() => {
    props.fetchPosts();
  });
  // more close to compoenent will receive props (note the props.new_post dependency)
  useEffect(() => {
    if (props.new_post !== {}) props.posts.unshift(props.new_post);
    //eslint-disable-next-line
  }, [props.new_post]);

  const output = props.posts.map((post, index) => {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>Posts</h2>
      {props.new_post && (
        <div>
          <h3>{props.new_post.title}</h3>
          <p>{props.new_post.body}</p>
        </div>
      )}
      {output}
    </div>
  );
};

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  posts: state.posts_reducer.items,
  new_post: state.posts_reducer.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
