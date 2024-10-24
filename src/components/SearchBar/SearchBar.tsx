import React, { useState } from "react";
import toast from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!query.trim()) {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };
  return (
    <header>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          id="search-input"
          name="searchQuery"
          value={query}
          onChange={handleInputChange}
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
