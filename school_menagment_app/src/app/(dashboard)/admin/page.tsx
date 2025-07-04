import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return ( 
            <div className= "p-4 flex gap-4 flex-col md:flex-row">
                {/* {LEFTSIDE} */}
                <div className="w-full lg:w-2/3 flex flex-col gap-8">
                    {/* USER CARDS */}
                    <div className="flex gap-4 justify-between flex-wrap" >
                        <UserCard type="student"/>
                        <UserCard type="profesor"/>
                        <UserCard type="parent"/>
                        <UserCard type="stuff"/>
                    </div>
                    {/* MIDDLE CHARTS */}
                    <div className="flex gap-4 flex-col lg:flex-row ">
                        {/* COUNTCHART */}
                        <div className="w-full lg:w-1/3 h-[450px]">
                             <CountChart/>
                        </div>
                        {/* ATENDANCECHART */}
                        <div className="w-full lg:w-2/3 h-[450px]">
                            <AttendanceChart/>
                        </div>
                    </div>
                     {/* BOTTOM CHART */}
                     <div className=" w-full h-[50]">
                        <FinanceChart/>
                     </div>
                </div>

                {/* RIGHTSIDE */}
                <div className="w-full lg:w-1/3 felx felx-clo gap-8 ">

                    {/* CALEDNAR EVENTS  ANOUNSMENTS */}
                    <div className=""> 
                        <EventCalendar/>
                        <Announcements/>
                    </div>
                </div>
            </div>

           
      
    )
}

export default AdminPage
