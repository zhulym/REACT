//libraries
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
//components
import { getSinglePost } from "../../api/posts";
//styles
import "./SinglePost.scss"

const SinglePost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});

  const fetchPosts = useCallback(async () => {
    try {
      const data = (await getSinglePost(id)) || [];
      setPostData(data);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="single-post__container">
      <div className="single-post__user">

      </div>
      <div className="single-post__content">
        {postData.body
          + postData.body
          + postData.body}
      </div>

    </div>);
};

export default SinglePost;
