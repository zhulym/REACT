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

  const deleteOnClick = async (id) => {
    try {
      if (window.confirm("Are you sure?")) {
        await deletePost(id);
        await fetchPosts();
      }
    } catch (error) {
      console.log(error);
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

            <div className="button__container">
              <Link to={`/edit-post/${post.id}`}>
                <Button outline color="primary">
                  Edit Post
                </Button>
              </Link>
              <Button
                className="edit-button"
                outline
                color="danger"
                onClick={() => deleteOnClick(post.id)}
              >
                Delete Post
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
