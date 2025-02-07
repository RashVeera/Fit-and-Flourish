import React from 'react'
import '../App.css';
import NavBar from './NavBar';
import { Outlet } from 'react-router';


const Body = () => {
  return (
    <div className='main-page'>
    <NavBar/>
    <Outlet/>
    </div>
  )
}

export default Body