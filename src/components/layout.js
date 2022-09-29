import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import StarBackground from "./star-background"
import "../styles/global-styles.scss"
import "../styles/grids.css"

const Layout = ({ children }) => {
  return (
    <>
      <StarBackground />
      <main className="main-grid">
        <Header />
          {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout