import React from 'react'
import './HeaderStyle.css'
import logo from '../../assets/globalai.png'

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
      <div className="header-title">
        <h1>Courses</h1>
      </div>
      <div className="header-right">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}

export default Header
