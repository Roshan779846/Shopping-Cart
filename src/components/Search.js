import React from "react";

/**
 * Displays a search input to filter products.
 *
 * @param {string} searchQuery - The current search query.
 * @param {Function} setSearchQuery - Function to set the search query.
 */
const Search = ({ searchQuery, setSearchQuery }) => (
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search products..."
    className="border p-2 rounded-lg mb-4 w-full"
  />
);

export default Search;
