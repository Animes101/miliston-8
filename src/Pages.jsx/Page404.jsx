import React from 'react'
import { Navigate, useNavigate, useRouteError } from 'react-router'

const Page404 = () => {


  const navigate=useNavigate();
  const errorMessage=useRouteError();

  console.log(errorMessage)
  return (
    <div>
      <h2>page404</h2>
      <p>{errorMessage.statusText}</p>
      <h1>{errorMessage.status}</h1>
      <Navigate  to={'/'} replace={true}></Navigate>

      <button onClick={()=>navigate('/')}>go back</button>
      
    </div>
  )
}

export default Page404