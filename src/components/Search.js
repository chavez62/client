import React, { useState } from 'react';

const Search = ({ setSearchTerm }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search posts..."
        className="w-full p-2 border rounded mt-1 border-purple-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition duration-300"
      />
    </div>
  );
};

export default Search;
