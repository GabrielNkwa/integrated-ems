import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import { Table } from '@nextui-org/react';
import FrscTable from '../components/FrscTable';


const frsc = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src='' alt='' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white' >
        <h2 className='py-2'>Federal Road Safety Commission</h2>
        </div>
        </div>



        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
        <p>Reports</p>
        
        
     


        </div>
        </div>
         <FrscTable/> 
        </div>

        
        
  )
}

export default frsc