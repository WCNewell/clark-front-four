import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from "styled-components"

const SinglePost = ({ post }) => {
  const image = getImage(post.mainImage.asset.gatsbyImageData);
  return (
    <>
      <div>
        <span aria-label={post.title}>
          <Link to={`/${post.slug.current}`}>
          <GatsbyImage
                image={image}
                className="post-image"
                alt={post.imageCredit}
              />
            <h3 className="dark-link">{post.title}</h3>
            {/* <ul>
              <li className="category">{post.categories.map((category) => category.title).join(' ')}</li>
            </ul> */}
          </Link>
          <p>{post.tlDr}</p>
        </span>
      </div>
    </>
  );
}

export default SinglePost;

const PostList = styled.div`
  display: flex;
  
`
