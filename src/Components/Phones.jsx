import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Phones = () => {
    const [phoneData, setPhoneData]=useState([])



    useEffect(()=>{

        fetch('Phone.json')
        .then((res)=> res.json())
        .then((data)=> setPhoneData(data))



    },[])

  return (
    <div>
<h1>hello world </h1>
      <LineChart
        width={600}
        height={600}
        data={phoneData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="model" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="brand" stroke="#8884d8" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
      </LineChart>
    </div>
  )
}
export default Phones