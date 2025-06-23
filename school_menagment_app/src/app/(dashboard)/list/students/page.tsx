
import ListTable from "@/components/ListTable"
import Paigging from "@/components/Pagging"
import TableSearch from "@/components/TableSearch"
import { studentsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Student = {
    id:number,
    studentId:string,
    name:string,
    email?:string,
    photo:string,
    phone?:string,
    grade:number,
    class: string,
    address: string
}

const coulmns = [
    {
        header:"Info", 
        accesor:"info"
    },
    {
        header:"Student ID", 
        accesor:"studentId", 
        className:"hidden md:table-cell"
    },
    {
        header:"Grade", 
        accesor:"grade", 
        className:"hidden md:table-cell"
    },
    {
        header:"Phone", 
        accesor:"phone", 
        className:"hidden md:table-cell"
    },
    {
        header:"Address", 
        accesor:"address", 
        className:"hidden md:table-cell"
    },
      {
        header:"Actions", 
        accesor:"actions", 
        
    }
]

const StudentListPage = () => {

    const renderRow = (item:Student) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpuleLight">
            <td className="flex items-center gap-4 p-4">
                <Image 
                    src={item.photo} 
                    alt="" 
                    width={40}   
                    height={40} 
                    className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col ">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.class}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.studentId}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href= {`/list/students/${item.id}`}>
                    <button className="w-7 h-7 flex items-center justify-center rounded-s-full bg-lamaSky">
                        <Image src="/view.png" alt="" width={16} height={16}/>
                    </button>
                    </Link>
                    {
                      role == "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center rounded-s-full bg-lamaPurpule">
                            <Image src="/delete.png" alt="" width={16} height={16}/>
                        </button>
                      )
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
            {/* TOP Section */}
                <div className="flex items-center justify-between">
                    <h1 className="hidden md:block text-lg font-semibold"> All Students</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                       <TableSearch/>
                       <div className="flex  items-center gap-4 self-end">
                            <button className="w-8 h-8 flex items-center justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src="/filter.png" alt="" width={14} height={14}/>
                            </button>
                            <button className="w-8 h-8 flex items-center  justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/sort.png" alt="" width={14} height={14}/>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/plus.png" alt="" width={14} height={14}/>
                            </button>
                       </div>
                    </div>
                </div>
                {/* List */}
                <ListTable columns={coulmns} renderRow = {renderRow} data={studentsData}/>

                {/* Paigging */}
                <Paigging/>

        </div>
    )
}

export default StudentListPage