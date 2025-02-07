import React from 'react'

function Nav() {
  return (
    <div className="z-50 relative w-1/3 xl:w-1/4 bg-secmain  rounded-r-3xl flex flex-col justify-between items-center gap-12 py-12">
        <div className=" w-full flex flex-col justify-center items-center px-4">
          <img src="/dandyx2.png" className="px-4" alt="" />
          <div className="bg-main w-full h-[3px] rounded-full"></div>
          
        </div>
        <div className="w-full px-4 lg:px-16 flex flex-col justify-center space-y-6">
        <div>
            <button className="flex items-center justify-start w-full gap-4  text-xl bg-main py-3 px-6 rounded-lg text-text">
                <span><img src="/overview1.png"  alt="" /></span>
                Overview
            </button>
        </div>
        <div>
            <button className="flex items-center justify-start w-full gap-4  text-xl py-3 px-6 rounded-lg text-text">
                <span><img src="/gift2.png"  alt="" /></span>
                Giftcards
            </button>
        </div>
        <div>
            <button className="flex items-center justify-start w-full gap-4  text-xl py-3 px-6 rounded-lg text-text">
                <span><img src="/crypto2.png"  alt="" /></span>
                Crypto
            </button>
        </div>
        <div>
            <button className="flex items-center justify-start w-full gap-4  text-xl py-3 px-6 rounded-lg text-text">
                <span><img src="/trans2.png"  alt="" /></span>
                Transactions
            </button>
        </div>
        <div>
            <button className="flex items-center justify-start w-full gap-4  text-xl py-3 px-6 rounded-lg text-text">
                <span><img src="/settings2.png"  alt="" /></span>
                Settings
            </button>
        </div>

        </div>
        <div>
            <button className="flex items-center justify-center gap-4 font-semibold text-xl bg-main py-3 px-6 rounded-lg text-text">
                <span><img src="/profile.png"  alt="" /></span>
                My Profile
            </button>
        </div>

       
      </div>
  )
}

export default Nav
