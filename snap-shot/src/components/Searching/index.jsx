// libraries
import React from 'react';
// api
import { getImages } from '../../api/images';
// styles
import './Searching.css';

const Searching = (props) => {

  const handleChange = event => {
    props.setSearchItemCallBack(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const data = await getImages(props.searchTerm);
      const images = data.photos.photo;
      props.setImageDataCallBack(images);
      props.setSearchItemCallBack('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search__form">
        <input
          type="text"
          placeholder="Search..."
          value={props.searchTerm}
          onChange={handleChange}
        />
        <button
          className="search-submit"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searching;