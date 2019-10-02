import React from "react"
import { Link } from "gatsby"

const Menu = () => (
    <div className="text-center">
        <Link to="/" className="text-white site-name text-decoration-none px-3">ABOUT</Link>
        <Link to="/education" className="text-white site-name text-decoration-none px-3">EDUCATION</Link>
        <Link to="/experiences" className="text-white site-name text-decoration-none px-3">EXPERIENCES</Link>
        <Link to="/projects" className="text-white site-name text-decoration-none px-3">PROJECTS</Link>
    </div>
)

export default Menu