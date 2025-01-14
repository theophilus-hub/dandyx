import React from 'react'

function Footer() {
  return (
    <div className='relative flex flex-col justify-center items-center px-2 md:px-28 py-12 w-full'>
      
      <div className='w-full flex justify-between items-center px-2 md:px-6 py-12 mb-6'>
        <div className='w-1/2 '>
            <h2 className='text-base md:text-xl'>DANDYx Business Empire is a company duly registered with RC Number: 3649840<br /> under the Laws of the Federal Republic of Nigeria</h2>
        </div>
        <div className='space-y-2 text-base md:text-xl'>
            <h1 className='font-bold '>Contact us</h1>
            <p>Email address :<br /> info@dandyx.ng</p>
            <p>Phone number :<br /> +234 903 8567 279</p>
            <div className='flex justify-start space-x-4'>
                <img src="/ig.png" className='w-6' alt="" />
                <img src="/x.png" className='w-6' alt="" />
                <img src="/tg.png" className='w-6' alt="" />
            </div>
        </div>
      </div>
      <p className='text-sm md:text-base text-center py-4'>Copyrights 2024, Dandyx. All rights reserved.</p>

      <img src="/greenstar.png" className='absolute right-0 bottom-0' alt="" />
      <img src="/purplestar.png" className='absolute left-0 bottom-0' alt="" />

    </div>
  )
}

export default Footer
