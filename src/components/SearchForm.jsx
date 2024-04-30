// import React from "react";
import "../App.css";

function SearchForm() {
  return (
    <form id="search-form">
      <input
        id="search"
        type="text"
        placeholder="Search for a Transaction..."
        required
      />
    </form>
  );
}

export default SearchForm;
