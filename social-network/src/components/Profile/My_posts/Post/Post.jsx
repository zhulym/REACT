import React from "react";
import mod from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={`${mod.item} ${mod.clearfix}`}>
        <div className={mod.ava}>
          <img src="/images/avatarmini.jpg" alt=""></img>
        </div>
        <div className={mod.post}>
          {props.message}
        </div>
        <div className={mod.info_about_post}>
          <span>like</span> {props.likes}
        </div>
      </div>
    </div>
  );
};

export default Post;
