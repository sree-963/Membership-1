import React, { useContext, useState } from 'react'
import './RegisterFormmember.css'
import { useNavigate } from 'react-router-dom'
import { StoreData } from '../../../context/store'

export const RegisterFormmember = () => {
  const navigate = useNavigate()
  const { data, setData } = useContext( StoreData )

  const handlechange = ( e ) => {
    const { name, value } = e.target;
    setData( { ...data, [name]: value } )
  }
  const [img, setImage] = useState( "" )
  const handleformsubmit = ( e ) => {
    e.preventDefault()
    localStorage.setItem( "data", JSON.stringify( data ) )
    setData( {
      name: "",
      Role: "",
      Mobilenumber: "",
      email: "",
      website: "",
      membertype: "",
    } )

    alert( "Your form has successfully submitted" )
    navigate( '/card' )
  }


  const getBase64 = ( file ) => {
    return new Promise( ( resolve, reject ) => {
      const reader = new FileReader()
      reader.onload = () => resolve( reader.result );
      reader.onabort = ( error ) => reject( error )
      reader.readAsDataURL( file )
    } )

  }

  const handleImg = ( e ) => {
    const file = e.target.files[0]
    getBase64( file ).then( base64 => {
      localStorage['img'] = base64
      console.debug( "filestore", base64 )
    } )
  }
  return (
    <div className='main'>
      <div className='Formdata'>
        <form onSubmit={handleformsubmit}>
          <input placeholder='Enter your name' type="text" value={data.name} name="name" onChange={handlechange} required />
          <input placeholder='Enter your Role' type="text" value={data.Role} name="Role" onChange={handlechange} required />
          <input placeholder='Enter your mobile' type="number" value={data.Mobilenumber} name="Mobilenumber" onChange={handlechange} required />
          <input placeholder='Enter your email' type="email" value={data.email} name="email" onChange={handlechange} required />
          <input placeholder='Enter your websitename' type="text" value={data.website} name="website" onChange={handlechange} required />

          <div>
            <label for="membertype">Type of Member:</label>
            <select name="membertype" value={data.membertype} onChange={handlechange} required>
              <option>Diamond</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>
          </div>
          <input type="file" name='file' onChange={handleImg} value={img} id="formFile" />
          <button type='submit'>submit</button>
        </form>
      </div>

    </div>

  )
}


