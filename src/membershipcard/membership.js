import React, { useRef } from 'react'
import './membership.css'
// import userimage from '../images/IMG20220826090623.png'
// import { normalizeSearch } from '@remix-run/router/dist/utils'
import { exportComponentAsPNG } from "react-component-export-image";
import { useReactToPrint } from 'react-to-print'

const Membership = ({ value }) => {
   const datafromlocalstorage = JSON.parse(localStorage.getItem("data"))
   const imagelocal = localStorage.getItem("img")
   const { name } = datafromlocalstorage
   const componentRef = useRef(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current, documentTitle: "membership"
   });

   return (
      <div className='maincontainermembership'>
         <div ref={componentRef}>
            <div className='membershipcard' >
               <div className='cards'>
                  <div className='cardcontainer'>
                     <div className='heading'>
                        <h3>MEMBER.COM</h3>
                        <h4>{datafromlocalstorage.membertype}</h4>
                     </div>
                     <div className='imageandnamesection'>
                        <div className='userimage'>
                           <img src={imagelocal} alt='img' />
                        </div>
                        <div className='profilename'>
                           <h3>Name  :  {datafromlocalstorage.name} </h3>
                           <h3>Role  :  {datafromlocalstorage.Role} </h3>
                           <h3>Email :  {datafromlocalstorage.email} </h3>
                        </div>

                     </div>
                     <div className='line'>
                        <h2>-- Member ship --</h2>
                     </div>
                     <div className='line2'>
                        <hr />
                     </div> <div className='line2'>
                        <hr />
                     </div>

                  </div>
                  <div className='cardcontainer2'>

                     <div className='Greeting'>
                        <p>PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions</p>
                     </div>
                     <div className='line4'>
                        <h2>-- XX0239204294FC --</h2>
                     </div>

                     <div className='userdetailsback'>
                        <div>
                           <h3>{datafromlocalstorage.website}</h3>
                        </div>
                        <div>
                           <h3>{datafromlocalstorage.Mobilenumber}</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
         <div className='buttondownload'>
            <button onClick={handlePrint}>Download as pdf</button>
            <button onClick={() => exportComponentAsPNG(componentRef)}>Download PNG</button>
         </div>

      </div>

   )
}

export default Membership
