import Header from "@/components/dash/header";
import MobileNav from "@/components/dash/mobileNav";
import MobileNav2 from "@/components/dash/mobileNav2";
import Nav from "@/components/dash/nav";
import Link from "next/link";
import React from "react";

function Giftcards() {
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
              <MobileNav2 menu="Giftcards" />
            </div>
            <div className="px-4 py-6  space-y-4">
                <div>
                    <Link href={"/dashboard/giftcards/buy"}>
                <div className=" w-full bg-main rounded-2xl py-4 px-4 space-y-6">
                  <img src="/wgift.png" alt="" />
                  <div className="space-y-1">
                    <h1 className="font-medium text-xl text-white">
                      Buy Gift Cards
                    </h1>
                    <p className="text-white font-light opacity-80 text-xs">
                      Experience best market rates on all major international
                      gift cards anywhere in Nigeria in a blink.
                    </p>
                  </div>
                </div>
              </Link>
                </div>
              
<div>
    <Link href={"/dashboard/giftcards/sell"}>
                <div className=" w-full bg-secmain rounded-2xl py-4 px-4 space-y-6">
                  <img src="/gcash.png" alt="" />
                  <div className="space-y-1">
                    <h1 className="font-medium text-xl text-text">
                    Sell Gift Cards
                    </h1>
                    <p className="text-text font-light opacity-80 text-xs">
                    Quickly select and sell your gift cards, sweet rate - fast cashout.
                    </p>
                  </div>
                </div>
              </Link>
</div>
              
<div>
<Link href={"/dashboard/giftcards"}>
                <div className=" w-full bg-secmain rounded-2xl py-4 px-4 space-y-6">
                  <img src="/ggift.png" alt="" />
                  <div className="space-y-1">
                    <h1 className="font-medium text-xl text-text">
                    Virtual Cards <span className="text-main">(Coming Soon)</span>
                    </h1>
                    <p className="text-text font-light opacity-80 text-xs">
                    Purchase your virtual mastarcard and apple card here.
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

export default Giftcards;
