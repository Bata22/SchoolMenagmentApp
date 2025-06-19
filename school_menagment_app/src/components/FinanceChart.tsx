'use client';

import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    expence: 4000,
    income: 2400,
  },
  {
    name: 'Feb',
    expence: 3000,
    income: 1398,
  },
  {
    name: 'Mar',
    expence: 2000,
    income: 9800,
  },
  {
    name: 'Apr',
    expence: 2780,
    income: 3908,
  },
  {
    name: 'May',
    expence: 1890,
    income: 4800,
  },
  {
    name: 'Jun',
    expence: 2390,
    income: 3800,
  },
  {
    name: 'July',
    expence: 3490,
    income: 4300,
  },
    {
    name: 'Aug',
    expence: 2000,
    income: 9800,
  },
  {
    name: 'Sep',
    expence: 2780,
    income: 3908,
  },
  {
    name: 'Oct',
    expence: 1890,
    income: 4800,
  },
  {
    name: 'Nov',
    expence: 2390,
    income: 3800,
  },
  {
    name: 'Dec',
    expence: 3490,
    income: 4300,
  },
];

const FinanceChart = () => {
    return (
            <div className='h-full w-full bg-white rounded-xl p-4'>
                    <div className='flex justify-between items-center p-4'>
                        <h1 className=' text-lg font-semibold'>Finance</h1>
                        <Image src="/moreDark.png" alt="" width={20} height={20}/>
                    </div>

                     <ResponsiveContainer width="100%" height="90%">
                        <LineChart width={500} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#DDD"  />
                            <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                            <YAxis                axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={15}/>
                            <Tooltip />
                            <Legend align="center" verticalAlign='top' wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}} />
                            <Line type="monotone" dataKey="income"  stroke="#C3EBFA" strokeWidth={5}/>
                            <Line type="monotone" dataKey="expence" stroke="#CFCEFF" strokeWidth={5}/>
                        </LineChart>
                    </ResponsiveContainer>
            </div>
    )
}


export default FinanceChart