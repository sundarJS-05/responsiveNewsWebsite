
"use client"

import React, { useState } from 'react'

import logo from '@/assets/images/logo.svg'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";

import { useAutoAnimate } from '@formkit/auto-animate/react'

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

function MobileNavLinks(setMenuOpen){


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
                    <AiOutlineClose className='text-7xl cursor-pointer'  onClick={ ()=> ( setMenuOpen(false))}/>
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
    
    let [menuOpen, setMenuOpen] = useState(false)

    const [animationParent] = useAutoAnimate()


  return (
    <div className='flex justify-between py-5'>
        {/* <img src='https://raw.githubusercontent.com/whoisseth/news-homepage/c237438c7ea2bb5c725112fc631e6dc42eefa284/src/assets/images/logo.svg' alt='logo'/> */}

        {/* for Links */}


        <div className='fixed flex h-screen bg-black opacity-20 w-full justify-end'>
            
 
            <div className='w-[20%] h-full'>

            <div className='flex flex-col gap-8'>


                <div className='flex flex-col gap-8 bg-white h-full w-[40%] ' ref={animationParent}>

                    {
                        links.map(  (data,index)=> (
                            <Link className='flex-auto hover:text-yellow-500 transition-none'  key={index} href={data.href}>
                            {data.title}
                                
                            </Link> )
                    ) 
                    }     
                 </div>

                 <div className='flex w-full justify-end'>
                <AiOutlineClose className='text-7xl cursor-pointer'/>
                </div>
             
            </div>

            </div>

        </div>

         { menuOpen && <MobileNavLinks   setMenuOpen={setMenuOpen}  />  } 

        <IoMdMenu className='text-7xl  cursor-pointer sm:hidden'  
        onClick={  ()=>( setMenuOpen(true))  }
    
        
        />


    </div>
  )
}


