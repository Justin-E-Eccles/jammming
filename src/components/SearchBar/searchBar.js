import React, { useState } from 'react';
import styles from  './searchBar.module.css';

function SearchBar(props) {

    const [term, setTerm] = useState('');
   
    const handleInputChange = (event) => {
        setTerm(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(term);
        setTerm('');
    };
    return (
        <form className="SearchBar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for tracks..."
          value={term}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
};

export default SearchBar;