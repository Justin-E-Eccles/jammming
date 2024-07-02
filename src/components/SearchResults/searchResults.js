import React from 'react';
import styles from './searchResults.module.css';
import Track from '../Track/Track';

function SearchResults({ results }) {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <div className={styles.TrackList}>
        {results.map(track => (
          <Track key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
