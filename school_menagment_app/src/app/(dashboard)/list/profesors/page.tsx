import FormModal from "@/components/FormModel"
import ListTable from "@/components/ListTable"
import Paigging from "@/components/Pagging"
import TableSearch from "@/components/TableSearch"
import { profesorsData, role } from "@/lib/data"
import prisma from "@/lib/prisma"
import { ITEM_PER_PAGE } from "@/lib/settings"
import { Class, Profesor, Subject } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

type ProfesorsList = Profesor & {subjects: Subject[]} & {classes: Class[]}

const coulmns = [
    {
        header:"Info", 
        accesor:"info"
    },
    {
        header:"Profesor ID", 
        accesor:"profesorId", 
        className:"hidden md:table-cell"
    },
    {
        header:"Subjects", 
        accesor:"subject", 
        className:"hidden md:table-cell"
    },
    {
        header:"Classes", 
        accesor:"classes", 
        className:"hidden md:table-cell"
    },
    {
        header:"Phone", 
        accesor:"phone", 
        className:"hidden lg:table-cell"
    },
    {
        header:"Address", 
        accesor:"address", 
        className:"hidden lg:table-cell"
    },
      {
        header:"Actions", 
        accesor:"actions", 
        
    }
]
   const renderRow = (item: ProfesorsList )  => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpuleLight">
            <td className="flex items-center gap-4 p-4">
                <Image 
                    src={item.image || "/noAvatar.png"} 
                    alt="" 
                    width={40}   
                    height={40} 
                    className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col ">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.username}</td>
            <td className="hidden md:table-cell">{item.subjects.map(subject => subject.name).join(", ")}</td>
            <td className="hidden md:table-cell">{item.classes.map(classes => classes.name).join(", ")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                     <Link href= {`/list/profesors/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-s-full bg-lamaSky">
                            <Image src="/view.png" alt="" width={16} height={16}/>
                        </button>
                    </Link>
                      
                    {
                      role === "admin" && (
                         <>
                            <FormModal table="profesor" type="update" data={item}/>
                            <FormModal table="profesor" type="delete" id={item.id}/>
                        </>
                      )
                    }
                </div>
            </td>
        </tr>
    )


const ProfesorListPage = async ({searchParams}
:{searchParams:{ [key:string]: string | undefined } 
}) => {
    const{page, ...queryParams} = searchParams
    const p = page? parseInt(page) : 1

    const [profesorData, count] = await prisma.$transaction([
        prisma.profesor.findMany({
            include:{
                subjects: true,
                classes:  true
            },
            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p-1)
    }),
        prisma.profesor.count()

    ])
    

    

 
    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
            {/* TOP Section */}
                <div className="flex items-center justify-between">
                    <h1 className="hidden md:block text-lg font-semibold"> All Profesors</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                       <TableSearch/>
                       <div className="flex  items-center gap-4 self-end">
                            <button className="w-8 h-8 flex items-center justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src="/filter.png" alt="" width={14} height={14}/>
                            </button>
                            <button className="w-8 h-8 flex items-center  justify-between rounded-full bg-lamaYellow relative">
                                <Image className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/sort.png" alt="" width={14} height={14}/>
                            </button>
                            {   
                                role == "admin" && ( 
                                    <FormModal table="profesor" type="create"  />
                                    
                            )}
                         
                       </div>   
                    </div>
                </div>
                {/* List */}
                <ListTable columns={coulmns} renderRow = {renderRow} data={profesorData}/>

                {/* Paigging */}
                <Paigging page={p} count={count}/>

        </div>
    )
}

export default ProfesorListPage