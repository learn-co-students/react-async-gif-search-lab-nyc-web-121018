import React, { Fragment } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    search: "all"
  };

  componentDidMount() {
    {
      fetch(
        `http://api.giphy.com/v1/gifs/search?q=${
          this.state.search
        }&api_key=dc6zaTOxFJmzC&rating=g`
      )
        .then(resp => resp.json())
        .then(gifs => {
          this.setState({ gifs: gifs.data.slice(0, 3) });
        });
    }
  }

  updateSearchFromInput = newSearch => {
    this.setState({ search: newSearch }, () => {
      fetch(
        `http://api.giphy.com/v1/gifs/search?q=${
          this.state.search
        }&api_key=dc6zaTOxFJmzC&rating=g`
      )
        .then(resp => resp.json())
        .then(gifs => {
          this.setState({ gifs: gifs.data.slice(0, 3) });
        });
    });
  };

  render() {
    console.log(this.state.search);
    return (
      <Fragment>
        <GifSearch updateSearchFromInput={this.updateSearchFromInput} />
        <GifList gifs={this.state.gifs} />
      </Fragment>
    );
  }
}

export default GifListContainer;
