import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='logo'>A.</div>
        <div className='items'>
            <p>Home</p>
            <p>Contact</p>
            <p>Playlists</p>
            <p>Products</p>
            <p>Orders</p>
        </div>

    </div>
  )
}

export default NavBar