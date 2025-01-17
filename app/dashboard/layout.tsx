import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout(
    {children,
    }: Readonly<{
        children: React.ReactNode;
    }>
){
  return (
    <div className=' h-screen '>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav></SideNav>
        </div>
        <div className='md:ml-64'>
            <Header></Header>
            {children}
        </div>
    </div>
  )
}

export default layout;
