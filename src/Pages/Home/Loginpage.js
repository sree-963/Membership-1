import React from "react"
import { useState } from "react"
// import Form from 'react-bootstrap/Form';
import './loginform.css'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
   const [email, setemail] = useState( "" )
   const [password, setPassword] = useState( "" )
   const navigate = useNavigate()
   const handleSubmit = ( e ) => {
      e.preventDefault()
      JSON.stringify( localStorage.setItem( "email", email ) )
      JSON.stringify( localStorage.setItem( "password", password ) )
      alert( 'loginsuccessfully' )
      setemail( "" )
      setPassword( "" )
      navigate( "/home" )
   }

   return (
      <div className="loginform">
         <form onSubmit={handleSubmit}>
            <input placeholder="Enter your email" value={email} type="email" onChange={( e ) => setemail( e.target.value )} required />
            <input placeholder="Enter your Password" value={password} type="password" onChange={( e ) => setPassword( e.target.value )} required />
            <button type="submit">Login</button>
         </form>

      
      </div>




   )
}

export default LoginPage

