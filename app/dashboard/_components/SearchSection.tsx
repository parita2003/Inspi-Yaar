import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}: any) {
  return (
    <div className='p-5 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-500 justify-center items-center text-white flex flex-col'>
      <h2 className='text-2xl font-medium'>Browse all the Templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
            <Search className='text-primary'></Search>
            <input type="text" placeholder='Search..' onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-primary'/>
        </div>
        </div>
    </div>
  )
}

export default SearchSection
