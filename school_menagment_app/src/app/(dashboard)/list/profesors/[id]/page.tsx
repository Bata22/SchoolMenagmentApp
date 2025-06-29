import BigCalendar from "@/components/BigCalendar"
import  "react-big-calendar/lib/css/react-big-calendar.css"
import Image from "next/image"
import AnnouncementListPage from "../../announcements/page"
import Announcements from "@/components/Announcements"
import Link from "next/link"
import PyeChart from "@/components/PyeChart"
import FormModal from "@/components/FormModel"



const SingleProfesorPage = () => {
    return (
        <div className="flex-1  p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">

                    {/* USER INFO CARD */}
                    <div className="bg-lamaSky px-4 py-6 rounded-md flex flex-1 gap-4">
                        <div className="w-1/3">
                            <Image src="https://images.pexels.com/photos/6325958/pexels-photo-6325958.jpeg" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <h1 className="text-xl font-semibold">Leonadr Yang</h1>
                            <FormModal table="profesor" type="update" data={{
                                id: 1,
                                username: "rodrigos",
                                email: "rodrigos@gmail.com",
                                firstName: "Dean",
                                lastName: "Rodrigo",
                                phone: +3816343234,
                                address:"123 Beogratska, Vranje, Serbia",
                                bloodType:"A-",
                                dataOfBirthday:"2001-18-01",
                                sex:"male",
                                img:"https://images.pexels.com/photos/8035303/pexels-photo-8035303.jpeg"

                            }}/>
                        </div>
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
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400" >Branches</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
                            <Image src= "/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">6%</h1>
                                <span className="text-sm text-gray-400" >Lessons</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
                            <Image src= "/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400" >Classes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                    <div className="mt-4 bg-white p-4 rounded-md h-[800px]">
                        <h1 className="font-semibold text-xl">Profesor&apos;s Schedule</h1>
                        <BigCalendar/>
                    </div>
            </div>

            {/* Right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Profesor&apos;s Classes</Link>
                    <Link className="p-3 rounded-md bg-lamaPurpuleLight" href="/">Profesor&apos;s Students</Link>
                    <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">Profesor&apos;s Lessons</Link>
                    <Link className="p-3 rounded-md bg-pink-50" href="/">Profesor&apos;s Exams</Link>
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Profesor&apos;s Assignments</Link>
                </div>
            </div>
            <PyeChart/>
            <Announcements/>
            </div>
        </div>
    )
}

export default SingleProfesorPage