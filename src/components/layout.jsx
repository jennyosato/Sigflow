import React from 'react'
import logo from '../assets/logo.svg'

const Layout = ({children}) => {
  return (
    <div className='border'>
        <div>
            <img src={logo} alt='Logo' />
        </div>
        {children}
        </div>
  )
}

export default Layout

{/* <Input label="Email" onChange={(e) => setEmail(e.target.value)} input={{
          type: 'email',
          id: 'email',
          placeholder: 'Enter email',
          
          
        }} /> */}