import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <h1>We should stop meeting this way</h1>
    <p>Welcome to the Portfolio page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default PortfolioPage
