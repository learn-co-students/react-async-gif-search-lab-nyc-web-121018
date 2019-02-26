import React, { Component, Fragment } from "react";

class GifSearch extends Component {
  state = {
    search: "search"
  };

  updateSearchState = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateSearchFromInput(this.state.search);
  };

  render() {
    return (
      <Fragment>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "block", float: "right", marginRight: "20px" }}
        >
          <input
            value={this.state.search}
            type="text"
            name="search"
            placeholder="search"
            onChange={this.updateSearchState}
          />
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    );
  }
}

export default GifSearch;
