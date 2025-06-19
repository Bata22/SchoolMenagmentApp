'use client';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMP_DB
const events = [
    {
        id:1,
        title: "Epic movie",
        time:"12:00 PM - 2:00 PM",
        description: "Epic movie about legedary things in the world"
    },
    {
        id:2,
        title: "Emperor of the sea",
        time:"4:00 PM - 8:00 PM",
        description: "Try to find secret key of the treasure, to become mystic emperor of the sea"

    },
    {
        id:3,
        title: "World of solving puzzles ",
        time:"08:00 AM - 11:00 PM",
        description: "World of fantasy and science, but adveturer you have limited time to solve puzzles and resolve mistery of magnifienc air craft ship, are you up for the challenge"
    }
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value}/> 
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                <Image src="/moreDark.png" alt=''  width={20} height={20}/>
            </div>
            <div className=' gap-4'>
                {events.map(event=>(
                    <div className='p-5 required:-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurpule' key={event.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className=' font-semibold text-gray-600'>{event.title}</h1>
                            <span className='text-sx text-gray-300'>{event.time}</span>
                        </div> 
                        <p className='mt-2 text-gray-400 text-sm'> {event.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default EventCalendar