//libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
//components
import PostContent from "../PostContent/index";
import Modal from "../../UI/Modal/Modal";
import { Button } from "reactstrap";
//api
import { deletePost } from "../../../api/posts";
//styles
import "./PostItem.scss";

const PostItem = ({ post, fetchPosts }) => {

  const [showModal, setShowModal] = useState(false);

  const deleteOnClick = async (id) => {
    setShowModal(false);
    try {
      await deletePost(id);
      await fetchPosts();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="post__container">
      <PostContent post={post} />

      <div className="button__container">
        <Link to={`/edit-post/${post.id}`}>
          <Button outline color="primary">Edit Post</Button>
        </Link>
        <Button
          className="edit-button"
          outline
          color="danger"
          onClick={() => setShowModal(true)}
        >
          Delete Post
        </Button>
      </div>
      <Modal showModal={showModal} setShowModalCallBack={setShowModal}>
        <>
          <p>Are you sure?</p>
          <div className="modal__buttons">
            <Button color="danger" onClick={() => deleteOnClick(post.id)}>Delete</Button>
            <Button color="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default PostItem;
