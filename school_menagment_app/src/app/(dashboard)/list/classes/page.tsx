
import ListTable from "@/components/ListTable"
import Paigging from "@/components/Pagging"
import TableSearch from "@/components/TableSearch"
import {role, classesData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Class = {
    id:number,
    name:string,
    capacity:number,
    grade:number,
    supervisor:string,
  
}

const coulmns = [
    {
        header:"Class Name", 
        accesor:"className"
    },
    {
        header:"Capacity", 
        accesor:"capacity", 
        className:"hidden md:table-cell"
    },
    {
        header:"Grade", 
        accesor:"grade", 
        className:"hidden lg:table-cell"
    },
    {
        header:"Supervisor", 
        accesor:"supervisor", 
        className:"hidden lg:table-cell"
    },
      {
        header:"Actions", 
        accesor:"actions", 
        
    }
]

const ClassListPage = () => {

    const renderRow = (item:Class) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpuleLight">
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-col ">
                    <h3 className="font-semibold">{item.name}</h3>
                   
                </div>
            </td>
            <td className="hidden md:table-cell">{item.capacity}</td>
            <td className="hidden lg:table-cell">{item.grade}</td>
            <td className="hidden lg:table-cell">{item.supervisor}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href= {`/list/profesors/${item.id}`}>
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
                    <h1 className="hidden md:block text-lg font-semibold"> All Classes</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                       <TableSearch/>
                       <div className="flex  items-center gap-4 self-end">
                            <button className="w-8 h-8 flex items-center justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src="/filter.png" alt="" width={14} height={14}/>
                            </button>
                            <button className="w-8 h-8 flex items-center  justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/sort.png" alt="" width={14} height={14}/>
                            </button>
                            {role == "admin" && (
                                <button className="w-8 h-8 flex items-center justify-between rounded-full bg-lamaYellow relative">
                                    <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/plus.png" alt="" width={14} height={14}/>
                                </button>
                            )}
                            
                       </div>
                    </div>
                </div>
                {/* List */}
                <ListTable columns={coulmns} renderRow = {renderRow} data={classesData}/>

                {/* Paigging */}
                <Paigging/>

        </div>
    )
}

export default ClassListPage