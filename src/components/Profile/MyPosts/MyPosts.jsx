import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}></div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts;