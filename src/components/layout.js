import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../css/layout.css"

const Layout = ({ children }) => {

  return (
    <div className="site">
      <Header />
        <div className="site-content">{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
