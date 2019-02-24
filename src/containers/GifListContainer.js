import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  state = {
    gifs: []
  };

  // componentDidMount(query) {
  //   console.log(query);
  //   fetch(
  //     `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
  //   )
  //     .then(r => r.json())
  //     .then(gifs => {
  //       gifs.data.length = 3;
  //       this.setState({
  //         gifs: gifs.data
  //       });
  //     });
  // }

  handleSubmit = query => {
    // event.preventDefault();
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(r => r.json())
      .then(gifs => {
        gifs.data.length = 3;
        this.setState({
          gifs: gifs.data
        });
      });
  };

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
