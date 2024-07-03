import React, { useState } from 'react';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/playlist';
import SearchBar from '../SearchBar/searchBar';
import './App.css';

function App() {

  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' }
  ]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const handleSearch = (term) => {
    console.log('Search term: ', term);
    setSearchResults([...searchResults, term]); // This is just a placeholder
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    console.log('Saving playlist:', playlistName, trackUris);
    // Implement saving to Spotify
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming App</h1>
      </header>
      <main className="main-app">
      <SearchBar onSearch={handleSearch}/>
      <SearchResults results={searchResults} />
      <Playlist 
          playlistTracks={playlistTracks} 
          playlistName={playlistName}
          onRemove={removeTrack} 
          onNameChange={updatePlaylistName} 
          onSave={savePlaylist} 
        />

      </main>
     
    </div>
  );
}

export default App;
