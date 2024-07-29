"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS{
  selectedTemplate?:TEMPLATE;
  userFormInput:any;
  loading:boolean;
}

function FormSection({selectedTemplate,userFormInput, loading}:PROPS) {

  
  const [formData, setFormData] = useState<any>();

  const onSubmit = (e:any) => {
    e.preventDefault();
    userFormInput(formData);
  }

  const handleInputChange = (event:any) => {
    const {name,value} = event.target;
    setFormData({...formData,[name]:value})
  }

  return (
    <div className='p-5 shadow-lg border rounded-lg '>
      {/*@ts-ignore */}
      <Image src={selectedTemplate?.icon} 
      alt="icon" width={70} height={70}/>
      <h2 className='font-semibold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item,index) =>(
          
          <div 
          key={index}
          className='my-2 flex flex-col gap-3 mb-7'>
            <label className='font-medium'>
              {item.label}
            </label>
            {item.field=='input'?<Input name={item.name} required={item?.required} onChange={handleInputChange}></Input>
            :
            item.field=='textarea'?<Textarea name={item.name} required={item?.required} onChange={handleInputChange}></Textarea>
            : null
          }
          </div>
        ))}
        <Button type='submit' className='w-full py-6' disabled={loading}>
          {loading&& <Loader2Icon className='animate-spin'></Loader2Icon>}
          Generate Content
        </Button>
      </form>

    </div>
  )
}

export default FormSection
