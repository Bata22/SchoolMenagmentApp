import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"
import  "react-big-calendar/lib/css/react-big-calendar.css"



const ProfesorPage = () => {
    return (
         <div className= "flex-1 p-4 flex gap-4 flex-col xl:flex-row">
                {/* {LEFTSIDE} */}
                <div className="w-full xl:w-2/3 flex flex-col gap-8">
                   <div className="h-full bg-white p-4 rounded-md ">
                    <h1 className="text-xl font-semibold">Schedule</h1>
                    <BigCalendar/>
                   </div>
                </div>
                {/* RIGHTSIDE */}
                <div className="w-full xl:w-1/3 felx felx-clo gap-8 ">

                    {/* ANNOUNSMENTS */}
                    <div className=""> 
                        <Announcements/>
                    </div>
                </div>
            </div>
    )
}
    
export default ProfesorPage
