import React from 'react'
import NavBar from '../Uilit/NavBar'
import { Outlet, useNavigation } from 'react-router-dom'

const Layout = () => {
    const navigation=useNavigation();
  return (
    <div>
        <NavBar />
        {navigation.state === 'loading' ? <p>loaind.........</p> : <Outlet />  }
        
    </div>
  )
}

export default Layout