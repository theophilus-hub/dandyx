import React from 'react'

function PhoneSection2() {
  return (
    <div className='flex flex-col md:hidden bg-[url("../public/bg2.png")] bg-cover font-poppins py-4 justify-center items-center'>

      <h4 className='font-bold text-sm text-center font-poppins'>Why OPT FOR DANDYx?</h4>
      <div className='grid grid-cols-2 gap-2 p-4'>
            <div className='h-[150px] flex-1 flex flex-col justify-center items-center space-y-2 bg-white rounded-t-2xl px-2 pt-2'>
                <img 
                    src={'/icon.png'}
                />
                <h4 className='font-bold text-sm text-center text-text'>Regular Rate update</h4>
                <p className='pt-5 font-normal text-[8px] text-center text-textsecc'>This ensures you're always up-to-date<br />with current pricing</p>
            </div>
            <div className='h-[150px] flex-1 flex flex-col justify-center items-center space-y-2 bg-white rounded-t-2xl px-2 pt-4'>
                <img 
                    src={'/icon.png'}
                />
                <h4 className='font-bold text-sm text-center text-text'>Fast Response</h4>
                <p className='pt-5 font-normal text-[8px] text-center text-textsecc'>Swift responses and prompt action are<br />crucial in trading, making Dandyx an<br />excellent choice</p>
            </div>
            <div className='h-[170px] flex-1 flex flex-col justify-center items-center space-y-2 bg-white rounded-b-2xl px-2'>
                <img 
                    src={'/icon.png'}
                />
                <h4 className='font-bold text-sm text-center text-text'>Government Approved</h4>
                <p className=' font-normal text-[8px] text-center text-textsecc'>Dandyx is accredited by the Corporate Affairs Commission (CAC), meeting industry standards and committed to
                professionalism</p>
            </div>
            <div className='h-[170px] flex-1 flex flex-col justify-center items-center space-y-2 bg-white rounded-b-2xl px-2'>
                <img 
                    src={'/icon.png'}
                />
                <h4 className='font-bold text-sm text-center text-text'>Excellence</h4>
                <p className='pt-5 font-normal text-[8px] text-center text-textsecc'>Whether it's our customer service, trading speed or the competitive rates, excellence is the benchmark for everything we do at Dandyx</p>
            </div>
      </div>
    </div>
  )
}

export default PhoneSection2
