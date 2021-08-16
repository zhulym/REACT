import React from "react";
import mod from "./Profile.module.css";
import My_posts from "./My_posts/My_posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={mod.profileWrap}>
      <ProfileInfo />
      <My_posts
        postsData={props.postsData}
        newPostText={props.newPostText}

        dispatch={props.dispatch} />
    </div>
  );
};
export default Profile;
