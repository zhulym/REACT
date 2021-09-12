//libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//components
import SocialIcons from './SocialIcons/index'
//styles
import "./PostContent.scss";

const PostContent = ({ post }) => {
  const [postDate, setPostDate] = useState('');
  function generateDate(min, max) {
    return min + Math.random() * (max - min);
  }

  useEffect(() => {
    let time = generateDate(1229015907322, 1629015907322);
    setPostDate(new Date(time).toLocaleString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'short', day: 'numeric' }));
  }, [])

  return (
    <div className="post__content">
      <div className="post__user">
        <img src={`https://farm66.staticflickr.com/${post.server}/${post.imageId}_${post.secret}.jpg`} alt={post.owner} />
        <span className="post__user-name">{post.name}</span>
      </div>
      <div className="post__title">
        <Link className="post__link" key={post.id} to={`/post/${post.id}`}>
          {post.id}. {post.title[0].toUpperCase() + post.title.slice(1)}<br />
          <span className="post__read-more">Reed more...</span>
        </Link>
        <span className="post__date">{postDate},</span>
        <span className="post__user-city">{post.address.city}</span>
      </div>
      <SocialIcons post={post} />
    </div>
  );
};

export default PostContent;