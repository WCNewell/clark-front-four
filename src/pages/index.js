import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Unicorn from "../assets/unicorn.inline.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      {/* <h1>
        Hello! Have you met <b>Me?</b>
      </h1>
      <Unicorn /> */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage