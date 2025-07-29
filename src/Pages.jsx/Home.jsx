import React from 'react'
import Singup from './Singup'

const Home = () => {
  
  const handleLogin=(data)=>{

    console.log(data)


  }
  return (
    <div>
      <Singup  title={'Home Login'}  handleForm={handleLogin}/>
    </div>
  )
}

export default Home