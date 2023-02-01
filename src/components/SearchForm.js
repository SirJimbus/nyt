import React from "react";
import { useState } from "react";

const SearchForm = ({ searchText }) => {
  const [text, SetText] = useState("everything");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Example: Fashion, Twitter"
          className="form-input"
          onChange={(e) => SetText(e.target.value)}
        />
        <button type="submit" className="form-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
