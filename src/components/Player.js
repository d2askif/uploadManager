import React from 'react';
import { Player } from 'video-react';

export default (props) => {
  return (
    <div
      style={{
        height: 300,
        width: 300,
      }}
    >
      <Player
        poster={'http://www.fillmurray.com/200/300'}
        playsInline
        src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      />
    </div>
  );
};
