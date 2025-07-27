import React, { useEffect, useState } from 'react'
import Card from './Card';

const PricesOprion = () => {
    const [allData, setAllData]=useState([]);




    useEffect(()=>{
        fetch('Data.json')
        .then((res)=> res.json())
        .then((data)=>setAllData(data));
    },[])

  return (
    <div>
        <h1>My Product</h1>
        <h1>{allData?.length}</h1>
        <div className='grid grid-cols-3 justify-between items-center gap-6'>
            {
            allData?.map((item)=><Card key={item.id} data={item} />)
        }
        </div>
    </div>
  )
}

export default PricesOprion