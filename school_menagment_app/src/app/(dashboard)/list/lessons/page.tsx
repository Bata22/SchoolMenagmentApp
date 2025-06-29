
import FormModal from "@/components/FormModel"
import ListTable from "@/components/ListTable"
import Paigging from "@/components/Pagging"
import TableSearch from "@/components/TableSearch"
import {role, lessonsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Lesson = {
    id:number,
    subject:string,
    class:string,
    profesor:string
}

const coulmns = [
    {
        header:"Subject", 
        accesor:"subject"
    },
    {
        header:"Class", 
        accesor:"class", 
        className:"hidden md:table-cell"
    },
    {
        header:"Profesor", 
        accesor:"profesor", 
        className:"hidden md:table-cell"
    },
    {
        header:"Actions", 
        accesor:"actions", 
        
    }
]

const LessonListPage = () => {

    const renderRow = (item:Lesson  ) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpuleLight">
            <td className="flex items-center gap-4 p-4">{item.subject}</td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.profesor}</td>
            <td>
                <div className="flex items-center gap-2">
                    {
                      role === "admin" && (
                         <>
                            <FormModal table="lesson" type="update" data={item}/>
                            <FormModal table="lesson" type="delete" id={item.id}/>
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
                    <h1 className="hidden md:block text-lg font-semibold"> All Lessons</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                       <TableSearch/>
                       <div className="flex  items-center gap-4 self-end">
                            <button className="w-8 h-8 flex items-center justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src="/filter.png" alt="" width={14} height={14}/>
                            </button>
                            <button className="w-8 h-8 flex items-center  justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/sort.png" alt="" width={14} height={14}/>
                            </button>
                            {role === "admin" && (
                                <FormModal table="lesson" type="create"/>
                    
                            )}
                            
                       </div>
                    </div>
                </div>
                {/* List */}
                <ListTable columns={coulmns} renderRow = {renderRow} data={lessonsData}/>

                {/* Paigging */}
                <Paigging/>

        </div>
    )
}

export default LessonListPage