import Header from "@/components/dash/header";
import MobileNav from "@/components/dash/mobileNav";
import MobileNav2 from "@/components/dash/mobileNav2";
import Nav from "@/components/dash/nav";
import Link from "next/link";
import React from "react";

function Wallet() {
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
              <MobileNav2 menu="Wallet" />
            </div>
            <div className="px-4 py-6  space-y-10">
              <div>
                <Link href={"/dashbaord/giftcards/buy"}>
                  <div className=" w-full bg-secmain rounded-2xl py-4 px-4 h-40">
                    <div className="space-y-6">
                      <h1 className="font-medium text-text">
                        Withdraw your cash
                      </h1>

                      <div className="w-full flex justify-between items-end pr-6">
                        <div className="flex flex-col space-y-1">
                          <h3 className="text-[9px] font-medium">
                            Available balance
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
                </Link>
              </div>

              <div className="flex items-center justify-start space-x-4">
                <div className="flex items-center justify-center bg-secmain py-3 px-3 rounded-full space-x-2">
                  <div className="w-[18px] h-[18px] flex justify-center items-center text-white rounded-full bg-main">
                    +
                  </div>
                  <h4 className="text-xs font-medium">Top up Account</h4>
                </div>

                <div>
                  <Link href={"/dashboard/wallet"}>
                    <button className="flex py-2 px-4 text-xs gap-1 font-medium bg-secmain rounded-full items-center justify-center space-x-1">
                      <span>
                        <img src="/cash2.png" alt="" />
                      </span>
                      <h4 className="text-text">Withdraw</h4>
                    </button>
                  </Link>
                </div>
              </div>

            <div className="flex flex-col space-y-6">
                <div className="flex items-center justify-between">
                <h1 className="text-text font-medium text-sm">Bank Details</h1>
                <button className=" px-3 py-1 border border-secmain rounded-full">
                Add Recipients
                </button>
              </div>
              <div className="w-full flex itemss-center justify-center">
                <img src="/bank.png" alt="" />
              </div>
            </div>
              
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Wallet;
