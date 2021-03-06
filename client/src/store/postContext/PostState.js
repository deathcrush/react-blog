import React from 'react'

import PostContext from './PostContext';

import useAsyncReducer from '../useAsyncReducer'

import {
  postReducer,
  CLEAR_ERROR,
  SET_POSTS,
  SET_POSTS_BY_USER,
  SET_POSTS_BY_TAG,
  UPVOTE,
  DOWNVOTE,
  ADD_NEW_POST,
  UPDATE_POST,
  REMOVE_POST
} from './PostReducers'

const PostState = props => {
  const posts = {
    postsCollections: [],
    errors: []
  };

  const [ postState, dispatch ] =  useAsyncReducer(postReducer, posts);

  const clearError = idx => dispatch({ type: CLEAR_ERROR, idx });
  const setPosts = () => dispatch({ type: SET_POSTS });
  const setPostsByUser = user => dispatch({ type: SET_POSTS_BY_USER, user });
  const setPostsByTag = tag => dispatch({ type: SET_POSTS_BY_TAG, tag });
  const upvote = (key, user) => dispatch({ type: UPVOTE, key, user });
  const downvote = (key, user) => dispatch({ type: DOWNVOTE, key, user });
  const addNewPost = (post, history) => dispatch({ type: ADD_NEW_POST, post, history });
  const updatePost = content => dispatch ({ type: UPDATE_POST, content });
  const removePost = id => dispatch({ type: REMOVE_POST, id });

  return (
    <PostContext.Provider
      value={{
        posts: postState,
        clearError,
        setPosts,
        setPostsByUser,
        setPostsByTag,
        upvote,
        downvote,
        addNewPost,
        updatePost,
        removePost
      }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState;