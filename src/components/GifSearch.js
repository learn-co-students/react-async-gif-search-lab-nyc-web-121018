import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    query: ''
  };

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.query);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Search Term:</label>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.query}
          />
          <input type='submit' value='Find Gifs' />
        </form>
      </div>
    );
  }
}
