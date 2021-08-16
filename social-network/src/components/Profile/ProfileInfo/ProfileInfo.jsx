import React from "react";
import mod from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div className={mod.main_content}>
      <div className={mod.picture_of_page}>
        <img src="\images\terminator910.jpg" alt=""></img>
      </div>

      <div className={mod.avatar}>
        <img src="\images\terminatormask.jpg" alt=""></img>
      </div>

      <div className={mod.information}>
        <p>FirstName SecondName:</p>
        <p>City: </p>
        <p> Education:</p>
        <p>Place of work:</p>
        <p>Birthday:</p>
        <p>Interests:</p>
      </div>
      <div className={mod.settings}>Settings</div>
      <div className={mod.friends_online}>Friends online</div>
    </div>

  );
};

export default ProfileInfo;
