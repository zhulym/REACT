//libraries
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
//components
import { getSinglePost } from "../../api/posts";
import SocialIcons from "../PostsList/PostContent/SocialIcons/index";
//styles
import "./SinglePost.scss";

const SinglePost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  const [usersList, setUsersList] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const data = (await getSinglePost(id)) || [];
      setPostData(data);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  // useEffect(() => {
  //   fetchPosts();
  // }, [fetchPosts]);

  // const fetchPosts = useCallback(async () => {
  //   try {
  //     const postData = (await getPosts()) || [];
  //     const userData = (await getUser()) || [];
  //     const imageData = (await getUserPhotos()) || [];
  //     const usersPhotos = imageData.photos.photo;

  //     const mixedData = userData.map((item, i) => {
  //       return {
  //         ...item,
  //         title: postData[i].title,
  //         body: postData[i].body,
  //         imageId: usersPhotos[i].id,
  //         owner: usersPhotos[i].owner,
  //         secret: usersPhotos[i].secret,
  //         server: usersPhotos[i].server,
  //       }
  //     })
  //     setUsersList(mixedData);

  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="single-post__container">
      <div className="single-post__user">
      </div>
      <div className="single-post__content">
        {postData.body + postData.body + postData.body}
      </div>
      <SocialIcons post={usersList} />
    </div>);
};

export default SinglePost;
