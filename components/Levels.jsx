import React from 'react'
import DataTable from '../components/DataTable'

const Levels = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex-col justfy-center h-full'>
        <h2 className='py-4'>Alert Level</h2>
      
        <br />
        <DataTable/>
        </div>
       
      </div>

     
  )
}

export default Levels