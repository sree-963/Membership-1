import React from 'react'
import { useNavigate } from 'react-router-dom'
import './content.css'


const Content = () => {
   const Navigate = useNavigate()
   const handlemember = () => {
Navigate('/member')
   }
   return (
      <div className='landingpage'>
         <div className='wishes'>
            <h1>Welcome to online Membership portal</h1>
         </div>
         <div className='registrationform'>
            <button onClick={handlemember}>Be a Member</button>
           
         </div>
      </div>
   )
}

export default Content
