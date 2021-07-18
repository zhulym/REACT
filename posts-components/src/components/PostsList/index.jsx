//libraries
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
//components
import { getPosts } from "../../api/posts";
import { deletePost } from "../../api/posts";
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

  const deleteOnClick = (id) => {
    if (window.confirm("Are you sure?")) {
      deletePost(id);
      console.log(id);
    }
  };

  return (
    <div className="posts__container">
      {postsList.map((post) => {
        return (
          <div className="post__container">
            <Link className="post__link" key={post.id} to={`/post/${post.id}`}>
              {post.title}
            </Link>
            <Button
              outline
              color="danger"
              onClick={() => deleteOnClick(post.id)}
            >
              Delete Post
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
