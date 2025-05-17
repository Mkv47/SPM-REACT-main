import React, { useState, useEffect } from 'react';

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {

    if (searchValue === '') {
      // If searchValue is empty, return the full list
      props.onSearchResult(props.List || []);
    } else {
      // Filter the list based on the searchValue
      const filteredList = (props.List || []).filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filteredList);
      props.onSearchResult(filteredList);
    }
  }, [searchValue, props.List]);

  return (
    <div
      className="searchbar"
      style={{
        position: 'relative',
        display: 'inline-block',
        backgroundColor: '#d3d3d3',
        borderRadius: '4px',
        padding: '5px',
        transition: 'background-color 0.3s ease',
      }}
    >
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{
          padding: '10px 40px 10px 10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          width: '200px',
          transition: 'all 0.3s ease',
        }}
      />
      <i
        className="bi bi-search"
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: '#ccc',
          transition: 'color 0.3s ease',
        }}
      ></i>
    </div>
  );
}