import React from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.NavbarTopic}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">business</Link></li>
                <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                <li><Link className="dropdown-item" to="/general">general</Link></li>
                <li><Link className="dropdown-item" to="/health">health</Link></li>
                <li><Link className="dropdown-item" to="/science">science</Link></li>
                <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                <li><Link className="dropdown-item" to="/technology">technology</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}

export default Navbar
