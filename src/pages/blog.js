import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <h1>blog</h1>
    <p>I'm Extra! Read all about it!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage
