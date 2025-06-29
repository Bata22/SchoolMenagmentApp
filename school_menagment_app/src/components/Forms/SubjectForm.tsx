"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';



const schema = z.object({
  subjectName: z
  .string()
  .min(3, { message: 'Subject name  must be at least 3 characters long !' }),
  profesorsFirstName: z.string().min(3,{message:'Profesor first name must have at least 3 characters'}),
  profesorsLastName: z.string().min(3,{message: 'Profesor last name must have at least 3 characters'}),
  
});

type Inputs = z.infer<typeof schema>;

const SubjectForm = ({type, data}:{type:"create" | "update",data?:any}) => {


const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const addSubject = handleSubmit


    return (<form className='flex  flex-col gap-8' onSubmit={addSubject(data=>{
        console.log(data)
    })} >
        <h1 className='text-xl font-semibold'>Add a new subject </h1>
        <span className='text-xs text-gray-400 font-medium'>Subject Information</span>
        <div className='flex flex-wrap gap-4 justify-between'>
          <InputField label='Subject Name ' name="subjectName" defaultValue={data?.subjectName} register={register} error={errors.subjectName} />
          <InputField label='Profesor First Name' name="profesorFirstName" defaultValue={data?.profesorFirstName} register={register} error={errors.profesorsFirstName} />
          <InputField label='Profesor Last Name' name="profesorLastName" defaultValue={data?.profesorLastName} register={register} error={errors.profesorsLastName} />
        </div>
          
    
        
        <button className='bg-blue-400 text-white p-2 rounded-md' >{type === "create" ? "Create" : "Update"}</button>
        
        </form>

    )
}

export default SubjectForm