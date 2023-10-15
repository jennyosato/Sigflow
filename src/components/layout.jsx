import React from 'react'
import logo from '../assets/logo.svg'

const Layout = ({children}) => {
  return (
    <>
        <a href='/' className="absolute top-[30px] shrink-0">
            <img src={logo} alt='Logo' />
        </a>
        <div className='flex flex-col gap-1'>
          <div className='border'/>
          <div/>
          <div/>
        </div>
        {children}
        </>
  )
}

export default Layout

{/* <Input label="Email" onChange={(e) => setEmail(e.target.value)} input={{
          type: 'email',
          id: 'email',
          placeholder: 'Enter email',
          
          
        }} /> */}