import React from 'react';

function GifList(props) {
  console.log(props);
  return (
    <ul>
      {props.gifs.map(gif => (
        <li>
          <img src={gif.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
