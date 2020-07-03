import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField = (field) => {
    const {
      meta: { touched, error },
    } = field;

    const className = `form-control ${touched && error ? "is-invalid" : ""}`;

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className={className} type="text" {...field.input} />
        <div className="text-danger">{touched ? error : ""}</div>
      </div>
    );
  };

  onSubmit = (values) => {
    this.props.createPost(values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          label="Title For Post"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter a category!";
  }

  if (!values.content) {
    errors.content = "Enter some contents please!";
  }

  return errors;
}

export default reduxForm({
  form: "PostsNewForm",
  validate,
})(connect(null, { createPost })(PostsNew));
