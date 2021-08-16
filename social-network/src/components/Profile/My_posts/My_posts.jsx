import React from "react";
import mod from "./My_posts.module.css";
import Post from "./Post/Post";

let addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

let updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}



const My_posts = (props) => {

  let postsElements = props.postsData.map((p) => (<Post message={p.message} likes={p.likes} />));

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost(); так было, а переделели с диспатч
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={mod.content}>
      <div className={mod.new_post}>
        <div>New post</div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
};

export default My_posts;
