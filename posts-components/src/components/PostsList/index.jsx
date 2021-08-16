//libraries
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
//components
import { getPosts } from "../../api/posts";
import { deletePost } from "../../api/posts";
import { getUser } from "../../api/posts";
import { getUserPhotos } from "../../api/posts";
import PostContent from "./PostContent/index";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Input } from "reactstrap";
//styles
import "./PostList.scss";

const PostsList = () => {
  const [postsList, setPostsList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [usersPhotos, setUsersPhotos] = useState([]);
  const [typeSort, setTypeSort] = useState('position');
  const [searchValue, setSearchValue] = useState('');

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

  const sortedPosts = useMemo(() => {
    switch (typeSort) {
      case 'id':
        return [...usersList].sort((a, b) => a[typeSort] - b[typeSort])
      case 'name':
        return [...usersList].sort((a, b) => a[typeSort].localeCompare(b[typeSort]))
      case 'city':
        return [...usersList].sort((a, b) => a.address[typeSort].localeCompare(b.address[typeSort]))
      default:
        return usersList;
    }
  }, [typeSort, usersList])

  // const sortSearchPosts = useMemo(() => {
  //   debugger
  //   return sortedPosts.filter((post, i) => post[i].name.toLowerCase().includes(searchValue));
  // }, [searchValue])

  return (
    <div className="posts__container">
      <div className="posts__search-sort-container">
        <FormGroup className="posts__sort">
          <Label htmlFor="sortSelect">Sort by:</Label>
          <Input
            className="posts__sort-input"
            value={typeSort}
            type="select"
            name="select"
            id="sortSelect"
            onChange={(e) => setTypeSort(e.target.value)}
          >
            <option value='id'>Position</option>
            <option value='name'>Name</option>
            <option value='city'>City</option>
          </Input>
        </FormGroup>
        <div className="post__search-group">
          <input
            className="post__search-input"
            type="text"
            value={searchValue}
            placeholder='Search...'
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            className="search-button"
            color="info"
          // onClick={() => deleteOnClick(post.id)}
          >
            Search
          </Button>
        </div>

      </div>

      {postsList.slice(0, 10).map((post, idx) => {
        return (
          <div className="post__container" key={idx}>
            <PostContent
              usersPhotos={usersPhotos}
              usersList={sortedPosts}
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
