import React from 'react'

function Mission() {
  return (
    <div className='font-poppins flex flex-col md:flex-row space-y-12 md:space-y-0 justify-around relative flex-1 py-8 px-4 mb-16'>
      <div className='relative px-4 space-y-6'>
      <h1 className='font-bold text-center text-sm md:text-3xl'>MISSION</h1>
        <p className='font-bold text-xs md:text-lg md:py-24 px-4'>We pledge to deliver exceptional services that enhance our customers' lives and aid in building a sustainable future in a growing digital world. Moreover, we harness our skills and technologies to ensure transparency, integrity and accountability in our day to day transactions with our valued customers.</p>
        <div className='hidden absolute top-1 -left-4 md:left-12 md:flex justify-center '>
          <img 
            src='/mission.png'
            className='w-full'
        />  
        </div>
        <div className='md:hidden absolute top-0 left-32 flex justify-center '>
          <img 
            src='/mission2.png'
            className='w-full'
        />  
        </div>
        
      </div>


      <div className='relative px-4 space-y-6'>
      <h1 className='font-bold text-center text-sm md:text-3xl'>VISION</h1>
        <p className='font-bold text-xs md:text-lg md:py-24 px-4'>We're committed to becoming a leading exchange in Africa, continually improving benefits for our customers. Our dedication to integrity and accountability defines our brand excellence. We're making great progress on our roadmap, and we couldn't do it without you, Chief.</p>
        <div className='hidden absolute top-1 -left-4 md:left-12 md:flex justify-center '>
          <img 
            src='/vision.png'
            className='w-full'
        />  
        </div>
        <div className='md:hidden absolute top-0 left-28 flex justify-center '>
          <img 
            src='/vision2.png'
            className='w-full'
        />  
        </div>
        
      </div>
    </div>
  )
}

export default Mission
