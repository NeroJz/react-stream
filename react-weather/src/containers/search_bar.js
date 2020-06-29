import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange = ({ target }) => {
    this.setState({
      term: target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange}
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
