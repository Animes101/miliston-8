import React from 'react'
import { LineChart as LChart, Line } from 'recharts'; 

const LineChart = () => {

    const data = [
  { test: "Test 1", marks: 65 },
  { test: "Test 2", marks: 72 },
  { test: "Test 3", marks: 78 },
  { test: "Test 4", marks: 85 },
  { test: "Test 5", marks: 90 },
  { test: "Test 6", marks: 95 }
];
  return (
    <div>
        <LChart width={500} height={500} data={data}>
               <Line dataKey='marks'></Line>
        </LChart>
    </div>
  )
}

export default LineChart