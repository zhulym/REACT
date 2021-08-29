//libraries
import React from "react";
//components
import { Button } from "reactstrap";
//styles
import "./PostNotFound.scss";

const PostNotFound = ({ usersList, setUsersListCallBack, setSearchValueCallBack }) => {
  return (
    <div className="posts__fail-container">
      <div className="posts__search-fail">
        {!usersList.length ? 'Loading...' : 'Posts not found, change the search query!'}
      </div>
      {usersList.length ? (
        <Button
          className="posts__back-button"
          color="info"
          onClick={() => {
            setUsersListCallBack(usersList);
            setSearchValueCallBack('');
          }}>
          Back
        </Button>) : <></>
      }
    </div>


  );
};

export default PostNotFound;