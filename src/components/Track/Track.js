import React from 'react';
import styles from './track.module.css';

function Track({ track }) {
  return (
    <div className={styles.Track}>
      <img src={track.album.images[0].url} alt={track.name} />
      <div className={styles.TrackInfo}>
        <h3>{track.name}</h3>
        <p>{track.artists[0].name}</p>
      </div>
    </div>
  );
}

export default Track;
