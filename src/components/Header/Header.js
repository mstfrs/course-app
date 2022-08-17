import React from 'react'
import './HeaderStyle.css'
import logo from '../../assets/globalai.png'

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={logo} alt="" />
      </a>
      <div className="header-title">
        <h1>COURSES</h1>
      </div>
      <div className="header-right">
        <a className="active" href="/">
          Home
        </a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}

export default Header
