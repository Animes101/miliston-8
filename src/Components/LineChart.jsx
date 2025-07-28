import React from 'react'
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts'; 

const LineChart = () => {

const data = [
  { year: 2019, JavaScript: 80, Python: 75, Java: 70, Cpp: 60 },
  { year: 2020, JavaScript: 82, Python: 78, Java: 68, Cpp: 62 },
  { year: 2021, JavaScript: 85, Python: 83, Java: 65, Cpp: 63 },
  { year: 2022, JavaScript: 87, Python: 88, Java: 60, Cpp: 64 },
  { year: 2023, JavaScript: 88, Python: 92, Java: 58, Cpp: 65 }
];
  return (
    <div>
        <LChart width={500} height={500} data={data}>
          <XAxis dataKey='JavaScript' ></XAxis>
          <YAxis dataKey='Python'></YAxis>
               <Line  dataKey='JavaScript' stroke='green'></Line>
               <Line dataKey='Python'></Line>
               <Line dataKey='Cpp'></Line>
        </LChart>
    </div>
  )
}

export default LineChart