/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 // import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 import Footer from "./footer"
 import "../styles/global-styles.scss"
 import "../styles/grids.css"
 
 const Layout = ({ children }) => {
   // const data = useStaticQuery(graphql`
   //   query SiteTitleQuery {
   //     site {
   //       siteMetadata {
   //         title
   //       }
   //     }
   //   }
   // `)
 
   return (
     <>
       <main>
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
 