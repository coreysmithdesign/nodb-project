import React from 'react'
import icon from './icon.png'

function Header() {
  return (
    <header className="app-header">
      <div className="contain">
        <img className="app-icon" src={icon} alt="Icon" />
        <h1 className="app-title">Material Tracker</h1>
      </div>
    </header>
  )
}

export default Header
