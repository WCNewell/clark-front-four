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
        <CallCard>
          <Unicorn className="svg"/>
          <h1>
            Well hello there, have you <b>met me?</b>
          </h1>
        </CallCard>
        <CallCard>
          <h2>
            What if your next hire came with 27 years of <b>customer service</b> experience?
          </h2>
          <Diamond className="svg"/>
        </CallCard>
        <CallCard>
          <Mission className="svg"/>
          <h2>
            What if that came wrapped with 16 years of <b>leadership,</b> 7 years of <b>project management</b> and 4 years of <b>web development</b> experience?
          </h2>
        </CallCard>
        <CallCard>
          <Link to="/contact">
            <button className="repo-link"><b>Find Out!</b></button>
          </Link>
        </CallCard>
      </div>  
      <div className="mid-content">
      <h3>Recent Blog Posts</h3>
        <BlogList posts={posts} />
        <Link to="/blog" >
          <h3 className="blog-link" aria-label="see more posts">See more posts...</h3>
        </Link>
      </div>
      <div className="bottom-content">
        <h1>What Collaborators are Saying About Clark</h1>
        <Carousel />
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

const CallCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

// const CallCardTwo = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #fafafa;
// `

// const ContactButton = styled.button`
//   height: 10rem;
// `