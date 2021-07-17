//libraries
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
//components
import { getSinglePost } from "../../api/posts";
//styles

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

  return <div className="posts__container">{postData.body}</div>;
};

export default SinglePost;
