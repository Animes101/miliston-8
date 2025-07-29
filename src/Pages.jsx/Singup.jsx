import React from 'react'

const Singup = ({title,handleForm}) => {

   

    const handleHonner=(e)=>{

        e.preventDefault();

       const form = e.target;
    const name = form.name.value;
    const password = form.password.value;

    const data={
        name,
        password
    }

        handleForm(data)

        

    }

  return (
    <div>
        <h1 className='text-center text-green-500'>{title}</h1>
        <form className='bg-gray-300 p-4' onSubmit={handleHonner} action="">
              <input className='block w-[300px] mx-auto my-5  ' type="text" name="name" id="name" />
              <input className='block w-[300px] mx-auto my-5  ' type="password" name="password" id="password" />
              <button className='block w-[300px] mx-auto my-5 text-red-500  ' type='submit'>Singup</button>
        </form>
    </div>
  )
}

export default Singup