/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "./layout.scss"

const Layout = ({ children }) => {
  const renderProperSection = () => {
    if (window.location.pathname === "/") {
      return (
        <header className="header">
          <Navbar />
          {children}
        </header>
      )
    } else {
      return (
        <section className="wrapping-section">
          <Navbar />
          {children}
        </section>
      )
    }
  }
  return (
    <>
      <main>{renderProperSection()}</main>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
