import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation(props) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.SiteName}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === "dark" ? "white" : "black" }}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/AboutUs" style={{ color: props.mode === "dark" ? "white" : "black" }}>About</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changeMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.mode}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
