import React from 'react';
import styles from './playlist.module.css';
import TrackList from '../Tracklist/TrackList';

function Playlist({ playlistTracks, playlistName, onRemove, onNameChange, onSave }) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className={styles.Playlist}>
      <input 
        value={playlistName} 
        onChange={handleNameChange} 
      />
      <TrackList 
        tracks={playlistTracks} 
        onRemove={onRemove} 
        isRemoval={true} 
      />
      <button className={styles.SaveButton} onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
