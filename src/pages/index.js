import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BlogList from "../components/blog-list"
import Seo from "../components/seo"
import Unicorn from "../assets/unicorn.inline.svg"

export const RecentPostsQuery = graphql`
  query RecentPostsQuery {
    posts: allSanityPost(limit: 3, sort: {order: DESC, fields: publishedAt}) {
      nodes {
        _id
        publishedAt
        categories {
          title
        }
        mainImage {
          asset {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, aspectRatio: 1)
          }
        }
        imageCredit
        title
        tlDr
        slug {
          current
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <Layout>
      <Seo title="Home" />
      <div className="top-content">
        <h1>
          Well hello there, have you met me?
        </h1>
        <Unicorn className="svg-art"/>
      </div>  
      <div className="mid-content">
      <h2>recent blog posts</h2>
        <BlogList posts={posts} />
        <Link to="/blog" >
          <h1 className="blog-link" aria-label="see more posts">See more posts...</h1>
        </Link>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage