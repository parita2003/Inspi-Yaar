"use client"
import React,{ useState } from 'react'
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
      {/* Search section  */}
      <SearchSection onSearchInput={(value:string) => setUserSearchInput(value)}></SearchSection>
      {/* Templates list section  */}
      <TemplateListSection userSearchInput={userSearchInput}></TemplateListSection>
    </div>
  )
}

export default Dashboard;