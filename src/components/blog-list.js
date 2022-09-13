import React from 'react';
import SinglePost from './single-post';

const BlogList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </>
  );
}

export default BlogList