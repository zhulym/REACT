//libraries
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
//components
import { getPosts } from "../../api/posts";
//styles
import "./PostList.scss";

const PostsList = () => {
  const [postsList, setPostsList] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const data = (await getPosts()) || [];
      setPostsList(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="posts__container">
      {postsList.map((post) => {
        return (
          <Link className="post__link" key={post.id} to={`/post/${post.id}`}>
            {post.title}
          </Link>
        );
      })}
    </div>
  );
};

export default PostsList;
