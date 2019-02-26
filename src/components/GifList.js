import React, { Fragment } from "react";

const GifList = props => {
  const mapGifList = () => {
    return props.gifs.map(gif => {
      return (
        <Fragment key={gif.id}>
          <li>
            <img src={gif.images.original.url} alt="gif" />
          </li>
          <br />
          <br />
        </Fragment>
      );
    });
  };

  return <ul>{mapGifList()}</ul>;
};

export default GifList;
