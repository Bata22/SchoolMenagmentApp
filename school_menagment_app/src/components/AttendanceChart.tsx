'use client';


import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 800,
    absent: 425,
  },
  {
    name: 'Tue',
    present: 435,
    absent: 790,
  },
  {
    name: 'Wed',
    present: 455,
    absent: 770,
   
  },
  {
    name: 'Thu',
    present: 1235,
    absent: 0,
  },
  {
    name: 'Fri',
    present: 1000,
    absent: 235,
  }
  
];



const AttendanceChart = () => {
    return (
        <div className='h-full bg-white rounded-xl'>
            <div className='flex justify-between items-center p-4'>
                <h1 className=' text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
               <ResponsiveContainer width="100%" height="90%">
                    <BarChart width={500} height={300} data={data} barSize={25}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DDD" />
                            <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                            <YAxis                axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                            <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                            <Legend align="left" verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
                            <Bar dataKey="present"fill="#FAE27C" activeBar={<Rectangle fill="gold" stroke="purple"/>} legendType="circle" radius={[10, 10, 0, 0]}/>
                            <Bar dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle fill="pink" stroke="blue" />}  legendType="circle" radius={[10, 10, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>

        </div>
     
    )
} 

export default AttendanceChart