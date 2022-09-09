import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <h1>Don't hate me because I'm beautiful</h1>
    <p>Welcome to the Portfolio page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Portfolio" />

export default PortfolioPage
