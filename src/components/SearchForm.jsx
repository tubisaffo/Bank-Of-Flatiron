// import React from "react";
import "../App.css";
import PropTypes from "prop-types";

function SearchForm({ value, onChange }) {
  return (
    <form id="search-form">
      <input
        id="search"
        type="text"
        placeholder="Search for a Transaction..."
        required
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
