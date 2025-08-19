"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '/headernew.module.css'

export default function HeaderNew() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <header style={{fontFamily: "var(--font-nunito-sans)"}} className='z-10 text-3xl bg-white'>
          <div className='gap-10 relative h-17 flex items-center justify-center'>
            <Link href="/about">about us</Link>

            <div className='h-full items-center flex'
              onMouseEnter={()=> setIsHovered(true)}
              onMouseLeave={()=> setIsHovered(false)} >
              <Link 
                className='relative'
                href="/">
                ambassadorship ⌄
              </Link>
            </div>
            
            <Link href="/events">events</Link>
          </div>

          { isHovered &&
            <div 
               onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              className='absolute text-2xl pb-4 bg-white justify-items-center justify-center flex flex-col gap-1.5 w-full'>
              <div className='w-55 mx-auto'>ambassadors</div>
              <div className='w-55 mx-auto'>projects</div>
              <div className='w-55 mx-auto'>industry</div>
              <div className='w-55 mx-auto'>journalism</div>
            </div>
          } 

        </header>
    );

}