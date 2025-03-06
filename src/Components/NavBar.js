import React from 'react'
import '../Styles/NavBar.css'
import { Link } from 'react-router'
const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='logo'>A.</div>
        <div className='items'>
            <p><Link to='/'>Home</Link></p>
            <p><a href='#contact'>Contact</a></p>
            <p><Link to="/playlist">Playlists</Link></p>
            <p><Link to="/products">Products</Link></p>
            <p><Link to="/orders">Orders</Link></p>
            <p><Link to="/countdown">Countdown</Link></p>

        </div>

    </div>
  )
}

export default NavBar