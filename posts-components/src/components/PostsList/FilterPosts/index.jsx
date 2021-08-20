//libraries
import React from "react";
//components
import Sort from './Sort/index';
import Search from './Search/index';
//styles
import "./FilterPosts.scss";

const FilterPosts = ({ typeSort, setTypeSortCallBack, searchValue, setSearchValueCallBack }) => {

  return (
    <div className="posts__search-sort-container">
      <Sort
        typeSort={typeSort}
        setTypeSortCallBack={setTypeSortCallBack}
      />
      <Search
        searchValue={searchValue}
        setSearchValueCallBack={setSearchValueCallBack}
      />
    </div>
  )
};

export default FilterPosts;