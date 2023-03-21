import React from 'react'
import logo from '../assets/Gengar.jpg';
import './global.css';

function Header() {
  return (
    <div>
        <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        </header>
    </div>
  )
}

export default Header;