import Header from '@/components/dash/header'
import MobileNav from '@/components/dash/mobileNav'
import MobileNav2 from '@/components/dash/mobileNav2'
import Nav from '@/components/dash/nav'
import Link from 'next/link'
import React from 'react'

function Settings() {
  return (
    <>
    <div className="hidden w-full min-h-screen  md:flex font-poppins ">
      <Nav />

      <div className=" w-2/3 xl:w-3/4 px-4 xl:px-12 py-32">
        <Header />
      </div>
    </div>

    {/* mobile */}
    <div className="font-poppins text-text flex flex-col md:hidden">
      <main className=" font-poppins ">
        <div className="relative">
          <div className="z-20">
            <MobileNav2 menu='Settings' />
          </div>
          <div className="px-4 py-6  space-y-8">
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-start justify-center text-text'>
                    <h4 className='text-sm'>Password</h4>
                    <p className=' opacity-70 text-xs'>Update existing password</p>
                </div>
                <div>
                    <button className=' bg-secmain text-main text-xs p-2 rounded-full'>Change Password</button>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-start justify-center text-text'>
                    <h4 className='text-sm'>Withdrawal Pin</h4>
                    <p className=' opacity-70 text-xs'>Your 4-digit withdrawal pin</p>
                </div>
                <div>
                    <button className=' bg-secmain text-main text-xs p-2 rounded-full'>Set Withdrawal Pin</button>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-start justify-center text-text'>
                    <h4 className='text-sm'>2-Factor Authentication</h4>
                    <p className=' opacity-70 text-xs'>Add additional security to your account</p>
                </div>
                <div>
                    <button className=' bg-secmain text-main text-xs p-2 rounded-full'>Enable 2-FA</button>
                </div>
            </div>

          </div>
        </div>
        
      </main>
    </div>
  </>
  )
}

export default Settings
