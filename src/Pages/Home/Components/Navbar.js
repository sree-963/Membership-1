import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
   const Navigate = useNavigate()
   const handlelogout = () => {
      localStorage.clear()
      alert( 'You are successfully logout' )
      Navigate( '/' )
   }

   const emailfromlocalstorage = localStorage.getItem( "email" )
   return (
      <div className='navbar'>
         <div className='logo'>
            <h1>Membership Portal</h1>
         </div>
         <div className='list'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Services</Link>
            <Link to={'/member'}>Member</Link>
         </div>
         <div className='navprofile'>
            <h2>{emailfromlocalstorage}</h2>
            <Link to={'/'}><button>Login</button></Link>
            <button onClick={handlelogout}>Logout</button>
         </div>
      </div>
   )
}

export default Navbar
