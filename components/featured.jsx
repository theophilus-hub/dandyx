import React from 'react'

function Featured() {
  return (
    <div className='px-4 md:px-20 py-6 md:py-12 flex flex-col text-textsec shadow-md'>
        <h4 className='font-bold text-sm md:text-xl'>Featured Giftcards</h4>
        <div className='px-2 md:px-32 flex justify-center items-center'>
            <img
            src={"/frame.png"}
            alt='frame'
        />
        </div>
        
    </div>
  )
}

export default Featured
