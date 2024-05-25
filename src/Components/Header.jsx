import React from 'react'
import logo from "../assets/investment-Calculator-logo.png"

function Header() {
  return (
    <header id="header">
        <img src={logo} alt ="logo" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header