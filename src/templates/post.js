import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlockContent from "../components/block-content"

export const query = graphql`
  query BlogPostTemplateQuery($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      _id
      title
      author {
        name
      }
      publishedAt(formatString: "MMMM Do yyyy")
      categories {
        title
        _id
      }
      mainImage {
        asset {
          gatsbyImageData(formats: AUTO, placeholder: BLURRED)
        }
      }
      imageCredit
      tlDr
      _rawBody
    }
  }
`;

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  const image = getImage(post.mainImage.asset)
  return (
    <Layout>
      {errors && <Seo title='GraphQL Error' />}
      {post && <Seo title={post.title || 'Untitled'} />}
      <h1 className="page-title">{post.title}</h1>      
      <section className="mid-content">
        <article className="post-flow">
        <h4>by {post.author.name}</h4>
        <p>{post.publishedAt}</p>
        {/* <ul>
          {post.categories.map((category) => (
            <li key={category._id}>{category.title}</li>
          ))}
        </ul> */}  
        <GatsbyImage 
          image={image}
          className="post-image"
          alt={post.imageCredit}
        />
        <p className="image-caption">{post.imageCredit}</p>
        <p><strong>TLDR: </strong>{post.tlDr}</p>
        <BlockContent blocks={post._rawBody} />
        </article>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate;