
import FormModal from "@/components/FormModel"
import ListTable from "@/components/ListTable"
import Paigging from "@/components/Pagging"
import TableSearch from "@/components/TableSearch"
import {role, announcementsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Announcement = {
    id:number,
    title:string,
    class:string,
    date:string,
    
}

const coulmns = [
    {
        header:"Title", 
        accesor:"title"
    },
    {
        header:"Class", 
        accesor:"class", 
        className:"hidden md:table-cell"
    },
    {
        header:"Date", 
        accesor:"date", 
        className:"hidden md:table-cell"
    },
    {
        header:"Actions", 
        accesor:"actions", 
        
    }
]

const AnnouncementListPage = () => {

    const renderRow = (item:Announcement ) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpuleLight">
            <td className="flex items-center gap-4 p-4">{item.title}</td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td>
                <div className="flex items-center gap-2">
                    {
                      role === "admin" && (
                       <>
                            <FormModal table="announcement" type="update" data={item}/>
                            <FormModal table="announcement" type="delete" id={item.id} />
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
                    <h1 className="hidden md:block text-lg font-semibold"> All Announcements</h1>
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
                                <FormModal table="announcement" type="create" />

                            )}
                            
                       </div>
                    </div>
                </div>
                {/* List */}
                <ListTable columns={coulmns} renderRow = {renderRow} data={announcementsData}/>

                {/* Paigging */}
                <Paigging/>

        </div>
    )
}

export default AnnouncementListPage