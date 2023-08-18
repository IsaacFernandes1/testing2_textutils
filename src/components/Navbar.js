import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

export default function Navbar(props) 
{
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
  <li className="nav-item active">
  <a className="nav-link" href="/">{props.home}<span className="sr-only">(current)</span></a>
  </li>
  <li className="nav-item">
  <a className="nav-link" href="/">Contact</a>
  </li>
  </ul>
  {/*<form className="form-inline my-2 my-lg-0">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>      
  <button className="btn btn-primary" type="submit">Search</button>
  </form>*/}
  <div className={`custom-control custom-switch text-${props.mode}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label " onClick={props.toggleMode} htmlFor="customSwitch1">Enable Dark Mode</label>
  </div>

  <div className={`custom-control custom-switch text-${props.mode}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch2"/>
  <label className="custom-control-label " onClick={props.toggleRedMode} htmlFor="customSwitch1">Enable Red Mode</label>
  </div>


</div>

  </nav>
  )
  //Types of Prop
}
Navbar.propTypes =
{title : PropTypes.string.isRequired,
 home  : PropTypes.string
}
// Default Prop
Navbar.defaultProps = 
{
title : 'defaultTitle',
home  : 'defaultHome'
}