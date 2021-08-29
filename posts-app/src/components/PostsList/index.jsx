//libraries
import React, { useEffect, useState, useCallback, useMemo } from "react";
//components
import PostItem from "./PostItem/index";
import FilterPosts from "./FilterPosts/index";
import PostNotFound from "./PostNotFound/index";
import { Button } from "reactstrap";
//api
import { getPosts, getUser, getUserPhotos } from "../../api/posts";
//styles
import "./PostList.scss";

const PostsList = () => {
  const defaultSort = 'id';
  const [usersList, setUsersList] = useState([]);
  const [typeSort, setTypeSort] = useState(defaultSort);
  const [searchValue, setSearchValue] = useState('');

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

    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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

  return (
    <div className="posts__container">
      < FilterPosts
        typeSort={typeSort}
        setTypeSortCallBack={setTypeSort}
        searchValue={searchValue}
        setSearchValueCallBack={setSearchValue}
      />

      {sortSearchPosts.length ? (
        sortSearchPosts.map((post) => {
          return (
            <PostItem key={post.id} post={post} fetchPosts={fetchPosts} />
          );
        }))
        :
        (
          < PostNotFound
            usersList={usersList}
            setUsersListCallBack={setUsersList}
            setSearchValueCallBack={setSearchValue}
          />
        )}
    </div>
  );
};

export default PostsList;
