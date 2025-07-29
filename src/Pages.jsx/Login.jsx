import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Login = () => {

  const [users, setUsers]=useState({name:'',email:'', password:''});
  const {name,email,password}=users;
  const searchRef=useRef(null);


  const handleChange=(e)=>{

    setUsers({...users,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault()


    const users={
       id: uuidv4(),
      name,
      email,
      password,

    }

    console.log(users);
      console.log(searchRef.current.value)

  }



  return (
    <div>
      <h1>Login Form </h1>
      <form className='flex flex-col' onSubmit={handleSubmit} action="">
        <input type="search" name="" ref={searchRef} id="" />
        <label className='text-white text-3xl font-bold text-center' htmlFor="name">Name</label>
        <input onChange={handleChange} value={name} className='w-[90%] rounded-md text-white text-lg mx-auto' type="text" name="name" id="name" />
        <label className='text-white text-3xl font-bold text-center' htmlFor="">Email</label>
        <input onChange={handleChange} value={email} className='w-[90%] rounded-md text-white text-lg mx-auto' type="email" name="email" id="email" />
        <label className='text-white text-3xl font-bold text-center' htmlFor="password">Password</label>
        <input onChange={handleChange} value={password} className='w-[90%] rounded-md text-white text-lg mx-auto' type="password" name="password" id="password" />
        <button className='bg-white text-black my-4 w-52 mx-auto text-2xl rounded-md' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login