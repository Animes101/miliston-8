import React from 'react'
import { useLoaderData,Link } from 'react-router'

const Blog = () => {

  const posts=useLoaderData()
  console.log(posts)
  return (
    <div>
      <h1>{posts.length}</h1>
      <div className='container mx-auto grid grid-cols-3 justify-evenly items-center gap-3 '>
        {posts.map((item)=>{
          return(
            <div key={item.id} className='bg-gray-300 p-4 rounded-md'>
              <h1>Name:-{item.title}</h1>
              <h3>User Name:-{item.body}</h3>
              <Link className='bg-green-500' to={`/blog/${item.id}`}>Details </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog