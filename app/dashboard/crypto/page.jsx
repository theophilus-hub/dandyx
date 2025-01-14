import Header from "@/components/dash/header";
import MobileNav from "@/components/dash/mobileNav";
import MobileNav2 from "@/components/dash/mobileNav2";
import Nav from "@/components/dash/nav";
import Link from "next/link";
import React from "react";

function Crypto() {
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
              <MobileNav2 menu="Crypto" />
            </div>
            <div className="px-4 py-6  space-y-4">
                <div>
                    <Link href={"/dashbaord/giftcards/buy"}>
                <div className=" w-full bg-main rounded-2xl py-4 px-4 space-y-6">
                  <img src="/wcrypto.png" alt="" />
                  <div className="space-y-1">
                    <h1 className="font-medium text-xl text-white">
                    Buy Crypto
                    </h1>
                    <p className="text-white font-light opacity-80 text-xs">
                    Buy your coins here at best rates today
                    </p>
                  </div>
                </div>
              </Link>
                </div>
              
<div>
    <Link href={"/dashbaord/giftcards/buy"}>
                <div className=" w-full bg-secmain rounded-2xl py-4 px-4 space-y-6">
                  <img src="/gcrypto.png" alt="" />
                  <div className="space-y-1">
                    <h1 className="font-medium text-xl text-text">
                    Sell Crypto
                    </h1>
                    <p className="text-text font-light opacity-80 text-xs">
                    Sell your coins and collect sweet cash for the flexing
                    </p>
                  </div>
                </div>
              </Link>
</div>
              

              
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Crypto;
