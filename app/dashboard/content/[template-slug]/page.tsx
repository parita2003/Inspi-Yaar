"use client"
import React, { useState } from 'react'
import FormSection from '../_component/FormSection'
import OutputSection from '../_component/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChatSession } from '@google/generative-ai'
import { chatSession } from '@/utils/AiModel'

interface PROPS{
    params: {
        'template-slug':string
    }
}

function CreateNewContent(props:PROPS) {

  const selectedTemplate:TEMPLATE | undefined = Templates?.find((item)=>item.slug == props.params['template-slug'])
  const [loading, setloading]=useState(false);
  const [aiOutput, setAiOutput]=useState<string>('');

  const GenerateAIContent=async(formData:any)=>{
    setloading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;
    const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;

    const result=await chatSession.sendMessage(FinalAIPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response.text());
    setloading(false);
  }
  

  return (
    <div className='p-5'>
      <Link href={"/dashboard"}>
        <Button><ArrowLeft/> Back</Button>
      </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
          {/* form section  */}
              <FormSection 
                selectedTemplate={selectedTemplate}
                userFormInput={(v:any)=>GenerateAIContent(v)}
                loading={loading}
              ></FormSection>
          {/* output section  */}
              <div className='col-span-2'>
                <OutputSection aiOutput={aiOutput}></OutputSection>
              </div>
          </div>
    </div>
  )
}

export default CreateNewContent
