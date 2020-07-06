import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router";

class PostsShow extends Component {
  componentDidMount() {
    if (this.props.post) {
      return;
    }
    const { id } = this.props.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { post } = this.props;

    if (post == null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories} </h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
