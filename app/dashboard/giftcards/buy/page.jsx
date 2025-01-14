import Header from "@/components/dash/header";
import MobileNav from "@/components/dash/mobileNav";
import MobileNav2 from "@/components/dash/mobileNav2";
import Nav from "@/components/dash/nav";
import Link from "next/link";
import React from "react";

function Buy() {
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
              <MobileNav2 menu="Buy Giftcards" />
            </div>
            <div className="px-4 py-6  space-y-10">
             
            <div className="w-full h-full p-2 z-10 space-y-4">
            <h1 className="text-sm text-heading font-bold text-left">
            Which card would you like to buy?
            </h1>
            
            <div className="flex flex-col space-y-3 py-2">
              
              <div className="w-full">
                <label className="text-heading text-xs font-semibold">
                  Select Card
                </label>
                <input className="border border-border w-full  rounded-lg h-8" />
              </div>
              <div className="w-full">
                <label className="text-heading text-xs font-semibold">
                  Select Region
                </label>
                <input className="border border-border w-full  rounded-lg h-8" />
              </div>
              <div className="w-full">
                <label className="text-heading text-xs font-semibold">
                  Select Value
                </label>
                <input className="border border-border w-full  rounded-lg h-8" />
              </div>

              <div className="w-full">
                <label className="text-heading text-xs font-semibold">
                  Number of Cards
                </label>
                <input className="border border-border w-full  rounded-lg h-8" />
              </div>
              
              

             
            </div>
          </div>
             
              <div className="space-y-4">
                
                  <div className=" w-full bg-secmain rounded-2xl py-4 px-4 h-40">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between text-text text-sm font-semibold">
                            <h2>Exchange rate</h2>
                            <h2>₦1,080/$</h2>
                        </div>
                     

                      <div className="w-full flex justify-between items-end pr-6">
                        <div className="flex flex-col space-y-1">
                          <h3 className="text-[9px] font-medium">
                            Amount to be deducted
                          </h3>
                          <div className=" flex items-center justify-start space-x-4">
                            <h2 className="text-text text-3xl font-semibold">
                              ₦ 0.00
                            </h2>
                            <img src="/eye.png" alt="" />
                          </div>
                        </div>
                        <div className="flex space-x-1 items-center py-2">
                          <h2 className="text-text text-xs">NGN</h2>
                          <img src="/carrow.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                
                <div className="">
                    <button className="text-text text-xs px-3 py-2 rounded-full bg-green-100">
                        Your Balance : ₦ 0.00
                    </button>
                    
                </div>
              </div>

              
                <div className="flex items-center justify-center">
                    <button className="text-white bg-main py-2.5 px-10 rounded-full font-semibold">
                        Buy Giftcard
                    </button>
                </div>
         
              
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Buy;
