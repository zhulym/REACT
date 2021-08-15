//libraries
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
//components
import { getPosts } from "../../api/posts";
import { deletePost } from "../../api/posts";
import { getUser } from "../../api/posts";
import { getUserPhotos } from "../../api/posts";
import PostContent from "./PostContent/index";
//styles
import "./PostList.scss";

const PostsList = () => {
  const [postsList, setPostsList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [usersPhotos, setUsersPhotos] = useState([]);


  const fetchPosts = useCallback(async () => {
    try {
      const data = (await getPosts()) || [];
      const userData = (await getUser()) || [];
      const userPhotos = (await getUserPhotos()) || [];
      setUsersPhotos(userPhotos.photos.photo);
      setUsersList(userData);
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="posts__container">
      {postsList.slice(0, 10).map((post, idx) => {
        return (
          <div className="post__container">
            <PostContent
              usersPhotos={usersPhotos}
              usersList={usersList}
              post={post}
              idx={idx}
            />
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
