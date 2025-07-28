import React from 'react'
import { useLoaderData } from 'react-router'

const Details = () => {

    const singleData=useLoaderData();

    const {title,body}=singleData;

  return (
    <div>
        <h1 className='text-red-300'>{title}</h1>
        <h2>{body}</h2>
    </div>
  )
}

export default Details