import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BlogList from "../components/blog-list"
import Carousel from "../components/carousel"
import Seo from "../components/seo"
import styled from "styled-components"
import Unicorn from "../assets/unicorn.inline.svg"
import Diamond from "../assets/diamond.inline.svg"
import Mission from "../assets/mission.inline.svg"

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
      <div className="top-content">
          <Unicorn className="svg"/>
        <h1>
          Well hello there, have you <b>met me?</b>
        </h1>
        <Diamond className="svg"/>
        <h2>
          What if your next hire came with 27 years of <b>customer service</b> experience?
        </h2>
        <Mission className="svg"/>
        <h2>
          What if that came wrapped with 16 years of <b>leadership,</b> 7 years of <b>project management</b> and 4 years of <b>web development</b> experience?
        </h2>
        <Link to="/contact">
          <button className="repo-link"><b>Find Out!</b></button>
        </Link>
      </div>  
      <div className="mid-content">
      <h3>Recent Blog Posts</h3>
        <BlogList posts={posts} />
        <Link to="/blog" >
          <h3 className="blog-link" aria-label="see more posts">See more posts...</h3>
        </Link>
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

const CallCard = styled.div`
  
`

