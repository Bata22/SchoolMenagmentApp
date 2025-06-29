'use client'

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
// import ProfesorFrom from "./Forms/ProfesorForm";
// import StudentForm from "./Forms/StudentForm";

const ProfesorForm = dynamic(()=>import("./Forms/ProfesorForm"),{
    loading: ()=> <h1>Loading</h1>
})

const StudentForm = dynamic(()=>import("./Forms/StudentForm"),{
    loading: ()=> <h1>Loading</h1>
})

const ParentForm = dynamic(()=>import("./Forms/ParentForm"),{
    loading: ()=> <h1>Loading</h1>
})

const SubjectForm = dynamic(()=>import("./Forms/SubjectForm"),{
    loading: ()=> <h1>Loading</h1>
})

const ClassForm = dynamic(()=>import("./Forms/ClassForm"),{
    loading: ()=> <h1>Loading</h1>
})

// const ParentForm = dynamic(()=>import("./Forms/ParentForm"),{
//     loading: ()=> <h1>Loading</h1>
// })

// const ProfesorForm = dynamic(()=>import("./Forms/ProfesorForm"),{
//     loading: ()=> <h1>Loading</h1>
// })

// const StudentForm = dynamic(()=>import("./Forms/StudentForm"),{
//     loading: ()=> <h1>Loading</h1>
// })

// const ParentForm = dynamic(()=>import("./Forms/ParentForm"),{
//     loading: ()=> <h1>Loading</h1>
// })

// const ProfesorForm = dynamic(()=>import("./Forms/ProfesorForm"),{
//     loading: ()=> <h1>Loading</h1>
// })

// const StudentForm = dynamic(()=>import("./Forms/StudentForm"),{
//     loading: ()=> <h1>Loading</h1>
// })

// const ParentForm = dynamic(()=>import("./Forms/ParentForm"),{
//     loading: ()=> <h1>Loading</h1>
// })

// const ProfesorForm = dynamic(()=>import("./Forms/ProfesorForm"),{
//     loading: ()=> <h1>Loading</h1>
// })






const forms:{[key:string]:(type:"create" | "update" ,data?:any)=>JSX.Element;   
}={
    profesor: (type,data) => <ProfesorForm type={type} data={data } />,
    student: (type,data) => <StudentForm type={type} data={data} />,
    parent: (type,data) => <ParentForm type = {type} data={data} />,
    subject: (type,data) => <SubjectForm type={type} data={data} />,
    class: (type,data) => <ClassForm type={type} data={data} />,
    // lesson: (type,data) => <ParentForm type = {type} data={data} />,
    // exam: (type,data) => <ProfesorForm type={type} data={data } />,
    // assignment: (type,data) => <ProfesorForm type={type} data={data } />,
    // result: (type,data) => <StudentForm type={type} data={data } />,
    // announcement: (type,data) => <ParentForm type = {type} data={data} />
    
    
}

const FormModal = ({table,type,data,id}
    :
    {table: "profesor" | "student" | "parent"
        | "subject"
        | "class"
        | "lesson"
        | "exam"
        | "assignment"
        | "result"
        | "attendance"
        | "event"
        | "announcement";
        type:"create" | "update" | "delete";
        data?:any; //for now because no db at the moment
        id?:number;
    })=> {
        //Dinamic chage buttons
        const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
        const color = type === "create" ? "bg-lamaYellow" : type === "update" ?  "bg-lamaSky" : "bg-lamaPurpule"  
        const [open, setOpen] =  useState(false);

        const Form = () => {
            return type === "delete" && id ? 
                <form className="p-4 flex flex-col gap-4" action="">
                    <span className="text-center font-medium">All data will be lost. Are you sure you want to delete this {table} ?</span>
                    <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>

                </form> : type === "create" || type === "update" ? forms[table](type,data) : "Form not found"
        }


    return (
        
       <>
            <button className={`${size}  flex items-center justify-between rounded-full relative  ${color} `} onClick = {()=>setOpen(true) }>
                <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={`/${type}.png`} alt="" width={16} height={16} />
            </button>
            {
                open && <div className="w-screen h-screen absolute left-0  top-0 bg-black bg-opacity-60 z-50 flex items-center justify-between">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:[60%] xl:w-[50%] 2xl:w-[40%] left-1/2 transform -translate-x-1/2 ">
                    <Form/>
                        <div className= "rounded-md absolute top-4 right-4 cursor-pointer" onClick={()=>setOpen(false)} >
                            <Image  src="/close.png" alt="" width={14} height={14} />
                        </div>
                    </div>
                  
                </div>
            }
            
       </>
    )
    
} 


export default FormModal