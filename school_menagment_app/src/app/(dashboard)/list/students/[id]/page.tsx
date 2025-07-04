import BigCalendar from "@/components/BigCalendar"
import  "react-big-calendar/lib/css/react-big-calendar.css"
import Image from "next/image"
import AnnouncementListPage from "../../announcements/page"
import Announcements from "@/components/Announcements"
import Link from "next/link"
import PyeChart from "@/components/PyeChart"

const SingleStudentPage = () => {
    return (
        <div className="flex-1  p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">

                    {/* USER INFO CARD */}
                    <div className="bg-lamaSky px-4 py-6 rounded-md flex flex-1 gap-4">
                        <div className="w-1/3">
                            <Image src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Maya Longtown</h1>
                            <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:1/3 flex items-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14} />
                                    <span>A+ </span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:1/3 flex items-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14} />
                                    <span>February 2025 </span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:1/3 flex items-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14} />
                                    <span>leonard.yang@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14} />
                                    <span>+381 555 234</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SMALL CARDS */}
                    <div className="flex flex-1  gap-4 justify-between flex-wrap">
                        <div className="bg-white p-4 flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
                            <Image src= "/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400" >Attendance</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
                            <Image src= "/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">8th</h1>
                                <span className="text-sm text-gray-400" >Grade</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
                            <Image src= "/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">20</h1>
                                <span className="text-sm text-gray-400" >Lessons</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
                            <Image src= "/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">A 1</h1>
                                <span className="text-sm text-gray-400" >Class</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                    <div className="mt-4 bg-white p-4 rounded-md h-[800px]">
                        <h1 className="font-semibold text-xl">Student&apos;s Schedule</h1>
                        <BigCalendar/>
                    </div>
            </div>

            {/* Right */}
            <div className="w-full xl:w-1/3 flex flex-wrap flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="mt-4 flex flex-w gap-4 text-xs text-gray-500">
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Student&apos;s Profesors</Link>
                    <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">Student&apos;s Lessons</Link>
                    <Link className="p-3 rounded-md bg-pink-50" href="/">Student&apos;s Exams</Link>
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Student&apos;s Assignments</Link>
                    <Link className="p-3 rounded-md bg-lamaPurpuleLight" href="/">Student&apos;s Results</Link>
                    
                </div>
            </div>
            <PyeChart/>
            <Announcements/>
            </div>
        </div>
    )
}

export default SingleStudentPage