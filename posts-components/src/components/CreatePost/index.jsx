//libraries
import React, { useState, useCallback, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
//components
import { createPost, getSinglePost, updatePost } from "../../api/posts";
//styles
import "./CreatePost.scss";

const CreatePost = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { id } = useParams();

  const [postData, setPostData] = useState({ title: "", body: "" });
  const isEditPage = pathname.includes("edit");

  const fetchPost = useCallback(async () => {
    if (!isEditPage) {
      return;
    }

    try {
      const data = (await getSinglePost(id)) || {};

      setPostData(data);
    } catch (e) {
      console.log(e);
    }
  }, [id, isEditPage]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const method = isEditPage ? updatePost : createPost;

    const post = {
      title: postData.title,
      body: postData.body,
    };

    const args = isEditPage ? [id, post] : [post];

    try {
      const data = await method(...args);
      history.push("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <div className="form__control">
          <label htmlFor="post-title">Title</label>
          <input
            id="post-title"
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="post-body">Body</label>
          <textarea
            id="post-body"
            name="body"
            rows="5"
            cols="22"
            value={postData.body}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          {isEditPage ? "Edit Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
