import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Menu from "./menu"

const Header = () => (
  <>
    <header className="header-div">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
        className="py-5"
      >
        <h2 style={{ margin: '110px 0 10px' }} className="pt-5 d-block text-center">
          <Link
            to="/"
            className="site-name text-white text-decoration-none font-weight-light"
          >
            TIN KO HEIN
          </Link>
        </h2>
        <p className="text-center">
          <small className="text-white site-name ">
            Web Application | Mobile Application Developer
          </small>
        </p>
      </div>
    </header>
    <div style={{ backgroundColor: '#000' }}>
      <div 
        style={{ 
        margin: `0 auto`, 
        maxWidth: '960',
        overflow: 'auto',
        whiteSpace: 'nowrap'
        }} 
        className="pb-5" 
      >
        <Menu />
      </div>
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
