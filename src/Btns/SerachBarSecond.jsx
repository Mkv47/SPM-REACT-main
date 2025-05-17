import React from 'react';
import { BsSearch } from 'react-icons/bs'; // Bootstrap search icon

const SearchBarSecond = () => {
  return (
    <div className="d-flex align-items-center bg-light px-3 py-2 rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
      <BsSearch className="text-secondary" />
      <input
        type="text"
        className="form-control border-0 bg-transparent ms-2"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBarSecond;
