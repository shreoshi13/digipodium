import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = ()=>{
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link" to="/login">
            login
            </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/signup">
            Signup
            </NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink className="nav-link" to="/home">
            Home
            </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/update">
            update user
            </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">
            About
            </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/event">
            Event handling
            </NavLink>

        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/todo">
            todo list
            </NavLink>
            </li>
            <li className="nav-item">
        <NavLink className="nav-link" to="/product">
            product list
            </NavLink>
            </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/state">
          State management
            </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">
            contact us
            </NavLink>

        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/manage">
            manage user
            </NavLink>

        </li>
        {
          currentUser !== null ? (
            <li className="nav-item">
        <NavLink className="nav-link" to="/manage">
            Log Out
            </NavLink>
        </li>
          ): ""
        }
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    )
}

export default Navbar