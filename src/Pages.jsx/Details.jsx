import React from 'react'
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router'

const Details = () => {

   const parems=useParams();
   const location=useLocation();


   console.log(location)

   console.log(parems.id)


    const navigate=useNavigate();
    const singleData=useLoaderData();

    const {title,body}=singleData;

  return (
    <div>
        <h1 className='text-red-300'>{title}</h1>
        <h2>{body}</h2>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        <button onClick={()=>navigate('/home')}>Home </button>
    </div>
  )
}

export default Details