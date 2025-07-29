import React from 'react'
import { useLoaderData,Link, useNavigate } from 'react-router'

const Blog = () => {

  const posts=useLoaderData()
  const navigave=useNavigate()

  const slicesBody=(text)=>{

    return text.length > 10 ? text.slice(0, 50) : text;

  }
  return (
    <div>
      <h1>{posts.length}</h1>
      <div className='container mx-auto grid grid-cols-3 justify-evenly items-center gap-3 '>
        {posts.map((item)=>{
          return(
            <div key={item.id} className='bg-green-300 p-4 rounded-md text-black'>
              <h1>Name:-{item.title}</h1>
              <h3>User Name:-{slicesBody(item.body)}</h3>
              <button className='bg-green-500 p-4 rounded-md' onClick={()=>navigave(`/blog/${item.id}`)}>Details </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog