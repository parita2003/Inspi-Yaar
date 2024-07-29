import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TempCards from './TempCards'

export interface TEMPLATE{
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?:FORM[]
}

export interface FORM{
    label: string, 
    field: string,
    name: string,
    required?: boolean
}

function TemplateListSection({userSearchInput}: any) {
    const [templateList, setTemplateList]=useState(Templates)
    useEffect(()=>{
        if(userSearchInput){
            const filterData= Templates.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            setTemplateList(filterData);
        }else{
            setTemplateList(Templates);
        }
    },[userSearchInput])

  return (
    <div className='grid grid-col md:grid-cols-3 lg:grid-cols-4 gap-5 p-8'>
      {templateList.map((item:TEMPLATE, index: number) => (
        <TempCards 
        key={index}
        {...item} /> 
      ))}
    </div>
  )
}

export default TemplateListSection
