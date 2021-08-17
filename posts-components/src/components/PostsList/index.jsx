//libraries
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
//components
import PostContent from "./PostContent/index";
import { Button } from "reactstrap";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Input } from "reactstrap";
//api
import { getPosts } from "../../api/posts";
import { deletePost } from "../../api/posts";
import { getUser } from "../../api/posts";
import { getUserPhotos } from "../../api/posts";
//styles
import "./PostList.scss";

const PostsList = () => {
  const defaultSort = 'position';
  const [usersList, setUsersList] = useState([]);
  const [typeSort, setTypeSort] = useState(defaultSort);
  const [searchValue, setSearchValue] = useState('');
  const [searchedPosts, setSearchPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const postData = (await getPosts()) || [];
      const userData = (await getUser()) || [];
      const imageData = (await getUserPhotos()) || [];

      const usersPhotos = imageData.photos.photo;
      const mixedData = userData.map((item, i) => {
        return {
          ...item,
          title: postData[i].title,
          body: postData[i].body,
          imageId: usersPhotos[i].id,
          owner: usersPhotos[i].owner,
          secret: usersPhotos[i].secret,
          server: usersPhotos[i].server,
        }
      })
      setUsersList(mixedData);
      setSearchPosts(mixedData);
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

  const sortSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.name.toLowerCase().includes(searchValue));
  }, [searchValue, sortedPosts])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchPosts(sortSearchPosts);
  }

  return (
    <div className="posts__container">
      <div className="posts__search-sort-container">
        <FormGroup className="posts__sort">
          <Label className="posts__sort-label" htmlFor="sortSelect">Sort by:</Label>
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
          <form action="#" onSubmit={(e) => handleSubmit(e)}>
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
            >
              Search
            </Button>
          </form>
        </div>
      </div>

      {searchedPosts.length ? (
        searchedPosts.map((post, i) => {
          return (
            <div className="post__container" key={i}>
              <PostContent
                post={post}
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
        }))
        :
        (
          <div className="posts__search-fail">
            {!usersList.length ? 'Loading...' : 'Posts not found, change the search query!'}
          </div>
        )}
    </div>
  );
};

export default PostsList;
