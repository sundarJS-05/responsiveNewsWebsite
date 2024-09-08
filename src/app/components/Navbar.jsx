
"use client"

import React, { useState } from 'react'

import logo from '@/assets/images/logo.svg'
import Image from "next/image";
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


export default function Navbar() {
    
    let [menuOpen, setMenuOpen] = useState(false)

    const [animationParent] = useAutoAnimate()


  return (
    <div className='flex justify-between py-5'  ref={animationParent}>
        <img src='https://raw.githubusercontent.com/whoisseth/news-homepage/c237438c7ea2bb5c725112fc631e6dc42eefa284/src/assets/images/logo.svg' />


        {/* for Links */}

        <div className='items-center gap-4 hidden sm:flex'>     
                    {
                        links.map(  (data,index)=> (
                            <Link className='flex-auto hover:text-yellow-500 transition-none'  key={index} href={data.href}>
                            {data.title}
                                
                            </Link> )
                    ) 
                    }     
            </div>
            
            { menuOpen && <MobileNavLinks   setMenuOpen={setMenuOpen}  />  } 

            <IoMdMenu className='text-7xl  cursor-pointer sm:hidden'  
            onClick={  ()=>( setMenuOpen(true))  }/>
  

    </div>
  )
}




function MobileNavLinks(setMenuOpen){

    return (
        <div className='flex h-screen justify-end bg-black/50 w-full sm:hidden'>
            {/* <img src='https://raw.githubusercontent.com/whoisseth/news-homepage/c237438c7ea2bb5c725112fc631e6dc42eefa284/src/assets/images/logo.svg' alt='logo'/> */}
    

            {/* WHITE contianer */}
            <div className='flex flex-col gap-5 bg-white h-full w-[60%]'>

                <div className='flex justify-end w-full'>
                <AiOutlineClose className='text-7xl cursor-pointer'/>

                </div>

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

        </div>
            
    
        </div>
      )

}