import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export const Agencies = () => {
  return (
    <div id='skills' className='pt-50 w-full lg:h-screen p-2'>
    <div className='max-w-[1240px] mx-auto flex-col justfy-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5] '></p>
          <h2 className='py-4'>Agencies</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <Link href='/nema'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='a-auto'>
                          <Image
                          src='/../public/assets/agencies/nema.png'
                          width='64'
                          height='64'
                          alt='/'
                          />
                      </div>
                      <div className='flex flex-col itm'>
                      <h4>National Emergency Management Agency</h4>
                      </div>
              </div>
              </Link>
          </div>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <Link href='/ffs'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='a-auto'>
                          <Image
                          src='/../public/assets/agencies/ffs.jpg'
                          width='64'
                          height='64'
                          alt='/'
                          />
                      </div>
                      <div className='flex flex-col itm'>
                      <h4>Federal Fire Service</h4>
                      </div>
              </div>
              </Link>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <Link href='/frsc'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='a-auto'>
                          <Image
                          src='/../public/assets/agencies/frsc-.jpg'
                          width='64'
                          height='64'
                          alt='/'
                          />
                      </div>
                      <div className='flex flex-col itm'>
                      <h4>Federal Road Safety Commission</h4>
                      </div>
              </div>
              </Link>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <Link href='/npf'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='a-auto'>
                          <Image
                          src='/../public/assets/agencies/npf.jpg'
                          width='64'
                          height='64'
                          alt='/'
                          />
                      </div>
                      <div className='flex flex-col itm'>
                      <h4>Nigerian Police Force</h4>
                      </div>
              </div>
              </Link>
          </div>

          </div>
          </div>
          
          </div>
  )
}
