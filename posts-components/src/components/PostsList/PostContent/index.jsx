//libraries
import React from "react";
import { Link } from "react-router-dom";
//components
//styles
import "./PostContent.scss";


const PostContent = ({ usersPhotos, usersList, idx, post }) => {
  function generateDate(min, max) {
    return min + Math.random() * (max - min);
  }

  let time = generateDate(1229015907322, 1629015907322);
  const setDate = new Date(time).toLocaleString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className="post__content">
      <div className="post__user">
        <img src={`https://farm66.staticflickr.com/${usersPhotos[idx].server}/${usersPhotos[idx].id}_${usersPhotos[idx].secret}.jpg`} alt={usersPhotos[idx].owner} />
        <span className="post__user-name">{usersList[idx].name}</span>
      </div>
      <div className="post__title">
        <Link className="post__link" key={post.id} to={`/post/${post.id}`}>
          {usersList[idx].id}. {post.title[0].toUpperCase() + post.title.slice(1)}<br />
          <span className="post__read-more">Reed more...</span>
        </Link>
        <span className="post__date">{setDate},</span>
        <span className="post__user-city">{usersList[idx].address.city}</span>
      </div>
    </div>
  );
};

export default PostContent;