import React from 'react';
import styles from './tracklist.module.css';
import Track from '../Track/Track';

function TrackList({ tracks, onRemove, isRemoval }) {
  return (
    <div className={styles.TrackList}>
      {tracks.map(track => (
        <Track 
          key={track.id} 
          track={track} 
          onRemove={onRemove} 
          isRemoval={isRemoval} 
        />
      ))}
    </div>
  );
}

export default TrackList;
