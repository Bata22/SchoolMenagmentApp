
import FormModal from "@/components/FormModel"
import ListTable from "@/components/ListTable"
import Paigging from "@/components/Pagging"
import TableSearch from "@/components/TableSearch"
import {role, subjectsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { join } from "path"

type Subject = {
    id:number,
    name:string,
    profesors:string[],
    
}

const coulmns = [
    {
        header:"Subject Name", 
        accesor:"subjectName", 
        className:"hidden md:table-cell"
    },
    {
        header:"Profesors", 
        accesor:"profesors", 
        className:"hidden md:table-cell"
    },
    {
        header:"Actions", 
        accesor:"actions", 
        
    }
]

const SubjectsListPage = () => {

    const renderRow = (item:Subject  ) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpuleLight">
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-col ">
                    <h3 className="font-semibold">{item.name}</h3>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.profesors.join(",")}</td>
            <td>
                <div className="flex items-center gap-2">
                   
                    {
                      role == "admin" && (
                         <>
                            <FormModal table="subject" type="update" data={item}/>
                            <FormModal table="subject" type="delete" id={item.id}/>
                        </>
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
                    <h1 className="hidden md:block text-lg font-semibold"> All Subject</h1>
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
                               <FormModal table="subject" type="create"/>
                            )}
                            
                       </div>
                    </div>
                </div>
                {/* List */}
                <ListTable columns={coulmns} renderRow = {renderRow} data={subjectsData}/>

                {/* Paigging */}
                <Paigging/>

        </div>
    )
}

export default SubjectsListPage