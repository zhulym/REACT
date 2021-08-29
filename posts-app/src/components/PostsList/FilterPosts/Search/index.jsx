//libraries
import React from "react";
//components
//styles
import "./Search.scss";

const Search = ({ searchValue, setSearchValueCallBack }) => {
  return (
    <div className="post__search-group">
      <form action="#">
        <label htmlFor="search-input" className="post__search-label">Search by name</label>
        <input
          className="post__search-input"
          type="text"
          id="search-input"
          value={searchValue}
          placeholder="Search..."
          onChange={(e) => setSearchValueCallBack(e.target.value)}
        />
      </form>
    </div>
  )
};

export default Search;