import React from 'react'

import logo from '@/assets/images/logo.svg'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";

let links = [ 
    {
        href: '#',
        title: 'Home'
    },
    {
        href: '#',
        title: 'New'
    },
    {
        href: '#',
        title: 'Trending'
    },
    {
        href: '#',
        title: 'Popular'
    },
    {
        href: '#',
        title: 'Category'
    }
]

function MobileNavLinks(){
    return (
        <div className='flex justify-between py-5'>
            {/* <img src='https://raw.githubusercontent.com/whoisseth/news-homepage/c237438c7ea2bb5c725112fc631e6dc42eefa284/src/assets/images/logo.svg' alt='logo'/> */}
    
            {/* for Links */}
            <div className='gap-4 items-center flex'>
    
                {
                    links.map(  (data,index)=> (
                        <Link className=' hover:text-yellow-500 transition-none'  key={index} href={data.href}>
                        {data.title}
                            
                        </Link> )
                ) 
                }     
             
            </div>
    
    
    
            <div className='fixed flex h-screen bg-black opacity-20 w-full justify-end'>
                
     
                <div className='w-[20%] h-full'>
    
                <div className='flex flex-col gap-8'>
    
    
                    <div className='flex flex-col gap-8 bg-white h-full w-[40%] '>
    
                    <div className='flex w-full justify-end'>
                    <AiOutlineClose className='text-7xl cursor-pointer'/>
                    </div>
    
                        {
                            links.map(  (data,index)=> (
                                <Link className='flex-auto hover:text-yellow-500 transition-none'  key={index} href={data.href}>
                                {data.title}
                                    
                                </Link> )
                        ) 
                        }     
                     </div>
                 
                </div>
    
                </div>
    
            </div>
    
    
        </div>
      )

}

export default function Navbar() {



  return (
    <div className='flex justify-between py-5'>
        {/* <img src='https://raw.githubusercontent.com/whoisseth/news-homepage/c237438c7ea2bb5c725112fc631e6dc42eefa284/src/assets/images/logo.svg' alt='logo'/> */}

        {/* for Links */}
        <div className='gap-4 items-center flex hidden sm:flex'>

            {
                links.map(  (data,index)=> (
                    <Link className=' hover:text-yellow-500 transition-none'  key={index} href={data.href}>
                    {data.title}
                        
                    </Link> )
            ) 
            }     
         
        </div>



        <div className='fixed flex h-screen bg-black opacity-20 w-full justify-end'>
            
 
            <div className='w-[20%] h-full'>

            <div className='flex flex-col gap-8'>


                <div className='flex flex-col gap-8 bg-white h-full w-[40%] '>

                <div className='flex w-full justify-end'>
                <AiOutlineClose className='text-7xl cursor-pointer'/>
                </div>

                    {
                        links.map(  (data,index)=> (
                            <Link className='flex-auto hover:text-yellow-500 transition-none'  key={index} href={data.href}>
                            {data.title}
                                
                            </Link> )
                    ) 
                    }     
                 </div>
             
            </div>

            </div>

            <MobileNavLinks/>



        </div>

        <IoMdMenu className='text-7xl'/>


    </div>
  )
}


