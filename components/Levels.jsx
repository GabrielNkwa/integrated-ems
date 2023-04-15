import React from 'react'
import DataTable from '../components/DataTable'

const Levels = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex-col justfy-center h-full'>
        <h2 className='py-4'>Alert Level</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 bg-green-600 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='a-auto'>
                         
                        </div>
                        <div className='flex flex-col itm'>
                        <h3>Low</h3>
                        </div>
                </div>
       

        </div>


        </div>
        <div className='p-6 bg-yellow-800 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='a-auto'>
                         
                        </div>
                        <div className='flex flex-col itm'>
                        <h3>Medium</h3>
                        </div>
                </div>
       

        </div>


        </div>
        <div className='p-6 bg-red-500 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='a-auto'>
                         
                        </div>
                        <div className='flex flex-col itm'>
                        <h3>High</h3>
                        </div>
                </div>
       

        </div>


        </div>
     

        </div>
        <br />
        <DataTable/>
        </div>
       
      </div>

     
  )
}

export default Levels