"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';



const schema = z.object({
  classN: z
  .string()
  .min(1, { message: 'Subject name  must be at least 1 characters long !' })
  .max(2,{message:'Class need to have one leter and one nuber only'}),
  capacity: z.string(),
  grade: z.string(),
  superVisor: z.string().min(7,{message: 'Need to have full name enter'}),
  
});

type Inputs = z.infer<typeof schema>;

const ClassForm = ({type, data}:{type:"create" | "update",data?:any}) => {


const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const addClass = handleSubmit


    return (<form className='flex  flex-col gap-8' onSubmit={addClass(data=>{
        console.log(data)
    })} >
        <h1 className='text-xl font-semibold'>Add a new class</h1>
        <span className='text-xs text-gray-400 font-medium'>Class Information</span>
        <div className='flex flex-wrap gap-4 justify-between'>
          <InputField label='Class Name ' name="classN" defaultValue={data?.subjectName} register={register} error={errors.classN} />
          <InputField label='Capacity' name="capacity" defaultValue={data?.capacity} register={register} error={errors.capacity} />
          <InputField label='Grade' name="grade" defaultValue={data?.grade} register={register} error={errors.grade} />
        </div>
        <div className='flex flex-wrap gap-4 justify-between'>
             <InputField label='Supervisor' name="supervisor" defaultValue={data?.superVisor} register={register} error={errors.superVisor} />
        </div>
          
    
        
        <button className='bg-blue-400 text-white p-2 rounded-md' >{type === "create" ? "Create" : "Update"}</button>
        
        </form>

    )
}

export default ClassForm