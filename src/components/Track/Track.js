import React from 'react';
import styles from './track.module.css';

const Track = ({ track }) => {
  // Check if 'track' exists and has the necessary properties
  if (!track || !track.name || !track.artist || !track.album) {
    return null; // Or you can return a placeholder or loading state
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action">+ Add to Playlist</button>
    </div>
  );
};

export default Track;