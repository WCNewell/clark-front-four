import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BlogList from "../components/blog-list"
import Carousel from "../components/carousel"
import Seo from "../components/seo"
import Unicorn from "../assets/unicorn.inline.svg"
import Diamond from "../assets/diamond.inline.svg"
import Mission from "../assets/mission.inline.svg"

export const RecentPostsQuery = graphql`
  query RecentPostsQuery {
    posts: allSanityPost(limit: 4, sort: {order: DESC, fields: publishedAt}) {
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
      <div className="top-content">
        <div className="top-grid">
          <Unicorn className="svg-one"/>
          <h1 className="text-one">
            Well hello there, have you <b>met me?</b>
          </h1>
          <Diamond className="svg-two"/>
          <h2 className="text-two">
            What if your next hire came with 28 years of <b>customer service</b> experience?
          </h2>
          <Mission className="svg-three"/>
          <h2 className="text-three">
            What if that came wrapped with 16 years of <b>leadership,</b> 8 years of <b>project management</b> and 4 years of <b>web development</b> experience?
          </h2>
        </div>
      </div>
      <div className="action-button">
        <Link to="/about">
          <button className="repo-link"><b>Learn More</b></button>
        </Link>
      </div>
      <div className="mid-content">
      <h3 className="section-header">Recent Blog Posts</h3>
        <div className="blog-posts">
          <BlogList posts={posts} />
          <Link to="/blog" >
            <h3 className="blog-link" aria-label="see more posts">See more posts...</h3>
          </Link>
        </div>
      </div>
      <div className="bottom-content">
        <h1 className="carousel-head">What Collaborators are Saying</h1>
        <Carousel />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

