import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogList from "../components/blog-list"
import Seo from "../components/seo"

export const BlogPostQuery = graphql`
  query BlogPageQuery {
    posts: allSanityPost(sort: {order: DESC, fields: publishedAt}) {
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
        tlDr
        title
        slug {
          current
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <Layout>
      <h1 className="page-title">blog</h1>
      <section className="mid-content">
        <div className="blog-posts">
          <BlogList posts={posts} />
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage
